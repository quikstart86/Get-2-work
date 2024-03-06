// VideoBackground.js

import React from 'react';
import './VideoBackground.css'; // Import CSS for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted key>
        <source src="./src/Images/Background-GP.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
