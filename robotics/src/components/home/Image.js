import React, { useState } from "react";

function Image({ src, icon1, icon2, link1, link2 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="m-auto max-w-xs bg-white flex flex-col justify-center items-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        className="w-64 h-64"
        style={{
          filter: isHovered ? "blur(5px)" : "none",
        }}
      />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href={link1}>
            <i className={`fab fa-${icon1} fa-3x facebook`}  />
          </a> &nbsp;
          <a href={link2}>
            <i className={`fab fa-${icon2} fa-3x linkedin`} />
          </a>
        </div>
      )}
    </div>
  );
}

export default Image;
