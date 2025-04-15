"use client";

import { MotionH1, MotionP, MotionDiv } from "./motion";
import { useRef } from "react";

export default function ProfileHero() {
  // 스크롤 위치 감지를 위한 ref
  const sectionRef = useRef<HTMLElement>(null);

  // 시작 애니메이션은 그대로 유지
  const initialAnimation = {
    h1: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.3 },
    },
    p: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.6 },
    },
    buttons: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.9 },
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section
        ref={sectionRef}
        className="w-full py-32 flex flex-col items-center justify-center text-center px-4"
      >
        <MotionH1
          initial={initialAnimation.h1.initial}
          animate={initialAnimation.h1.animate}
          transition={initialAnimation.h1.transition}
        >
          <div className="text-7xl md:text-9xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-blue-500">
            Hello, I&apos;m <span className="text-white">Noveloper</span>
          </div>
        </MotionH1>

        <MotionP
          initial={initialAnimation.p.initial}
          animate={initialAnimation.p.animate}
          transition={initialAnimation.p.transition}
        >
          <div className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300 mb-12 font-light">
            기발함을 개발하는 프론트엔드 개발자 김혁진입니다.
          </div>
        </MotionP>

        <MotionDiv
          initial={initialAnimation.buttons.initial}
          animate={initialAnimation.buttons.animate}
          transition={initialAnimation.buttons.transition}
        >
          <div className="flex gap-4">
            <button className="px-10 py-4 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all hover:scale-105">
              프로젝트 보기
            </button>
            <button className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all hover:scale-105">
              연락하기
            </button>
          </div>
        </MotionDiv>

        {/* 애플 스타일 스크롤 다운 인디케이터 */}
        {/* <MotionDiv
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </MotionDiv> */}
      </section>
    </div>
  );
}
