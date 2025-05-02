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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mx-auto max-w-7xl px-4">
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
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light break-keep">
              안녕하세요,
              <span className="font-bold">
                기발함을 개발하는 개발자 Noveloper 김혁진입니다.
              </span>
              저는 <span className="font-bold">2년 차 프론트엔드 개발자로</span>
              , 약{" "}
              <span className="font-bold">
                2년간 5개 이상의 프로젝트에 참여
              </span>
              하며{" "}
              <span className="font-bold">
                안정적인 서비스 운영과 지속적인 개선에 기여
              </span>
              해왔습니다.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light break-keep">
              개발은 JavaScript와 React로 시작 했으며, 실무에서는 Vue.js를
              활용하여 <span className="font-bold">다양한 서비스를 구축</span>
              했습니다. 현재는{" "}
              <span className="font-bold">Next.js와 TypeScript를 중심</span>으로
              개인 프로젝트를 진행하며{" "}
              <span className="font-bold">기술 스택을 확장</span> 하고 있습니다.
              또한, Cursor와 같은{" "}
              <span className="font-bold">
                AI 도구와 협업하며 효율적인 개발 환경
              </span>
              을 만들어가는 것을 선호 합니다.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed font-light break-keep">
              개발은 혼자가 아닌 함께하는 과정이라고 믿습니다. 팀원들과의 원활한
              소통을 위해{" "}
              <span className="font-bold">Notion과 Jira를 활용해</span>
              스프린트를 <span className="font-bold">
                체계적으로 관리
              </span>하고,{" "}
              <span className="font-bold">
                업무 우선순위를 명확히 정리해 팀의 일정 관리와 작업 효율을
                개선한 경험
              </span>
              이 있습니다.
            </p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
