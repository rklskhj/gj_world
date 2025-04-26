"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ExperienceCardProps {
  period: string;
  company: string;
  position: string;
  description: string;
  isVisible: boolean;
}

export default function ProfileExperience() {
  const [scrollY, setScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    // 브라우저 환경에서만 실행
    setThreshold(window.innerHeight * 1.5); // 세 번째 섹션 이후

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 스크롤 위치 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ProfileAbout과 동일한 스크롤 감지 방식 추가
  const inView = scrollY > threshold;

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl font-bold mb-12 text-center">Experience</div>
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          <ExperienceCard
            period="2021 - Present"
            company="Tech Company"
            position="Senior Frontend Developer"
            description="사용자 중심의 웹 애플리케이션 개발. React와 Next.js를 활용한 프론트엔드 아키텍처 설계 및 구현. 팀 리딩 및 주니어 개발자 멘토링."
            isVisible={inView}
          />
          <ExperienceCard
            period="2019 - 2021"
            company="Creative Agency"
            position="Frontend Developer"
            description="다양한 클라이언트를 위한 반응형 웹사이트 개발. 퍼포먼스 최적화 및 접근성 개선. UI/UX 디자이너와 협업하여 매력적인 인터페이스 구현."
            isVisible={inView}
          />
          <ExperienceCard
            period="2017 - 2019"
            company="Startup"
            position="Web Developer"
            description="스타트업 초기 멤버로 참여하여 제품의 프론트엔드 개발. 사용자 피드백을 기반으로 한 지속적인 개선. 다양한 브라우저 호환성 확보."
            isVisible={inView}
          />
        </div>
      </div>
    </section>
  );
}

// 경력 카드 컴포넌트 - 애플 스타일의 타임라인
function ExperienceCard({
  period,
  company,
  position,
  description,
  isVisible,
}: ExperienceCardProps) {
  return (
    <motion.div
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      transition={{ duration: 0.8 }}
      // @ts-expect-error - ignoring className type issue with motion components
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-5 md:gap-16 items-center">
        <div className="md:col-span-1 flex flex-col">
          <span className="text-blue-400 font-medium text-xl mb-2">
            {period}
          </span>
          <span className="font-bold text-3xl text-white">{company}</span>
        </div>
        <div className="md:col-span-4 mt-6 md:mt-0">
          <h3 className="text-2xl font-bold mb-4 text-white">{position}</h3>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            {description}
          </p>
          <div className="mt-8 inline-flex">
            <span className="px-6 py-2 rounded-full bg-white/10 text-blue-400 font-medium hover:bg-white/15 transition-all cursor-pointer">
              상세 보기
            </span>
          </div>
        </div>
      </div>

      {/* 타임라인 선 */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:hidden"></div>
      <div className="absolute left-0 top-4 w-3 h-3 rounded-full bg-blue-500 md:hidden"></div>
    </motion.div>
  );
}
