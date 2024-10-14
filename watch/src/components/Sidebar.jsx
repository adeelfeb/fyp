// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 flex flex-col space-y-2">
      <button
        onClick={() => onSelect('inputUrl')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Input URL
      </button>
      <button
        onClick={() => onSelect('transcript')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Transcript
      </button>
      <button
        onClick={() => onSelect('summary')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Summary
      </button>
      <button
        onClick={() => onSelect('quiz')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Quiz
      </button>
      <button
        onClick={() => onSelect('qnas')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        QnAs
      </button>
      <button
        onClick={() => onSelect('score')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Score
      </button>
      <button
        onClick={() => onSelect('history')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        History
      </button>

    </div>
  );
};

export default Sidebar;
