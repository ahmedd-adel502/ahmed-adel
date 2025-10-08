'use client';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={
        `fixed bottom-16 right-8 z-100 p-3 cursor-pointer rounded-full bg-violet-600 dark:bg-blue-400 text-white shadow-lg transition-opacity duration-300",
        ${
          isVisible
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6" />
    </button>
  );
}
