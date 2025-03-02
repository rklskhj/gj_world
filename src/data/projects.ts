// 프로젝트 데이터를 위한 인터페이스 정의
export interface Project {
  id: number;
  title: string;
  description: string;
  likes: number;
  image: string;
  website_url: string;
  github_url: string;
  youtube_url: string;
  skills: string[];
}

// 더미 프로젝트 데이터
export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "GJ World",
    description: "개인 포트폴리오 웹사이트",
    likes: 12,
    image: "/images/project1.jpg",
    website_url: "https://gjworld.vercel.app",
    github_url: "https://github.com/gjworld",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
  },
  {
    id: 2,
    title: "React Todo App",
    description: "리액트로 만든 할 일 관리 애플리케이션",
    likes: 8,
    image: "/images/project2.jpg",
    website_url: "https://react-todo-app-gjworld.vercel.app",
    github_url: "https://github.com/gjworld/react-todo-app",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  // 추가 프로젝트...
];
