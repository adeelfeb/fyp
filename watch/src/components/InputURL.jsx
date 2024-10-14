// src/components/InputURL.jsx
import React, { useState } from 'react';

const InputURL = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
      setUrl(''); // Clear the input after submitting
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-url-form">
      <input
        type="text"
        placeholder="Enter video URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input-url"
      />
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default InputURL;
