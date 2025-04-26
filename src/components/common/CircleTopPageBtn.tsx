"use client";

import { useEffect, useState, useRef } from "react";

export default function CircleTopPageBtn() {
  const [showButton, setShowButton] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(32); // 8rem = 32px
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find footer element
    footerRef.current = document.querySelector("footer");

    const handleScroll = () => {
      // Show/hide button based on scroll position
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      // Adjust button position based on footer visibility
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;

        if (isFooterVisible) {
          // Calculate how much of the footer is visible
          const visibleFooterHeight = window.innerHeight - footerRect.top;
          // Add some extra padding (20px)
          setBottomPosition(visibleFooterHeight + 20);
        } else {
          setBottomPosition(32); // 8rem = 32px
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

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
      className={`fixed right-8 bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 hover:scale-10 rounded-full p-3 shadow-lg transition-all duration-300 z-[1000] ${
        showButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      style={{ bottom: `${bottomPosition}px` }}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          transform="rotate(180, 8, 8)"
        />
      </svg>
    </button>
  );
}
