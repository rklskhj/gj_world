// 프로젝트 데이터를 위한 인터페이스 정의
export interface Project {
  id: number;
  title: string;
  description: string;
  likes: number;
  image: string;
  website_url: string | null;
  github_url: string | null;
  youtube_url: string | null;
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
    title: "GJ, World",
    description: "개인 포트폴리오 웹사이트 (개발중)",
    likes: 12,
    image: "/gj_world.png",
    period: "2025.02 - 2025.03",
    role: "FE dev",
    team: [{ role: "FE", members: 1 }],
    func: [
      { title: "3D 그래픽 라이브러리를 사용한 랜딩페이지 구현", content: "" },
      {
        title: "Suspense와 Loader를 사용",
        content: "페이지 렌더링을 최적화하고 UX 성능 개선",
      },
    ],
    trouble: [
      {
        title: "Hydration Warning 해결",
        content:
          "suppressHydrationWarring으로 경고를 숨기는 대신, 클라이언트 컴포넌트를 적절히 분리하고 마운트 상태를 추적하는 방식으로 근본적인 문제를 해결",
      },
    ],
    website_url: "https://gj-world.vercel.app/",
    github_url: "https://github.com/rklskhj/gj_world",
    youtube_url: null,
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Three.js",
      "R3f",
      "React-Query",
      "Zustand",
    ],
  },
  {
    id: 2,
    title: "런치팩(Launchpack): 플랫폼 템플릿",
    description:
      "내 서비스에 맞는 템플릿으로 직접 제작하거나, 개발 파트너와 제작 및 교류 서비스스",
    likes: 8,
    image: "/lp_pt.png",
    period: "2024.09 - 2024.12",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      {
        title: "플랫폼 템플릿 시스템 구축 및 개선",
        content:
          "• 동적 필터링 시스템 구현으로 검색 속도 40% 향상 \n• 템플릿 페이지 반응형 랜딩페이지 개발로 고객의  접근성 향상 \n• 템플릿으로 제작문의 폼 신규 제작으로 고객의 템플릿 제작 문의 시간 60% 단축",
      },
      {
        title: "파트너와 유저간의 실시간 채팅 시스템 구현 (Socket.io)",
        content:
          "• 파트너의 상품 제작 문의 생성 API 요청시 파트너, 유저간의 기본 메세지 제작 \n• 채팅 이력 관리 시스템 구축 (관리자 페이지 내에 해당 제작 문의 상세)",
      },
    ],
    trouble: [
      {
        title: "Socket.IO 채팅 메시지 중복 및 잘못된 수신자 문제",
        content:
          "• 문제: \n채팅 메시지가 다른 유저에게 표시되고, 동일 메시지가 중복 추가되는 현상 발생\n• 원인: \nSocket.IO 메시지가 모든 클라이언트에 브로드캐스트되고, 채팅방 ID 검증 및 중복 체크 로직 부재\n• 해결: \n1) 현재 채팅방 ID와 메시지의 inquiry_id 비교로 필터링 \n2) 채팅방별 메시지 상태 관리 \n3) 메시지 ID 기반 중복 체크 로직 구현\n• 결과: \n채팅방별 독립적 메시지 관리와 정확한 전달로 사용자 경험 개선",
      },
    ],
    website_url: "https://launchpack.co.kr/template_home",
    github_url: null,
    youtube_url: null,
    skills: ["Vue.js", "Stylus", "Django", "AWS", "Figma"],
  },
  {
    id: 3,
    title: "주차종결자: MVP 프로젝트",
    description: "더 이상 주차에 스트레스 받지 말자!",
    likes: 12,
    image: "/ph.png",
    period: "2024.04 - 2024.06",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      {
        title: "유저간의 입출차 등록 및 수정 개발",
        content:
          "• vue-timepicker를 커스텀하여 오전/오후 시간 설정 및 등록, 수정",
      },
      {
        title: "유저 및 관리자의 입출차 관련 알림톡 작업",
        content: "• 외부 알림톡 연동 후 sms 및 카카오메세지 발송",
      },
      {
        title: "전체 퍼블리싱 작업 및 백엔드 모델 설정 및 API 생성",
        content: "",
      },
    ],
    trouble: [
      {
        title:
          "vue-scroll-picker 라이브러리가 기본적으로 24시간 형식(0-23시)만을 지원하는 문제",
        content:
          "• 문제: \n한국 사용자를 위한 12시간 형식(오전/오후) 시간 선택 UI 필요\n• 해결: \n라이브러리 커스터마이징으로 오전/오후 토글 기능 및 5분 단위 선택 구현\n• 결과: \n사용자 친화적인 시간 선택 UI 구현 및 Vue.js의 반응형 시스템을 활용한 효율적 상태 관리",
      },
    ],
    website_url: "https://parkinghero.co.kr/",
    github_url: null,
    youtube_url: null,
    skills: ["Vue.js", "Stylus", "pinia", "Django", "AWS", "Figma"],
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
