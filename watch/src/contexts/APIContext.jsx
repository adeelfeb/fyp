// src/contexts/APIContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

// Create the context
const APIContext = createContext();

// Hook to use the context
export const useAPI = () => useContext(APIContext);

// Initial state
const initialState = {
  transcript: null,
  summary: null,
  qna: null,
  isLoading: false,
  error: null,
};

// Reducer function
const apiReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TRANSCRIPT_SUCCESS':
      return { ...state, transcript: action.payload, isLoading: false };
    case 'FETCH_SUMMARY_SUCCESS':
      return { ...state, summary: action.payload, isLoading: false };
    case 'FETCH_QNA_SUCCESS':
      return { ...state, qna: action.payload, isLoading: false };
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

// APIContext provider component
export const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const fetchTranscript = async (url) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await fetch(`/api/transcript`, { method: 'POST', body: JSON.stringify({ url }) });
      const data = await response.json();
      dispatch({ type: 'FETCH_TRANSCRIPT_SUCCESS', payload: data.transcript });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  const fetchSummary = async (url) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await fetch(`/api/summary`, { method: 'POST', body: JSON.stringify({ url }) });
      const data = await response.json();
      dispatch({ type: 'FETCH_SUMMARY_SUCCESS', payload: data.summary });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  const fetchQnA = async (url) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await fetch(`/api/qna`, { method: 'POST', body: JSON.stringify({ url }) });
      const data = await response.json();
      dispatch({ type: 'FETCH_QNA_SUCCESS', payload: data.qna });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  return (
    <APIContext.Provider value={{ state, fetchTranscript, fetchSummary, fetchQnA }}>
      {children}
    </APIContext.Provider>
  );
};
