// BackgroundVideo.js
import React from "react";
import "./Backgroundvideo.css"; // Import CSS file for styling
import backgroundVideo from "../Imagess/Mountains2.mp4"; // Adjust the path

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content" style={{paddingTop:'0px'}}>
        <h1 style={{fotnsize:'200px'}}>Welcome to Chardham Yatra</h1>
        <p style={{fontSize:'20px'}}>
          Explore the sacred destinations of Yamunotri, Gangotri, Kedarnath, and  Badrinath.
        </p>
        <a href="/about-us">
          <button type="button" class="btn btn-info" href="/about-us">
            About Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default BackgroundVideo;


