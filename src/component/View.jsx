import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const image = location.state.image; // received image

  if (!image) return null;   // safety

  return (
    <div className="view-section">
      <div className="view-overlay">
        <img src={image} className="view-image" />

        <div class="overlay" style={{ transform: "translateY(0)", background: "none" }}>
          <h2 style={{ transform: "translateY(0)", opacity: "1" }}>Elegant Hall Sections</h2>
          <p style={{ transform: "translateY(0)", opacity: "1" }}>Spacious and beautifully designed hall sections for your special celebrations</p>
        </div>

        <span
          className="close-btn"
          onClick={() => navigate(-1)}   // go back
        >
          ✕
        </span>
      </div>
    </div>

  );
};

export default View;
