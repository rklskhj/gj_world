import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  limit,
  startAfter,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Project } from "@/data/projects";

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
  pageSize = 9,
  ids?: Array<string | number>
): Promise<PaginatedResponse<Project>> {
  try {
    // 특정 ID 배열이 제공된 경우
    if (ids && ids.length > 0) {
      const projects: Project[] = [];

      // 각 ID에 대해 개별적으로 문서 가져오기
      for (const id of ids) {
        try {
          const project = await fetchProjectById(id);
          if (project) {
            projects.push(project);
          }
        } catch (error) {
          console.error(`Error fetching project with ID ${id}:`, error);
        }
      }

      return {
        data: projects,
        nextPage: null, // ID 배열로 검색 시 페이지네이션 없음
        totalPages: 1,
        hasMore: false,
      };
    }

    // 일반 페이지네이션 로직
    const projectsRef = collection(db, "projects");
    let projectsQuery;

    if (page === 1) {
      // 첫 페이지 쿼리
      projectsQuery = query(projectsRef, orderBy("id", "asc"), limit(pageSize));
    } else {
      // 이전 페이지의 마지막 문서 가져오기
      const lastVisibleDoc = await getLastVisibleDoc(page - 1, pageSize);

      if (!lastVisibleDoc) {
        return {
          data: [],
          nextPage: null,
          totalPages: page - 1,
          hasMore: false,
        };
      }

      // 다음 페이지 쿼리
      projectsQuery = query(
        projectsRef,
        orderBy("id", "asc"),
        startAfter(lastVisibleDoc),
        limit(pageSize)
      );
    }

    const snapshot = await getDocs(projectsQuery);
    const projects = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: Number(doc.id) || parseInt(doc.id) || doc.id,
      } as unknown as Project;
    });

    // 다음 페이지가 있는지 확인
    const hasMore = projects.length === pageSize;

    return {
      data: projects,
      nextPage: hasMore ? page + 1 : null,
      totalPages: page, // 임시 값, 실제로는 전체 문서 수를 계산해야 함
      hasMore,
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

// 마지막으로 표시된 문서 가져오기 (페이지네이션용)
async function getLastVisibleDoc(page: number, pageSize: number) {
  if (page < 1) return null;

  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, orderBy("id", "asc"), limit(page * pageSize));

  const snapshot = await getDocs(q);
  const docs = snapshot.docs;

  return docs.length > 0 ? docs[docs.length - 1] : null;
}

// 단일 프로젝트 가져오기
export async function fetchProjectById(
  id: string | number
): Promise<Project | undefined> {
  try {
    const projectId = id.toString();
    const projectRef = doc(db, "projects", projectId);
    const projectDoc = await getDoc(projectRef);

    if (projectDoc.exists()) {
      const data = projectDoc.data();
      return {
        ...data,
        id: Number(projectDoc.id) || parseInt(projectDoc.id) || projectDoc.id,
      } as unknown as Project;
    }

    return undefined;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    throw error;
  }
}

// 모든 프로젝트 가져오기
export async function fetchAllProjects(): Promise<Project[]> {
  try {
    const projectsRef = collection(db, "projects");
    const snapshot = await getDocs(projectsRef);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        ...data,
        id: Number(doc.id) || parseInt(doc.id) || doc.id,
      } as unknown as Project;
    });
  } catch (error) {
    console.error("Error fetching all projects:", error);
    throw error;
  }
}

// 프로젝트 추가하기
export async function addProject(
  project: Omit<Project, "id">
): Promise<string> {
  try {
    const projectsRef = collection(db, "projects");
    const docRef = await addDoc(projectsRef, project);
    return docRef.id;
  } catch (error) {
    console.error("Error adding project:", error);
    throw error;
  }
}

// 프로젝트 업데이트하기
export async function updateProject(
  id: string | number,
  project: Partial<Project>
): Promise<void> {
  try {
    const projectId = id.toString();
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, project);
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
}

// 프로젝트 삭제하기
export async function deleteProject(id: string | number): Promise<void> {
  try {
    const projectId = id.toString();
    const projectRef = doc(db, "projects", projectId);
    await deleteDoc(projectRef);
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
}
