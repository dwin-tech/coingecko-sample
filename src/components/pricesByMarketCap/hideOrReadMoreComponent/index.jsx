import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";

function HideOrReadMoreComponent({ text }) {
  const [showLess, setShowLess] = useState(true);
  const maxLetters = 97;
  if (text.length <= maxLetters) {
    return <span>{text}</span>;
  }

  return (
    <div>
      {showLess ? `${text.substring(0, maxLetters)} ...` : text}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowLess(!showLess);
        }}
      >
        {showLess ? <span>Read More</span> : <span>Hide</span>}
      </a>
    </div>
  );
}

HideOrReadMoreComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HideOrReadMoreComponent;
