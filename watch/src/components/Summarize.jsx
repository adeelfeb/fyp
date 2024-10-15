import React, { useState } from 'react';
import Sidebar from './Sidebar';
import InputURL from './InputURL';
import AnalysisResults from './AnalysisResults';

function Summarize() {
    const [currentSection, setCurrentSection] = useState('inputUrl');
    const [transcriptData, setTranscriptData] = useState(null);
    const [summaryData, setSummaryData] = useState(null);
    const [qnasData, setQnasData] = useState(null);

    const handleSelect = (section) => {
        setCurrentSection(section);
    };

    return (
        <div className="app flex">
            <Sidebar onSelect={handleSelect} />
            <div className="content flex-grow p-4 mt-18">
                {currentSection === 'inputUrl' && <InputURL onSubmit={handleUrlSubmit} />}
                {currentSection === 'transcript' && <AnalysisResults type="transcript" data={transcriptData} />}
                {currentSection === 'summary' && <AnalysisResults type="summary" data={summaryData} />}
                {currentSection === 'quiz' && <AnalysisResults type="quiz" />}
                {currentSection === 'qnas' && <AnalysisResults type="qnas" data={qnasData} />}
                {currentSection === 'score' && <AnalysisResults type="score" />}
                {currentSection === 'history' && <AnalysisResults type="history" />}
            </div>
        </div>
    );
}

export default Summarize;
