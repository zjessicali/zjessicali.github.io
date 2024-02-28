import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when scrolling down, hide it when scrolling up
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // You can adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 p-3 right-4 md:bottom-4 md:right-4 md:p-3 bg-pinkie rounded-md transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" h-6 md:h-8"
        viewBox="0 0 34 35"
        fill="none"
      >
        <mask id="path-1-inside-1_753_45" fill="white">
          <path d="M0.57959 16.7363L17.1966 0.119319L33.8136 16.7363L17.1966 33.3533L0.57959 16.7363Z" />
        </mask>
        <path
          d="M17.1966 0.119319L19.1139 -1.79803L17.1966 -3.71538L15.2793 -1.79803L17.1966 0.119319ZM2.49694 18.6537L19.1139 2.03667L15.2793 -1.79803L-1.33776 14.819L2.49694 18.6537ZM15.2793 2.03667L31.8963 18.6537L35.731 14.819L19.1139 -1.79803L15.2793 2.03667Z"
          fill="#2C1733"
          mask="url(#path-1-inside-1_753_45)"
        />
        <line
          x1="17.3558"
          y1="3"
          x2="17.3558"
          y2="35"
          stroke="#2C1733"
          stroke-width="2.71154"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
