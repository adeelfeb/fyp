import React, { useState } from "react";
import { APIProvider } from './contexts/APIContext'; // Import your APIProvider
import Sidebar from './components/Sidebar';
import InputURL from './components/InputURL';
import AnalysisResults from './components/AnalysisResults';
import Header from './components/Header';
import Summarize from './components/Summarize'; // Import Summarize component

const App = () => {
    const [currentSection, setCurrentSection] = useState('inputUrl');
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
        return `Transcript for URL: ${url}`;
    };

    const fetchSummary = async (url) => {
        return `Summary for URL: ${url}`;
    };

    const fetchQnAs = async (url) => {
        return `QnAs for URL: ${url}`;
    };

    return (
        <APIProvider>
            <Header />
            <Summarize onSelect={handleSelect} />
        </APIProvider>
    );
};

export default App;
