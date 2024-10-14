// src/components/VideoInput.js
import React, { useState } from 'react';
import { useAPI } from '../contexts/APIContext';

const VideoInput = ({ onUrlSubmit }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const { fetchTranscript, fetchSummary, fetchQnA } = useAPI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoUrl) {
      // Trigger all API calls immediately
      fetchTranscript(videoUrl);
      fetchSummary(videoUrl);
      fetchQnA(videoUrl);
      onUrlSubmit(); // Switch to the analysis results view
    }
  };

  return (
    <div className="video-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube Video URL"
        />
        <button type="submit">Analyze</button>
      </form>
    </div>
  );
};

export default VideoInput;
