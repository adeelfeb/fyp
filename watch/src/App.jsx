// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import InputURL from './components/InputURL';
import AnalysisResults from './components/AnalysisResults'; // Placeholder for displaying results

const App = () => {
  const [currentSection, setCurrentSection] = useState('inputUrl'); // Initially, show input URL

  const handleNavigate = (section) => {
    setCurrentSection(section);
  };

  const handleUrlSubmit = (url) => {
    // Handle API call here with the submitted URL
    console.log('Submitted URL:', url);
    setCurrentSection('transcript'); // You can show any section after submitting the URL if needed
  };

  const handleGoBack = () => {
    setCurrentSection('inputUrl');
  };

  return (
    <div className="app">
      <Sidebar onNavigate={handleNavigate} onGoBack={handleGoBack} />
      <div className="content">
        {currentSection === 'inputUrl' && <InputURL onSubmit={handleUrlSubmit} />}
        {currentSection === 'transcript' && <AnalysisResults type="transcript" />}
        {currentSection === 'summary' && <AnalysisResults type="summary" />}
        {currentSection === 'qnas' && <AnalysisResults type="qnas" />}
        {currentSection === 'score' && <AnalysisResults type="score" />}
        {currentSection === 'history' && <AnalysisResults type="history" />}
      </div>
    </div>
  );
};

export default App;
