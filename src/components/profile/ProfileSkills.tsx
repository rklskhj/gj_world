"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
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

  // ProfileAbout과 동일한 스크롤 감지 방식 추가
  const inView = scrollY > threshold;

  // 아이콘 정의
  const skillIcons = {
    React: <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    Express: <SiExpress className="text-gray-200" />,
    MongoDB: <SiMongodb className="text-green-400" />,
    Firebase: <SiFirebase className="text-amber-500" />,
    Git: <FaGitAlt className="text-red-500" />,
  };

  return (
    <section className="w-full relative">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SkillCategory
            title="Frontend"
            skills={[
              { name: "React", level: 90, icon: skillIcons["React"] },
              { name: "Next.js", level: 85, icon: skillIcons["Next.js"] },
              { name: "TypeScript", level: 80, icon: skillIcons["TypeScript"] },
              {
                name: "TailwindCSS",
                level: 95,
                icon: skillIcons["TailwindCSS"],
              },
            ]}
            isVisible={inView}
          />
          <SkillCategory
            title="Backend"
            skills={[
              { name: "Node.js", level: 75, icon: skillIcons["Node.js"] },
              { name: "Express", level: 70, icon: skillIcons["Express"] },
              { name: "MongoDB", level: 65, icon: skillIcons["MongoDB"] },
              { name: "Firebase", level: 80, icon: skillIcons["Firebase"] },
            ]}
            isVisible={inView}
          />
          <SkillCategory
            title="Others"
            skills={[
              { name: "Git", level: 85, icon: skillIcons["Git"] },
              { name: "UI/UX Design", level: 70 },
              { name: "Responsive Design", level: 90 },
              { name: "Performance Optimization", level: 75 },
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
    <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-xl">
      <motion.div
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 30,
        }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-8">{title}</h3>
        <div className="space-y-8">
          {skills.map((skill: Skill) => (
            <div key={skill.name}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    {skill.icon && <div className="text-xl">{skill.icon}</div>}
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
                      background: "linear-gradient(to right, #3b82f6, #a855f7)",
                      borderRadius: "9999px",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
