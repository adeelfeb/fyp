// // src/App.jsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import InputURL from './components/InputURL';
// import AnalysisResults from './components/AnalysisResults';
// import Quiz from './components/Quiz'; // Importing the Quiz component

// const App = () => {
//   const [currentSection, setCurrentSection] = useState('inputUrl');
//   const [transcriptData, setTranscriptData] = useState(null);
//   const [summaryData, setSummaryData] = useState(null);
//   const [qnasData, setQnasData] = useState(null);

//   const handleSelect = (section) => {
//     setCurrentSection(section);
//   };

//   const handleUrlSubmit = async (submittedUrl) => {
//     const transcriptResponse = await fetchTranscript(submittedUrl);
//     const summaryResponse = await fetchSummary(submittedUrl);
//     const qnasResponse = await fetchQnAs(submittedUrl);

//     setTranscriptData(transcriptResponse);
//     setSummaryData(summaryResponse);
//     setQnasData(qnasResponse);
//     setCurrentSection('transcript'); // Show transcript after submission
//   };

//   // Mock API call functions
//   const fetchTranscript = async (url) => {
//     return `Transcript for URL: ${url}`;
//   };

//   const fetchSummary = async (url) => {
//     return `Summary for URL: ${url}`;
//   };

//   const fetchQnAs = async (url) => {
//     return `QnAs for URL: ${url}`;
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar onSelect={handleSelect} />
//       <div className="w-3/4 p-4">
//         {currentSection === 'inputUrl' && <InputURL onSubmit={handleUrlSubmit} />}
//         {currentSection === 'transcript' && <AnalysisResults type="transcript" data={transcriptData} />}
//         {currentSection === 'summary' && <AnalysisResults type="summary" data={summaryData} />}
//         {currentSection === 'qnas' && <AnalysisResults type="qnas" data={qnasData} />}
//         {currentSection === 'quiz' && <Quiz />} {/* Display Quiz component here */}
//       </div>
//     </div>
//   );
// };

// exp// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import InputURL from './components/InputURL';
import AnalysisResults from './components/AnalysisResults'; // Placeholder for displaying results

const App = () => {
  const [currentSection, setCurrentSection] = useState('inputUrl'); // Initially show input URL
  const [url, setUrl] = useState('');
  const [transcriptData, setTranscriptData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [qnasData, setQnasData] = useState(null);

  const handleSelect = (section) => {
    setCurrentSection(section);
  };

  const handleUrlSubmit = async (submittedUrl) => {
    setUrl(submittedUrl);

    // Fetch transcript immediately and update state
    const transcriptResponse = await fetchTranscript(submittedUrl);
    setTranscriptData(transcriptResponse);

    // Fetch summary and QnAs in parallel
    fetchSummary(submittedUrl).then(setSummaryData);
    fetchQnAs(submittedUrl).then(setQnasData);
  };

  // Mock API call functions
  const fetchTranscript = async (url) => {
    // Simulating an API response
    return `Transcript for URL: ${url}`;
  };

  const fetchSummary = async (url) => {
    // Simulating an API response
    return `Summary for URL: ${url}`;
  };

  const fetchQnAs = async (url) => {
    // Simulating an API response
    return `QnAs for URL: ${url}`;
  };

  return (
    <div className="app flex">
      <Sidebar onSelect={handleSelect} />
      <div className="content flex-grow p-4">
        {currentSection === 'inputUrl' && <InputURL onSubmit={handleUrlSubmit} />}
        {currentSection === 'transcript' && <AnalysisResults type="transcript" data={transcriptData} />}
        {currentSection === 'summary' && <AnalysisResults type="summary" data={summaryData} />}
        {currentSection === 'quiz' && <AnalysisResults type="quiz" />} {/* Placeholder for Quiz */}
        {currentSection === 'qnas' && <AnalysisResults type="qnas" data={qnasData} />}
        {currentSection === 'score' && <AnalysisResults type="score" />}
        {currentSection === 'history' && <AnalysisResults type="history" />}
      </div>
    </div>
  );
};

export default App;
