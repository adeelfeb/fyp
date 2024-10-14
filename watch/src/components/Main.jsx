// src/components/Main.js
import React, { useState } from 'react';
import VideoInput from './VideoInput';
import AnalysisResults from './AnalysisResults';

const Main = () => {
  const [showInput, setShowInput] = useState(true);

  return (
    <div className="main-container">
      {showInput ? (
        <VideoInput onUrlSubmit={() => setShowInput(false)} />
      ) : (
        <AnalysisResults onBack={() => setShowInput(true)} />
      )}
    </div>
  );
};

export default Main;
