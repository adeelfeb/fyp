// // src/contexts/APIContext.jsx
// import React, { createContext, useContext, useReducer } from 'react';

// // Create the context
// const APIContext = createContext();

// // Hook to use the context
// export const useAPI = () => useContext(APIContext);

// // Initial state
// const initialState = {
//   transcript: null,
//   summary: null,
//   qna: null,
//   isLoading: false,
//   error: null,
// };

// // Reducer function
// const apiReducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_TRANSCRIPT_SUCCESS':
//       return { ...state, transcript: action.payload, isLoading: false };
//     case 'FETCH_SUMMARY_SUCCESS':
//       return { ...state, summary: action.payload, isLoading: false };
//     case 'FETCH_QNA_SUCCESS':
//       return { ...state, qna: action.payload, isLoading: false };
//     case 'LOADING':
//       return { ...state, isLoading: true };
//     case 'ERROR':
//       return { ...state, error: action.payload, isLoading: false };
//     default:
//       return state;
//   }
// };

// // APIContext provider component
// export const APIProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(apiReducer, initialState);

//   const fetchTranscript = async (url) => {
//     dispatch({ type: 'LOADING' });
//     try {
//       const response = await fetch(`/api/transcript`, { method: 'POST', body: JSON.stringify({ url }) });
//       const data = await response.json();
//       dispatch({ type: 'FETCH_TRANSCRIPT_SUCCESS', payload: data.transcript });
//     } catch (error) {
//       dispatch({ type: 'ERROR', payload: error.message });
//     }
//   };

//   const fetchSummary = async (url) => {
//     dispatch({ type: 'LOADING' });
//     try {
//       const response = await fetch(`/api/summary`, { method: 'POST', body: JSON.stringify({ url }) });
//       const data = await response.json();
//       dispatch({ type: 'FETCH_SUMMARY_SUCCESS', payload: data.summary });
//     } catch (error) {
//       dispatch({ type: 'ERROR', payload: error.message });
//     }
//   };

//   const fetchQnA = async (url) => {
//     dispatch({ type: 'LOADING' });
//     try {
//       const response = await fetch(`/api/qna`, { method: 'POST', body: JSON.stringify({ url }) });
//       const data = await response.json();
//       dispatch({ type: 'FETCH_QNA_SUCCESS', payload: data.qna });
//     } catch (error) {
//       dispatch({ type: 'ERROR', payload: error.message });
//     }
//   };

//   return (
//     <APIContext.Provider value={{ state, fetchTranscript, fetchSummary, fetchQnA }}>
//       {children}
//     </APIContext.Provider>
//   );
// };



///////////////////////////////////////////////////////////////////////







import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the context
const APIContext = createContext();

// Hook to use the context
export const useAPI = () => useContext(APIContext);

// Initial state
const initialState = {
  transcript: null,
  summary: null,
  qna: null,
  isLoading: { transcript: false, summary: false, qna: false },
  error: { transcript: null, summary: null, qna: null },
};

// Reducer function to handle loading and error for specific sections
const apiReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_TRANSCRIPT':
      return { ...state, isLoading: { ...state.isLoading, transcript: true } };
    case 'LOADING_SUMMARY':
      return { ...state, isLoading: { ...state.isLoading, summary: true } };
    case 'LOADING_QNA':
      return { ...state, isLoading: { ...state.isLoading, qna: true } };
    case 'FETCH_TRANSCRIPT_SUCCESS':
      return { ...state, transcript: action.payload, isLoading: { ...state.isLoading, transcript: false } };
    case 'FETCH_SUMMARY_SUCCESS':
      return { ...state, summary: action.payload, isLoading: { ...state.isLoading, summary: false } };
    case 'FETCH_QNA_SUCCESS':
      return { ...state, qna: action.payload, isLoading: { ...state.isLoading, qna: false } };
    case 'ERROR_TRANSCRIPT':
      return { ...state, error: { ...state.error, transcript: action.payload }, isLoading: { ...state.isLoading, transcript: false } };
    case 'ERROR_SUMMARY':
      return { ...state, error: { ...state.error, summary: action.payload }, isLoading: { ...state.isLoading, summary: false } };
    case 'ERROR_QNA':
      return { ...state, error: { ...state.error, qna: action.payload }, isLoading: { ...state.isLoading, qna: false } };
    default:
      return state;
  }
};

// APIContext provider component
export const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const fetchTranscript = async (url) => {
    dispatch({ type: 'LOADING_TRANSCRIPT' });
    try {
      const response = await fetch(`https://85f3-34-29-0-139.ngrok-free.app/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // Log the response for debugging
      dispatch({ type: 'FETCH_TRANSCRIPT_SUCCESS', payload: data.result }); // Use data.result here

      return data.result; // Return the result
    } catch (error) {
      console.error("Fetch Transcript Error:", error);
      dispatch({ type: 'ERROR_TRANSCRIPT', payload: error.message });
      throw error; // Rethrow the error to handle it in the component
    }
  };

  const fetchSummary = async (transcript) => {
    dispatch({ type: 'LOADING_SUMMARY' });
    try {
      const response = await fetch(`/api/summary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      dispatch({ type: 'FETCH_SUMMARY_SUCCESS', payload: data.summary });

      // Automatically fetch QnA after getting the summary
      await fetchQnA(data.summary);
    } catch (error) {
      console.error("Fetch Summary Error:", error);
      dispatch({ type: 'ERROR_SUMMARY', payload: error.message });
    }
  };

  const fetchQnA = async (transcript) => {
    dispatch({ type: 'LOADING_QNA' });
    try {
      const response = await fetch(`https://6d57-34-125-93-139.ngrok-free.app/qa`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      dispatch({ type: 'FETCH_QNA_SUCCESS', payload: data.qna });
    } catch (error) {
      console.error("Fetch QnA Error:", error);
      dispatch({ type: 'ERROR_QNA', payload: error.message });
    }
  };

  const sendTranscriptToAPI = async (transcript) => {
    try {
      const response = await fetch('/api/sendTranscript', { // Replace with your actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Response from sending transcript:', data); // Handle response as needed
    } catch (error) {
      console.error('Error sending transcript:', error);
    }
  };

  useEffect(() => {
    if (state.transcript) {
      sendTranscriptToAPI(state.transcript);
      fetchQnA(state.transcript); // Call fetchQnA whenever transcript changes
    }
  }, [state.transcript]); // Runs whenever the transcript changes

  return (
    <APIContext.Provider value={{ state, fetchTranscript, fetchSummary, fetchQnA }}>
      {children}
    </APIContext.Provider>
  );
};
