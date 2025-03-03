import { create } from "zustand";
import { Project } from "@/data/projects";

/**
 * Zustand 스토어 설계 가이드
 *
 * 1. 상태(State) 정의:
 *    - 스토어에 저장할 상태를 인터페이스로 정의합니다.
 *    - 상태와 함께 상태를 변경할 액션 함수들도 같이 정의합니다.
 *
 * 2. 액션 함수 설계:
 *    - 상태를 변경하는 함수는 스토어 내부에 정의합니다.
 *    - set 함수: 상태를 직접 업데이트합니다.
 *    - get 함수: 현재 상태를 읽어옵니다.
 *
 * 3. 불변성 유지:
 *    - 상태 업데이트 시 항상 불변성을 유지해야 합니다.
 *    - 객체나 배열을 업데이트할 때는 새 객체/배열을 생성합니다.
 */

interface ProjectState {
  // 현재 선택된 프로젝트
  currentProject: Project | null;
  // 최근에 본 프로젝트들 (캐싱 목적)
  recentProjects: Map<number, Project>;
  // 액션
  setCurrentProject: (project: Project | null) => void;
  addRecentProject: (project: Project) => void;
  getRecentProject: (id: number) => Project | undefined;
}

/**
 * Zustand 스토어 생성
 *
 * create 함수를 사용하여 스토어를 생성합니다.
 * 제네릭 타입으로 상태 인터페이스를 지정합니다.
 *
 * 콜백 함수는 두 개의 매개변수를 받습니다:
 * - set: 상태를 업데이트하는 함수
 * - get: 현재 상태를 가져오는 함수
 */
export const useProjectStore = create<ProjectState>((set, get) => ({
  // 초기 상태 설정
  currentProject: null,
  recentProjects: new Map(),

  // 액션 함수 정의
  // 현재 프로젝트 설정
  setCurrentProject: (project) => set({ currentProject: project }),

  // 최근 프로젝트 추가 (Map 사용)
  addRecentProject: (project) =>
    set((state) => {
      // 불변성을 유지하기 위해 새 Map 객체 생성
      const newRecentProjects = new Map(state.recentProjects);
      newRecentProjects.set(project.id, project);
      return { recentProjects: newRecentProjects };
    }),

  // 최근 프로젝트 조회 (get 함수 사용)
  getRecentProject: (id) => {
    return get().recentProjects.get(id);
  },
}));
