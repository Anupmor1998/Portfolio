import React from "react";
import "./Top.css";

const Top = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };

  return (
    <button onClick={scrollToTop} id="topButton" title="Go to top">
      <span
        className="iconify"
        data-icon="fa-regular:hand-point-up"
        data-inline="false"
        color="white"
      ></span>
    </button>
  );
};

export default Top;
