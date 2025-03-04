"use client";

import { useProjects } from "@/lib/hooks/useProjects";
import { useProjectStore } from "@/store/projectStore";
import ProjectCard from "@/components/ProjectCard";
import { OpenLink } from "@/components/OpenLink";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useRef, useCallback } from "react";
import BeatLoader from "react-spinners/BeatLoader";

/**
 * ProjectsList 컴포넌트
 *
 * React Query와 Zustand 활용 예시:
 *
 * 1. React Query 사용:
 *    - useProjects 훅을 통해 프로젝트 목록 데이터 가져오기
 *    - isLoading 상태를 활용한 로딩 UI 처리
 *    - 자동 캐싱 및 리페칭 활용
 *
 * 2. Zustand 활용:
 *    - 프로젝트 클릭 시 Zustand 스토어에 데이터 저장
 *    - 컴포넌트 간 상태 공유 (ProjectDetail에서 활용)
 *
 * 3. 데이터 흐름:
 *    - React Query로 데이터 가져오기 -> UI 렌더링
 *    - 사용자 상호작용 -> Zustand 스토어 업데이트
 */
export default function ProjectsList() {
  // React Query 훅을 사용하여 프로젝트 목록 데이터 가져오기
  // data: 프로젝트 배열, isLoading: 로딩 상태
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProjects();

  // Zustand 스토어에서 액션 함수 가져오기
  const { addRecentProject } = useProjectStore();

  // 프로젝트 카드 클릭 시 Zustand 스토어에 저장하는 핸들러
  const handleProjectClick = (projectId: number) => {
    // 클릭한 프로젝트 찾기
    const allProjects = data?.pages.flatMap((page) => page.data) || [];
    const project = allProjects.find((p) => p.id === projectId);
    if (project) {
      // Zustand 스토어에 프로젝트 추가 (상세 페이지에서 활용)
      addRecentProject(project);
    }
  };

  // 무한 스크롤을 위한 관찰 대상 요소 참조
  const observerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer 콜백 함수
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        // PC에서 너무 빠르게 모든 데이터를 로드하는 것을 방지하기 위한 지연
        setTimeout(() => {
          fetchNextPage();
        }, 300);
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      // rootMargin 값을 줄여서 관찰 대상이 더 많이 화면에 들어와야 로드되도록 설정
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.1,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [handleObserver]);

  // 모든 프로젝트 데이터 병합
  const allProjects = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="container mx-auto w-full pt-14 pb-14 mb-20">
      {/* 로딩 상태에 따른 조건부 렌더링 */}
      {isLoading ? (
        // 로딩 중일 때 스켈레톤 UI 표시
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="w-full max-w-sm animate-pulse">
              <div className="h-64  rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        // 데이터 로드 완료 시 프로젝트 목록 표시
        <>
          <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {allProjects.map((project) => (
              <OpenLink
                key={project.id}
                url={`/projects/${project.id}`}
                onClick={() => handleProjectClick(project.id)}
              >
                <ProjectCard project={project} />
              </OpenLink>
            ))}
          </div>

          {/* 무한 스크롤 로딩 표시기 - GridLoader 사용 */}
          <div ref={observerRef} className="mt-8 flex justify-center py-4">
            {isFetchingNextPage && (
              <BeatLoader color="#ffffff" size={15} margin={2} />
            )}
          </div>

          {/* 더 이상 데이터가 없을 때 메시지 표시 */}
          {/* {!hasNextPage && allProjects.length > 0 && (
            <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
              모든 프로젝트를 불러왔습니다
            </div>
          )} */}
        </>
      )}
      {/* ScrollToTop 컴포넌트 추가 */}
      <ScrollToTop threshold={120} />
    </div>
  );
}
