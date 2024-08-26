import React, { useEffect, useState } from "react";
import "./VideoDetails.css";

function VideoDetails({ videoUrl }) {
    const [videoTitle, setVideoTitle] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (videoUrl) {
            const videoId = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            if (videoId) {
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId[1]}/0.jpg`;
                setThumbnailUrl(thumbnailUrl);

                // Fetch the video title using YouTube Data API (You need an API key)
                const fetchVideoTitle = async () => {
                    try {
                        const response = await fetch(
                            `https://www.googleapis.com/youtube/v3/videos?id=${videoId[1]}&part=snippet&key=YOUR_API_KEY`
                        );
                        const data = await response.json();
                        if (data.items.length > 0) {
                            setVideoTitle(data.items[0].snippet.title);
                            setError(""); // Clear error if API call is successful
                        } else {
                            setError("Unable to fetch video details.");
                        }
                    } catch (error) {
                        setError("Failed to fetch video details. Please try again.");
                    }
                };

                fetchVideoTitle();
            } else {
                setError("Invalid YouTube video URL.");
            }
        }
    }, [videoUrl]);

    return (
        <div className="video-details">
            {error ? (
                <p className="error-message">{error}</p>
            ) : (
                <>
                    {thumbnailUrl && <img src={thumbnailUrl} alt="YouTube Thumbnail" />}
                    <h3>{videoTitle || "Loading title..."}</h3>
                </>
            )}
        </div>
    );
}

export default VideoDetails;
