// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ onNavigate, onGoBack }) => {
  return (
    <div className="sidebar">
      <button onClick={() => onGoBack()}>Input URL</button>
      <button onClick={() => onNavigate('transcript')}>Transcript</button>
      <button onClick={() => onNavigate('summary')}>Summary</button>
      <button onClick={() => onNavigate('qnas')}>QnAs</button>
      <button onClick={() => onNavigate('score')}>Score</button>
      <button onClick={() => onNavigate('history')}>History</button>
    </div>
  );
};

export default Sidebar;
