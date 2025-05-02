"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaAws, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiVercel,
  SiStyledcomponents,
  SiReactquery,
  SiRecoil,
  SiDjango,
  SiFirebase,
  SiPrisma,
  SiPostgresql,
  SiJest,
} from "react-icons/si";

// 타입 정의
interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isVisible: boolean;
}

export default function ProfileSkills() {
  const [scrollY, setScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    // 브라우저 환경에서만 실행
    setThreshold(window.innerHeight * 2.5); // 두 번째 섹션 이후

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 스크롤 위치 설정

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inView = scrollY > threshold;

  // 아이콘 정의
  const skillIcons = {
    React: <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    "Vue.js": <SiVuedotjs className="text-green-500" />,
    TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
    "Styled Components": <SiStyledcomponents className="text-pink-500" />,
    "React-Query": <SiReactquery className="text-red-500" />,
    Zustand: <FaDatabase className="text-yellow-500" />,
    Vuex: <FaDatabase className="text-green-400" />,
    Recoil: <SiRecoil className="text-blue-300" />,
    AWS: <FaAws className="text-orange-400" />,
    Vercel: <SiVercel className="text-white" />,
    Django: <SiDjango className="text-green-600" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    Prisma: <SiPrisma className="text-blue-600" />,
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
    Jest: <SiJest className="text-red-600" />,
  };

  return (
    <section className="w-full min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black z-0"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-5xl font-bold mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory
            title="Front-End"
            skills={[
              { name: "React", level: 85, icon: skillIcons["React"] },
              { name: "Vue.js", level: 85, icon: skillIcons["Vue.js"] },
              { name: "Next.js", level: 80, icon: skillIcons["Next.js"] },
              { name: "TypeScript", level: 75, icon: skillIcons["TypeScript"] },
              { name: "Jest", level: 75, icon: skillIcons["Jest"] },
            ]}
            isVisible={inView}
          />
          <SkillCategory
            title="State Management"
            skills={[
              {
                name: "React-Query",
                level: 80,
                icon: skillIcons["React-Query"],
              },
              { name: "Zustand", level: 80, icon: skillIcons["Zustand"] },
              { name: "Vuex", level: 85, icon: skillIcons["Vuex"] },
              { name: "Recoil", level: 78, icon: skillIcons["Recoil"] },
            ]}
            isVisible={inView}
          />
          <SkillCategory
            title="Back-End"
            skills={[
              { name: "Django", level: 70, icon: skillIcons["Django"] },
              { name: "Firebase", level: 80, icon: skillIcons["Firebase"] },
              { name: "Prisma", level: 70, icon: skillIcons["Prisma"] },
              { name: "PostgreSQL", level: 72, icon: skillIcons["PostgreSQL"] },
            ]}
            isVisible={inView}
          />
          <SkillCategory
            title="DevOps & Styling"
            skills={[
              { name: "AWS", level: 80, icon: skillIcons["AWS"] },
              { name: "Vercel", level: 85, icon: skillIcons["Vercel"] },
              {
                name: "TailwindCSS",
                level: 85,
                icon: skillIcons["TailwindCSS"],
              },
              {
                name: "Styled Components",
                level: 85,
                icon: skillIcons["Styled Components"],
              },
            ]}
            isVisible={inView}
          />
        </div>
      </div>
    </section>
  );
}

// 기술 카테고리 컴포넌트 - 애플 스타일의 카드와 애니메이션
function SkillCategory({ title, skills, isVisible }: SkillCategoryProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-xl min-h-[520px] flex flex-col">
      <motion.div
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 30,
        }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-full flex flex-col">
          <h3 className="text-2xl font-bold mb-8 min-h-[64px] flex items-center">
            {title}
          </h3>
          <div className="space-y-8 flex-1">
            {skills.map((skill: Skill) => (
              <div key={skill.name}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      {skill.icon && (
                        <div className="text-xl">{skill.icon}</div>
                      )}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: isVisible ? `${skill.level}%` : "0%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        background:
                          "linear-gradient(to right, #3b82f6, #a855f7)",
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
