import { Project } from "@/data/projects";

/**
 * API 함수 설계 가이드
 *
 * 1. API 함수 구조:
 *    - 비동기 함수로 구현 (async/await 사용)
 *    - 명확한 반환 타입 지정 (TypeScript 활용)
 *    - 에러 처리 로직 포함 (try/catch 또는 Promise 체이닝)
 *
 * 2. React Query와 함께 사용:
 *    - API 함수는 순수 함수로 구현 (상태 변경 없음)
 *    - 데이터 변환 로직은 API 함수 내부에서 처리
 *    - 재사용성을 고려한 매개변수 설계
 *
 * 3. 모킹과 실제 구현:
 *    - 개발 초기에는 목업 데이터 사용
 *    - 실제 API 연동 시 함수 내부만 수정 (인터페이스 유지)
 */

// 페이지네이션을 위한 응답 타입 정의
export interface PaginatedResponse<T> {
  data: T[];
  nextPage: number | null;
  totalPages: number;
  hasMore: boolean;
}

// 프로젝트 목록 페이지네이션 가져오기
export async function fetchProjects(
  page = 1,
  limit = 9,
  ids?: Array<string | number>
): Promise<PaginatedResponse<Project>> {
  // URL 매개변수 구성
  let url = `/api/projects?page=${page}&limit=${limit}`;

  // ids 배열이 있으면 URL에 추가
  if (ids && ids.length > 0) {
    url += `&ids=${ids.join(",")}`;
  }

  // 실제 API 호출
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

// 모든 프로젝트 가져오기 (이전 버전 호환성 유지)
export async function fetchAllProjects(): Promise<Project[]> {
  const response = await fetch("/api/projects?limit=100");

  if (!response.ok) {
    throw new Error("Failed to fetch all projects");
  }

  const result = await response.json();
  return result.data;
}

// 단일 프로젝트 가져오기
export async function fetchProjectById(
  id: number
): Promise<Project | undefined> {
  const response = await fetch(`/api/projects/${id}`);

  if (response.status === 404) {
    return undefined;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch project with ID: ${id}`);
  }

  return response.json();
}
