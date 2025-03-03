"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopProps {
  threshold?: number; // 버튼이 나타나는 스크롤 위치 임계값 (기본값: 120)
}

export default function ScrollToTop({ threshold = 120 }: ScrollToTopProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      // window.scrollY를 사용하여 전체 페이지의 스크롤 위치 확인
      setShowButton(window.scrollY > threshold);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 초기 스크롤 위치 확인
    handleScroll();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  // 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <div className="fixed bottom-28 right-12 max-[425px]:right-4 max-[425px]:bottom-36 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={scrollToTop}
              className="bg-primary text-gray-900 p-3 rounded-full shadow-lg bg-white dark:bg-gray-900 dark:text-white hover:bg-primary-dark focus:outline-none  transition-transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
