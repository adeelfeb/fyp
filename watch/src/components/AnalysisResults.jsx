// src/components/AnalysisResults.js
import React, { useState } from 'react';
import { useAPI } from '../contexts/APIContext';
import Sidebar from './Sidebar';

const AnalysisResults = ({ onBack }) => {
  const { state } = useAPI();
  const { transcript, summary, qna, isLoading, error } = state;
  const [selectedTab, setSelectedTab] = useState('transcript');

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    switch (selectedTab) {
      case 'transcript':
        return transcript ? (
          <div>
            <h3>Transcript</h3>
            <p>{transcript}</p>
          </div>
        ) : (
          <p>No transcript available yet.</p>
        );
      case 'summary':
        return summary ? (
          <div>
            <h3>Summary</h3>
            <p>{summary}</p>
          </div>
        ) : (
          <p>No summary available yet.</p>
        );
      case 'qna':
        return qna ? (
          <div>
            <h3>Q&A</h3>
            <ul>
              {qna.map((q, index) => (
                <li key={index}>{q.question}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No Q&A available yet.</p>
        );
      case 'score':
        return <div>Score component (to be implemented)</div>;
      case 'history':
        return <div>History component (to be implemented)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="analysis-container">
      <button onClick={onBack}>Back to URL Input</button>
      <Sidebar setSelectedTab={setSelectedTab} />
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AnalysisResults;
