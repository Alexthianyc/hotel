import React, { useEffect } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import "@styles/up.css";

const ScrollToTopButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const up = document.querySelector(".up");
      if (document.documentElement.scrollTop > 200) {
        up.classList.add("show");
      } else {
        up.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="up" // Cambia 'class' por 'className'
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <RiArrowDropUpLine />
    </div>
  );
};

export default ScrollToTopButton;