import React, { useState } from 'react';
import {} from "./home.css";

function Image({ src }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative' }}
      >
        <img
          src={src}
          style={{ filter: isHovered ? 'blur(5px)' : 'none' }}
          className="rounded-full w-64 h-64"
        />
        {isHovered && (
          <div >
            <a href="https://facebook.com" target="_blank">
                  <button className="facebook">
                    <i className="fab fa-facebook"></i>
                  </button>
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <button className="linkedin">
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
          </div>
        )}
      </div>
    );
  }

export default Image;