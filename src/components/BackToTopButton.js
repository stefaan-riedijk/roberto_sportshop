import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

function BackToTopButton() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="z-[40]">
      {showScrollTopButton && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-20 h-16 w-16 rounded-full border-4 border-cyan-600 bg-cyan-300 text-3xl"
        >
          <FaAngleDoubleUp className="mx-auto text-4xl text-light-blue-900" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
