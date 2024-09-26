import React, { useState } from "react";
import "./Summarize.css";
import TempTakeQuiz from "./TempTakeQuiz";
import GettingInput from "./GettingInput";
import Modal from "react-modal";
import VideoDetails from "./VideoDetails";

Modal.setAppElement('#root');

export default function Summarize() {
    const [visible, setVisible] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle API response
    const handleApiResponse = (response) => {
        if (response) {
            setApiResponse(response);
        } else {
            // No response or invalid URL, clear the API response
            setApiResponse(null); // Clear the API response
        }
        setLoading(false); // Stop loading state
    };

    const handleStartLoading = () => {
        console.log("Loading started...");
        setLoading(true);
    };

    const checkQuizQuit = () => {
        const userConfirmed = window.confirm("You are about to leave the Quiz. Do you want to proceed?");
        if (userConfirmed) {
            setVisible(false);
        }
    };

    return (
        <div className="containerForWork">
            <div className="left-menu">
                <button className="menu-button" disabled={false}>
                    Input URL
                </button>
                <button className="menu-button" disabled={!apiResponse || !apiResponse.videoUrl}>
                    Transcript
                </button>
                <button className="menu-button" disabled={!apiResponse || !apiResponse.videoUrl}>
                    Summary
                </button>
                <button className="menu-button" disabled={!apiResponse || !apiResponse.videoUrl}>
                    Take Quiz
                </button>
                <button className="menu-button" disabled={!apiResponse || !apiResponse.videoUrl}>
                    History
                </button>
            </div>

            <div className="main-content">
                {/* Input URL and Video Details */}
                <GettingInput 
                    onApiResponse={handleApiResponse} 
                    onStartLoading={handleStartLoading} 
                />

                {apiResponse && apiResponse.videoUrl && (
                    <VideoDetails videoUrl={apiResponse.videoUrl} />
                )}

                {/* Take Quiz Button */}
                <div className="take-quiz-container">
                    <div className="QuizPopUpDiv">
                        {loading ? (
                            <div className="spinner"></div>
                        ) : (
                            <button 
                                onClick={() => {
                                    console.log("Starting Quiz");
                                    setVisible(true);
                                }} 
                                disabled={!apiResponse || !apiResponse.videoUrl}
                            >
                                Start Quiz
                            </button>
                        )}

                        <Modal
                            isOpen={visible && apiResponse}
                            onRequestClose={() => setVisible(false)}
                            className="fixed inset-0 flex justify-center items-center p-4"
                            overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
                            shouldCloseOnOverlayClick={true}
                        >
                            <div className="bg-transparent p-0 rounded-lg relative">
                                <button 
                                    onClick={checkQuizQuit} 
                                    className="absolute top-2 right-2 text-4xl font-bold text-gray-500 hover:text-gray-700 p-2"
                                >
                                    &times;
                                </button>
                                {apiResponse && <TempTakeQuiz apiResponse={apiResponse} />}
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}















// import React, { useState } from "react";
// import "./Summarize.css";
// import TempTakeQuiz from "./TempTakeQuiz";
// import GettingInput from "./GettingInput";
// import Modal from "react-modal";
// import VideoDetails from "./VideoDetails";

// Modal.setAppElement('#root');

// export default function Summarize() {
//     const [visible, setVisible] = useState(false);
//     const [apiResponse, setApiResponse] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // Handle API response
//     const handleApiResponse = (response) => {
//         if (response) {
//             setApiResponse(response);
//         } else {
//             // No response or invalid URL, clear the API response
//             setApiResponse(null); // Clear the API response
//         }
//         setLoading(false); // Stop loading state
//     };

//     const handleStartLoading = () => {
//         console.log("Loading started...");
//         setLoading(true);
//     };

//     const checkQuizQuit = () => {
//         const userConfirmed = window.confirm("You are about to leave the Quiz. Do you want to proceed?");
//         if (userConfirmed) {
//             setVisible(false);
//         }
//     };

//     return (
//         <div className="containerForWork">
//             <GettingInput 
//                 onApiResponse={handleApiResponse} 
//                 onStartLoading={handleStartLoading} 
//             />

//             {apiResponse && apiResponse.videoUrl && (
//                 <VideoDetails videoUrl={apiResponse.videoUrl} />
//             )}

//             <div className="take-quiz-container">
//                 <div className="QuizPopUpDiv">
//                     {loading ? (
//                         <div className="spinner"></div>
//                     ) : (
//                         <button 
//                             onClick={() => {
//                                 console.log("Starting Quiz");
//                                 setVisible(true);
//                             }} 
//                             disabled={!apiResponse || !apiResponse.videoUrl}
//                         >
//                             Start Quiz
//                         </button>
//                     )}

//                     <Modal
//                         isOpen={visible && apiResponse}
//                         onRequestClose={() => setVisible(false)}
//                         className="fixed inset-0 flex justify-center items-center p-4"
//                         overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
//                         shouldCloseOnOverlayClick={true}
//                     >
//                         <div className="bg-transparent p-0 rounded-lg relative">
//                             <button 
//                                 onClick={checkQuizQuit} 
//                                 className="absolute top-2 right-2 text-4xl font-bold text-gray-500 hover:text-gray-700 p-2"
//                             >
//                                 &times;
//                             </button>
//                             {apiResponse && <TempTakeQuiz apiResponse={apiResponse} />}
//                         </div>
//                     </Modal>
//                 </div>
//             </div>
//         </div>
//     );
// }
















// import React, { useState } from "react";
// import "./Summarize.css";
// import TempTakeQuiz from "./TempTakeQuiz";
// import Summary from "./Summary";
// import GettingInput from "./GettingInput";
// import Modal from "react-modal";

// // Ensure that you set the app element to avoid screen readers reading outside the modal
// Modal.setAppElement('#root');

// export default function Summarize() {
//     const [visible, setVisible] = useState(false);
//     const checkQuizQuit = () => {
//         // Display confirmation dialog
//         const userConfirmed = window.confirm("You are about to leave the Quiz. Do you want to proceed?");
    
//         // If user confirms, proceed with closing the modal
//         if (userConfirmed) {
//             setVisible(false);
//         }
//         // If user cancels, do nothing
//     }
    

//     return (
//         <div className="containerForWork">
//             <GettingInput />

//             <div className="take-quiz-container">
//                 <Summary />
//                 <div className="QuizPopUpDiv">
//                     <button onClick={() => setVisible(true)}>Start Quiz</button>

//                     <Modal
//                         isOpen={visible}
//                         onRequestClose={() => setVisible(false)}
//                         className="fixed inset-0 flex justify-center items-center p-4"
//                         overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
//                         shouldCloseOnOverlayClick={true} // Ensures clicking on the overlay closes the modal
//                     >
//                         <div className="bg-transparent p-0 rounded-lg relative">
//                             {/* Cross Icon */}
//                             <button 
//                                 onClick={checkQuizQuit} 
//                                 className="absolute top-2 right-2 text-4xl font-bold text-gray-500 hover:text-gray-700 p-2"
//                             >
//                                 &times;
//                             </button>
//                             <TempTakeQuiz />
//                         </div>


//                     </Modal>
//                 </div>
//             </div>
//         </div>
//     );
// }
