import React from "react";
import "./Block.css";

export default function Link({ href, id, style, linkText }) {
  const handleClick = (e) => {
    if (!href) {
      e.preventDefault();
    }
  };

  return (
    <a
      className="aTag"
      id={id}
      style={style}
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {linkText}
    </a>
  );
}
