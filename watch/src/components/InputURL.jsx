// src/components/InputURL.jsx
import React, { useState } from 'react';

const InputURL = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate YouTube URL
    const videoId = getYouTubeVideoId(url);
    if (!videoId) {
      setError('Please enter a valid YouTube video URL.');
      setThumbnailUrl('');
      return;
    }

    setError('');
    setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`); // Set thumbnail URL
    onSubmit(url); // Call onSubmit with the valid URL
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null; // Return the video ID or null if not found
  };

  return (
    <div>
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube video URL"
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
      {thumbnailUrl && (
        <div className="mt-4">
          <h3 className="font-bold">Video Thumbnail:</h3>
          <img src={thumbnailUrl} alt="YouTube Thumbnail" className="w-full max-w-xs rounded" />
        </div>
      )}
    </div>
  );
};

export default InputURL;



// // src/components/InputURL.jsx
// import React, { useState } from 'react';

// const InputURL = ({ onSubmit }) => {
//   const [url, setUrl] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(url);
//   };

//   return (
//     <form className="flex space-x-2" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="flex-1 border p-2 rounded"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//         placeholder="Enter video URL"
//       />
//       <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default InputURL;
