"use client";

import { useProject } from "@/lib/hooks/useProjects";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SkillTag from "./SkillTagLabel";
import { useEffect, useState } from "react";
import { useProjects } from "@/lib/hooks/useProjects";
import {
  FaUsers,
  FaUserTie,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaExclamationCircle,
} from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * ProjectDetail 컴포넌트
 *
 * React Query와 Zustand 활용 예시:
 *
 * 1. React Query 사용:
 *    - useProject 훅을 통해 특정 ID의 프로젝트 데이터 가져오기
 *    - isLoading, isError 상태를 활용한 UI 처리
 *    - 자동 캐싱으로 이미 방문한 프로젝트는 빠르게 로드
 *
 * 2. Zustand 활용:
 *    - 프로젝트 목록 페이지에서 저장한 데이터 활용
 *    - useProject 훅 내부에서 Zustand 스토어와 통합
 *
 * 3. 데이터 흐름:
 *    - ID 기반으로 데이터 요청 -> Zustand 스토어 확인 -> 없으면 API 호출
 *    - 데이터 로드 후 UI 렌더링 및 Zustand 스토어 업데이트
 */

interface ProjectDetailProps {
  id: number;
}

export default function ProjectDetail({ id }: ProjectDetailProps) {
  const router = useRouter();
  const { data: project, isLoading, isError } = useProject(id);
  const { data: allProjects = [] } = useProjects();

  // 페이드인 효과를 위한 상태
  const [isVisible, setIsVisible] = useState(false);

  // 아코디언 상태
  const [isFuncExpanded, setIsFuncExpanded] = useState(false);
  const [isTroubleExpanded, setIsTroubleExpanded] = useState(false);

  // 이전/다음 프로젝트 ID 계산
  const [prevProjectId, setPrevProjectId] = useState<number | null>(null);
  const [nextProjectId, setNextProjectId] = useState<number | null>(null);

  // 프로젝트 데이터가 로드되면 페이드인 효과 시작
  useEffect(() => {
    if (project && !isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [project, isLoading]);

  // 이전/다음 프로젝트 ID 계산
  useEffect(() => {
    if (allProjects.length > 0) {
      // 현재 프로젝트의 인덱스 찾기
      const currentIndex = allProjects.findIndex((p) => p.id === id);

      if (currentIndex > 0) {
        // 이전 프로젝트가 있으면 ID 설정
        setPrevProjectId(allProjects[currentIndex - 1].id);
      } else {
        setPrevProjectId(allProjects[allProjects.length - 1].id);
      }

      if (currentIndex < allProjects.length - 1) {
        // 다음 프로젝트가 있으면 ID 설정
        setNextProjectId(allProjects[currentIndex + 1].id);
      } else {
        setNextProjectId(allProjects[0].id);
      }
    }
  }, [allProjects, id]);

  // 이전 프로젝트로 이동
  const goToPrevProject = () => {
    if (prevProjectId !== null) {
      setIsVisible(false); // 페이드아웃 효과

      // 페이드아웃 후 이동
      setTimeout(() => {
        router.push(`/projects/${prevProjectId}`);
      }, 300);
    }
  };

  // 다음 프로젝트로 이동
  const goToNextProject = () => {
    if (nextProjectId !== null) {
      setIsVisible(false); // 페이드아웃 효과

      // 페이드아웃 후 이동
      setTimeout(() => {
        router.push(`/projects/${nextProjectId}`);
      }, 300);
    }
  };

  // 프로젝트가 없는 경우 리다이렉트 처리
  useEffect(() => {
    if (isError) {
      router.push("/projects");
    }
  }, [isError, router]);

  // 스와이프 핸들러 설정
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (nextProjectId !== null) {
        goToNextProject();
      }
    },
    onSwipedRight: () => {
      if (prevProjectId !== null) {
        goToPrevProject();
      }
    },
  });

  // 로딩 중일 때 스켈레톤 UI 표시
  if (isLoading) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-8"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // 프로젝트가 없는 경우 에러 UI 표시
  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">프로젝트를 찾을 수 없습니다</h1>
        <button
          onClick={() => router.push("/projects")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          프로젝트 목록으로 돌아가기
        </button>
      </div>
    );
  }

  // 프로젝트 데이터가 있는 경우 상세 정보 표시
  return (
    <div
      className={`container mx-auto relative h-full transition-opacity duration-500 py-14 px-4 max-[425px]:pt-8 max-[425px]:pb-16 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 이전 프로젝트 버튼 */}
      <button
        className={`nav-button prev-button fade-transition max-[425px]:hidden`}
        onClick={goToPrevProject}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* 다음 프로젝트 버튼 */}
      <button
        className={`nav-button next-button fade-transition max-[425px]:hidden`}
        onClick={goToNextProject}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        {...swipeHandlers}
        className={`project-card fade-transition ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col">
          {/* 뒤로 가기 버튼 */}
          <button
            onClick={() => router.push("/projects")}
            className="inline-flex items-center w-10 h-10 text-gray-800 dark:text-gray-200 rounded-full transition"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* 프로젝트 제목 */}
          <span className="text-4xl font-bold mb-2 text-black dark:text-white">
            {project.title}
          </span>
        </div>

        {/* 프로젝트 설명 */}
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          {project.description}
        </p>

        {/* 프로젝트 이미지 */}
        <div className="relative w-full h-[400px] mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* 팀원, 역활, 기간*/}
        <div className="flex flex-wrap items-center gap-2 lg:gap-4 mb-4 font-semibold text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaUsers className="text-primary" />
            <span>
              {project.team.map((t) => {
                return t.role + " " + t.members + ", ";
              })}
            </span>
          </div>
          <div className="w-[1px] h-4 bg-gray-400 dark:bg-gray-500"></div>
          <div className="flex items-center gap-2">
            <FaUserTie className="text-primary" />
            <span>{project.role}</span>
          </div>
          <div className="w-[1px] h-4 bg-gray-400 dark:bg-gray-500"></div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-primary" />
            <span>{project.period}</span>
          </div>
        </div>

        {/* 프로젝트 기술 스택 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <SkillTag key={skill} skill={skill} />
          ))}
        </div>

        {/* 개발한 기술 */}
        <div>
          <div
            className="flex justify-between items-center gap-2 mb-4 cursor-pointer"
            onClick={() => setIsFuncExpanded(!isFuncExpanded)}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Responsibilities
            </h3>
            <span className="text-primary text-sm flex items-center gap-1">
              {isFuncExpanded ? (
                <>
                  <FaChevronUp className="text-primary transition-transform" />
                </>
              ) : (
                <>
                  <FaChevronDown className="text-primary transition-transform" />
                </>
              )}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {isFuncExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.5, ease: "easeInOut" },
                    opacity: { duration: 0.3, ease: "easeIn" },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.2, ease: "easeOut" },
                  },
                }}
                style={{ overflow: "hidden" }}
              >
                <div className="flex flex-col gap-2 mb-8">
                  {project.func.map((f) => (
                    <div key={f.title} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 break-keep">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {f.title}
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line break-keep">
                        {f.content}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 문제 해결 */}
        <div className="mt-4">
          <div
            className="flex justify-between items-center gap-2 mb-4 cursor-pointer"
            onClick={() => setIsTroubleExpanded(!isTroubleExpanded)}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Trouble Shooting
            </h3>
            <span className="text-primary text-sm flex items-center gap-1">
              {isTroubleExpanded ? (
                <>
                  <FaChevronUp className="text-primary transition-transform" />
                </>
              ) : (
                <>
                  <FaChevronDown className="text-primary transition-transform" />
                </>
              )}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {isTroubleExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.5, ease: "easeInOut" },
                    opacity: { duration: 0.3, ease: "easeIn" },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.2, ease: "easeOut" },
                  },
                }}
                style={{ overflow: "hidden" }}
              >
                <div className="flex flex-col gap-2 mb-8">
                  {project.trouble.map((t) => (
                    <div key={t.title} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 break-keep">
                        <FaExclamationCircle className="text-red-500 flex-shrink-0" />
                        <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {t.title}
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line break-keep">
                        {t.content}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 프로젝트 링크 버튼 */}
        <div className="flex justify-end gap-4">
          {project.website_url && (
            <a
              href={project.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8 14V15C8 16.1 8.9 17 10 17V19.93C6.61 19.43 4 16.07 4 12ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.782 9.512 20.082 9.508 19.212C6.726 19.859 6.139 17.777 6.139 17.777C5.685 16.598 5.029 16.296 5.029 16.296C4.121 15.65 5.098 15.663 5.098 15.663C6.101 15.734 6.629 16.713 6.629 16.713C7.521 18.262 8.97 17.824 9.539 17.573C9.631 16.928 9.889 16.491 10.175 16.242C7.954 15.992 5.62 15.152 5.62 11.388C5.62 10.281 6.01 9.379 6.649 8.677C6.546 8.428 6.203 7.442 6.747 6.085C6.747 6.085 7.587 5.821 9.497 7.094C10.295 6.877 11.15 6.768 12 6.764C12.85 6.768 13.705 6.877 14.503 7.094C16.413 5.821 17.253 6.085 17.253 6.085C17.797 7.442 17.454 8.428 17.351 8.677C17.99 9.379 18.38 10.281 18.38 11.388C18.38 15.162 16.046 15.99 13.825 16.24C14.171 16.541 14.49 17.141 14.49 18.052C14.49 19.366 14.476 20.689 14.476 21.017C14.476 21.278 14.658 21.581 15.158 21.489C19.132 20.166 22 16.418 22 12C22 6.477 17.523 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}

          {project.youtube_url && (
            <a
              href={project.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* ScrollToTop 컴포넌트 추가 */}
      <ScrollToTop threshold={120} />
    </div>
  );
}
