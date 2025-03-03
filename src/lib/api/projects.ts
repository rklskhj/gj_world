import { Project, MOCK_PROJECTS } from "@/data/projects";

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

// 모든 프로젝트 가져오기
export async function fetchProjects(): Promise<Project[]> {
  // 실제 API 호출로 대체 가능
  // const response = await fetch('/api/projects');
  // return response.json();

  // 현재는 목업 데이터 사용 (API 호출 시뮬레이션)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PROJECTS);
    }, 500); // 실제 API 호출을 시뮬레이션하기 위한 지연
  });
}

// 단일 프로젝트 가져오기
export async function fetchProjectById(
  id: number
): Promise<Project | undefined> {
  // 실제 API 호출로 대체 가능
  // const response = await fetch(`/api/projects/${id}`);
  // return response.json();

  // 현재는 목업 데이터에서 필터링 (API 호출 시뮬레이션)
  return new Promise((resolve) => {
    setTimeout(() => {
      // id로 프로젝트 찾기
      const project = MOCK_PROJECTS.find((p) => p.id === id);
      resolve(project);
    }, 500);
  });
}
