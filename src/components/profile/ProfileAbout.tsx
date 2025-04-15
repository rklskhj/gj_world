"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { MotionDiv } from "./motion";

export default function ProfileAbout() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  // 스크롤 이벤트 리스너 추가 및 window 객체 사용
  useEffect(() => {
    // 브라우저 환경에서만 실행
    setThreshold(window.innerHeight * 0.5); // 화면 절반 이상 스크롤 시

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 스크롤 위치 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤 기반 값 계산
  const inView = scrollY > threshold;
  const scale = inView ? 1 : 0.85;
  const opacity = inView ? 1 : 0;
  const xOffset = inView ? 0 : -30;

  return (
    <section ref={sectionRef} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mx-auto max-w-7xl px-4">
        <div className="relative h-[600px] rounded-3xl overflow-hidden md:order-2">
          <MotionDiv
            animate={{
              scale,
              opacity,
              transition: { duration: 1.2 },
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <div className="absolute inset-0 z-10"></div>
            <Image
              src="/images/my_image.jpg"
              alt="프로필 이미지"
              fill
              className="object-cover"
              priority={false}
            />
            {/* 애플 스타일 반짝이는 테두리 효과 */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl z-20"></div>
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0 animate-pulse"></div> */}
          </MotionDiv>
        </div>

        <div className="md:order-1">
          <MotionDiv
            animate={{
              x: xOffset,
              opacity,
              transition: { duration: 0.8 },
            }}
          >
            <h2 className="text-5xl font-bold mb-12 text-white">About Me</h2>
          </MotionDiv>

          <MotionDiv
            animate={{
              x: xOffset,
              opacity,
              transition: { duration: 0.8, delay: 0.2 },
            }}
          >
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              안녕하세요, 저는 웹 개발에 열정을 가진 프론트엔드 개발자입니다.
              사용자 친화적인 인터페이스와 매끄러운 사용자 경험을 만드는 것에
              집중하고 있습니다.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              React, Next.js, TypeScript를 주로 사용하며, 최신 웹 기술과
              트렌드를 꾸준히 학습하고 적용하고 있습니다.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              저는 팀과의 협업을 중요시하며, 함께 성장하는 환경에서 일하는 것을
              선호합니다.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
