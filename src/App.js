import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player"; // Make sure this package is installed
import "./index.css";
import { FaPlay, FaPause } from "react-icons/fa"; // Import play/pause icons

const App = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [background, setBackground] = useState("bg1");

  const toggleMusic = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    // Array of background images
    const backgrounds = ["bg", "bg1", "bg2", "bg3", "bg4"];
    let index = 0;

    // Function to change the background image every 5 seconds
    const interval = setInterval(() => {
      index = (index + 1) % backgrounds.length;
      setBackground(backgrounds[index]);
    }, 10000); // 5000 ms = 5 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(/${background}.jpg)` }}>
      <div className="controls">
        <div className="music-control">
          <button onClick={toggleMusic}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>

      {/* ReactPlayer */}
      <ReactPlayer
        url="https://youtu.be/bDaswBd-_ck?si=eNSytztaiDOfQId0"
        playing={isPlaying}
        loop
        volume={0.5}
        width="0"
        height="0"
      />
    </div>
  );
};

export default App;
