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
  period: string;
  role: string;
  team: { role: string; members: number }[];
  func: { title: string; content: string }[];
  trouble: { title: string; content: string }[];
}

// 더미 프로젝트 데이터
export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "GJ World",
    description: "개인 포트폴리오 웹사이트",
    likes: 12,
    image: "/profile.png",
    period: "2024.01 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    trouble: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    website_url: "https://gjworld.vercel.app",
    github_url: "https://github.com/gjworld",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Figma"],
  },
  {
    id: 2,
    title: "React Todo App",
    description: "리액트로 만든 할 일 관리 애플리케이션",
    likes: 8,
    image: "/profile.png",
    period: "2024.01 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    trouble: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    website_url: "https://react-todo-app-gjworld.vercel.app",
    github_url: "https://github.com/gjworld/react-todo-app",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "GJ World",
    description: "개인 포트폴리오 웹사이트",
    likes: 12,
    image: "/profile.png",
    period: "2024.01 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    trouble: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    website_url: "https://gjworld.vercel.app",
    github_url: "https://github.com/gjworld",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Figma"],
  },
  {
    id: 4,
    title: "React Todo App",
    description: "리액트로 만든 할 일 관리 애플리케이션",
    likes: 8,
    image: "/profile.png",
    period: "2024.01 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    trouble: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    website_url: "https://react-todo-app-gjworld.vercel.app",
    github_url: "https://github.com/gjworld/react-todo-app",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "GJ World",
    description: "개인 포트폴리오 웹사이트",
    likes: 12,
    image: "/profile.png",
    period: "2024.01 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    trouble: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    website_url: "https://gjworld.vercel.app",
    github_url: "https://github.com/gjworld",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Figma"],
  },
  {
    id: 6,
    title: "React Todo App",
    description: "리액트로 만든 할 일 관리 애플리케이션",
    likes: 8,
    image: "/profile.png",
    period: "2024.01 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    trouble: [
      { title: "프로젝트 기획", content: "프로젝트 기획" },
      { title: "프론트엔드 개발", content: "프론트엔드 개발" },
      { title: "백엔드 개발", content: "백엔드 개발" },
      { title: "UI/UX 디자인", content: "UI/UX 디자인" },
    ],
    website_url: "https://react-todo-app-gjworld.vercel.app",
    github_url: "https://github.com/gjworld/react-todo-app",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  // 추가 프로젝트...
];
