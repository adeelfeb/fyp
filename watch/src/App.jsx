import React, { useState } from "react";
import Sidebar from './components/Sidebar';
import InputURL from './components/InputURL';
import AnalysisResults from './components/AnalysisResults';
import Header from './components/Header';

const App = () => {
    const [currentSection, setCurrentSection] = useState('inputUrl');
    const [isLoginOpen, setIsLoginOpen] = useState(false); // State for controlling login popup
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
        <div>
            <Header />
            <div className="app flex">
                <Sidebar onSelect={handleSelect} />
                <div className="content flex-grow p-4">
                    {currentSection === 'inputUrl' && <InputURL onSubmit={handleUrlSubmit} />}
                    {currentSection === 'transcript' && <AnalysisResults type="transcript" data={transcriptData} />}
                    {currentSection === 'summary' && <AnalysisResults type="summary" data={summaryData} />}
                    {currentSection === 'quiz' && <AnalysisResults type="quiz" />}
                    {currentSection === 'qnas' && <AnalysisResults type="qnas" data={qnasData} />}
                    {currentSection === 'score' && <AnalysisResults type="score" />}
                    {currentSection === 'history' && <AnalysisResults type="history" />}
                </div>
            </div>
    
        </div>
    );
};

export default App;
