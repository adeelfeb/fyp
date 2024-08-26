import React, { useState } from "react";
import axios from "axios";
import './GettingInput.css';

export default function GettingInput({ onApiResponse, onStartLoading }) {
    const [url, setUrl] = useState(""); // State to store the URL input
    const [savedUrl, setSavedUrl] = useState(""); // State to store the saved URL

    // Function to validate the YouTube URL and extract the video ID
    const validateYouTubeUrl = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Handle input change
    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    // Function to send the URL to the API
    const sendUrlToAPI = async (url) => {
        try {
            onStartLoading();  // Trigger loading state in the parent component
            console.log("Sending URL to API:", url);  // Debugging log
            const response = await axios.post('http://127.0.0.1:5002/questions', { url }); // Replace with your ngrok URL
            console.log("Received response from API:", response.data);  // Debugging log
            setSavedUrl(url);
            onApiResponse(response.data);  // Call the callback function with the API response
        } catch (error) {
            console.error("Error sending the URL:", error);
            onApiResponse(null);  // Handle error case (e.g., set the response to null)
        }
    };

    // Handle input submit (Enter key press)
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
        const videoId = validateYouTubeUrl(url);
        if (videoId) {
            sendUrlToAPI(url); // Send URL to the API
            setUrl(""); // Clear the input field
        } else {
            alert("Please enter a valid YouTube URL.");
        }
    };

    // Handle button click
    const handleButtonClick = () => {
        const videoId = validateYouTubeUrl(url);
        if (videoId) {
            sendUrlToAPI(url); // Send URL to the API
            setUrl(""); // Clear the input field
        } else {
            alert("Please enter a valid YouTube URL.");
        }
    };

    return (
        <div className="containerForWork">
            <div className="summarize-container">
                <h1 className="summarize-title">Summarize Your Video</h1>
                <form onSubmit={handleSubmit} className="summarize-form">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="url-input"
                            value={url}
                            onChange={handleChange}
                            placeholder="Paste URL here"
                        />
                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="submit-button"
                        >
                            &#x270D; 
                        </button>
                    </div>
                </form>
                {savedUrl && <p className="saved-url">Saved URL: {savedUrl}</p>}
            </div>
        </div>
    );
}




// import React, { useState } from "react";
// import axios from "axios";
// import './GettingInput.css';

// export default function GettingInput({ onApiResponse, onStartLoading }) {  // Accept the callback as a prop
//     const [url, setUrl] = useState(""); // State to store the URL input
//     const [savedUrl, setSavedUrl] = useState(""); // State to store the saved URL

//     // Handle input change
//     const handleChange = (event) => {
//         setUrl(event.target.value);
//     };

//     // Function to send the URL to the API
//     const sendUrlToAPI = async (url) => {
//         try {
//             onStartLoading();  // Trigger loading state in the parent component
//             console.log("Sending URL to API:", url);  // Debugging log
//             const response = await axios.post('http://127.0.0.1:5002/questions', { url }); // Replace with your ngrok URL
//             console.log("Received response from API:", response.data);  // Debugging log
//             setSavedUrl(url);
//             onApiResponse(response.data);  // Call the callback function with the API response
//         } catch (error) {
//             console.error("Error sending the URL:", error);
//             onApiResponse(null);  // Handle error case (e.g., set the response to null)
//         }
//     };

//     // Handle input submit (Enter key press)
//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent form submission
//         if (url.trim()) {
//             sendUrlToAPI(url); // Send URL to the API
//             setUrl(""); // Clear the input field
//         }
//     };

//     // Handle button click
//     const handleButtonClick = () => {
//         if (url.trim()) {
//             sendUrlToAPI(url); // Send URL to the API
//             setUrl(""); // Clear the input field
//         }
//     };

//     return (
//         <div className="containerForWork">
//             <div className="summarize-container">
//                 <h1 className="summarize-title">Summarize Your Video</h1>
//                 <form onSubmit={handleSubmit} className="summarize-form">
//                     <div className="input-wrapper">
//                         <input
//                             type="text"
//                             className="url-input"
//                             value={url}
//                             onChange={handleChange}
//                             placeholder="Paste URL here"
//                         />
//                         <button
//                             type="button"
//                             onClick={handleButtonClick}
//                             className="submit-button"
//                         >
//                             &#x270D; 
//                         </button>
//                     </div>
//                 </form>
//                 {savedUrl && <p className="saved-url">Saved URL: {savedUrl}</p>}
//             </div>
//         </div>
//     );
// }
