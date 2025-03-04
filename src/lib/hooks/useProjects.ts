"use client";

import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchProjects,
  fetchProjectById,
  fetchAllProjects,
  PaginatedResponse,
} from "@/lib/api/projects";
import { useProjectStore } from "@/store/projectStore";
import { useEffect } from "react";
import { Project } from "@/data/projects";

/**
 * React Query 커스텀 훅 가이드
 *
 * 1. useQuery 기본 구조:
 *    - queryKey: 쿼리를 식별하는 고유 키 (캐싱, 리페칭, 무효화에 사용)
 *    - queryFn: 데이터를 가져오는 비동기 함수
 *    - 옵션: staleTime, gcTime 등 쿼리별 설정
 *
 * 2. 반환 값:
 *    - data: 쿼리 함수에서 반환된 데이터
 *    - isLoading: 쿼리가 로딩 중인지 여부
 *    - isError: 쿼리가 에러 상태인지 여부
 *    - error: 발생한 에러 객체
 *    - 기타: refetch, isFetching 등 다양한 상태와 함수
 *
 * 3. 쿼리 키 설계:
 *    - 배열 형태로 지정 (첫 요소는 일반적으로 쿼리 타입, 이후 요소는 매개변수)
 *    - 키가 변경되면 쿼리가 자동으로 다시 실행됨
 */

// 무한 스크롤로 프로젝트 가져오기
export function useProjects(limit = 9) {
  return useInfiniteQuery<PaginatedResponse<Project>, Error>({
    // 쿼리 키: 'projects'와 limit으로 식별되는 쿼리
    queryKey: ["projects", limit],
    // 쿼리 함수: 페이지 정보를 받아 해당 페이지의 프로젝트 목록을 가져오는 API 호출
    queryFn: ({ pageParam }) => fetchProjects(pageParam as number, limit),
    // 다음 페이지 파라미터 결정 함수
    getNextPageParam: (lastPage) => lastPage.nextPage,
    // 초기 페이지 파라미터
    initialPageParam: 1,
  });
}

// 모든 프로젝트 가져오기 (이전 버전 호환성 유지)
export function useAllProjects() {
  return useQuery({
    queryKey: ["allProjects"],
    queryFn: fetchAllProjects,
  });
}

/**
 * Zustand와 React Query 통합 패턴
 *
 * 1. 로컬 상태와 서버 상태 통합:
 *    - Zustand: 클라이언트 상태 관리 (UI 상태, 사용자 설정 등)
 *    - React Query: 서버 상태 관리 (API 데이터, 캐싱, 동기화)
 *
 * 2. 데이터 흐름:
 *    - API에서 데이터 가져오기 -> React Query 캐시 저장 -> Zustand 스토어 업데이트
 *    - Zustand 스토어의 데이터를 React Query의 initialData로 활용
 *
 * 3. 장점:
 *    - 캐싱과 상태 관리의 장점을 모두 활용
 *    - 오프라인 지원 및 낙관적 업데이트 구현 용이
 *    - 컴포넌트 간 상태 공유 간소화
 */

// 단일 프로젝트 가져오기 (Zustand 스토어와 통합)
export function useProject(id: number) {
  // Zustand 스토어에서 필요한 상태와 액션 가져오기
  const { getRecentProject, addRecentProject, setCurrentProject } =
    useProjectStore();

  // Zustand 스토어에서 최근 프로젝트 확인
  const recentProject = getRecentProject(id);

  // React Query로 프로젝트 데이터 가져오기
  const query = useQuery({
    // 쿼리 키: 'project'와 id로 구성된 배열 (id가 변경되면 쿼리 재실행)
    queryKey: ["project", id],
    // 쿼리 함수: id를 기반으로 특정 프로젝트 데이터 가져오기
    queryFn: () => fetchProjectById(id),
    // Zustand 스토어에 있는 데이터를 초기 데이터로 사용 (캐시 히트)
    initialData: recentProject,
  });

  // 데이터가 성공적으로 로드되면 Zustand 스토어에 저장
  useEffect(() => {
    if (query.data) {
      // 최근 본 프로젝트에 추가
      addRecentProject(query.data);
      // 현재 프로젝트로 설정
      setCurrentProject(query.data);
    }
  }, [query.data, addRecentProject, setCurrentProject]);

  return query;
}
