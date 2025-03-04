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
    image: "/images/gj_world.png",
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
    image: "/images/lp_pt.png",
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
    image: "/images/ph.png",
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
    title: "글로벌 런치팩: Global Landing Page",
    description: "글로벌 물류/커머스 플랫폼 제작 서비스스",
    likes: 8,
    image: "/images/lp_gb.png",
    period: "2024.03 - 2024.03",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      {
        title: "글로벌 랜딩페이지 제작, 한/영 번역기능 추가",
        content: "• 모바일 최적화로 반응형 페이지 구축",
      },
      {
        title: "글로벌 테마 상품 ⇒ Google Translate API를 이용해 번역기능 추가",
        content: "• Google Translate API를 이용한 다국어 자동번역 시스템 구현",
      },
    ],
    trouble: [],
    website_url: "https://global.launchpack.co.kr/",
    github_url: null,
    youtube_url: null,
    skills: ["Vue.js", "Stylus", "Django", "AWS", "Figma"],
  },
  {
    id: 5,
    title: "쿨리지코너인베스트먼트(CCVC)",
    description:
      "역량있는 스타트업과 소셜벤처에 투자해 창업생태계를 이롭게 하고자 합니다.",
    likes: 12,
    image: "/images/ccvc.png",
    period: "2024.02 - 2024.02",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      {
        title: "프론트 UI 유지보수 및 백오피스(관리자 페이지) 유지보수",
        content: "",
      },
      {
        title: "파파고 API를 이용",
        content:
          "백오피스 > 자동 번역기능 및 프론트 한/영 버튼 적용 및 추가 개발",
      },
    ],
    trouble: [],
    website_url: "https://ccvc.co.kr/",
    github_url: null,
    youtube_url: null,
    skills: ["Vue.js", "Stylus", "Django", "AWS", "Figma"],
  },
  {
    id: 6,
    title: "Soft Landers (소프트랜더스)",
    description: "글로벌 리로케이션 플랫폼",
    likes: 8,
    image: "/images/softlanders.png",
    period: "2023.06 - 2023.09",
    role: "FE dev",
    team: [
      { role: "PL", members: 1 },
      { role: "DE", members: 1 },
      { role: "FE", members: 1 },
      { role: "BE", members: 1 },
    ],
    func: [
      {
        title: "해외 이동에 필요한 견적서 폼 제작",
        content:
          "• 견적서에 사용되는 다양한 input 들을 공동 컴포넌트로 제작 후 재사용률 증가",
      },
      { title: "유저와 얼라이언스 간의 커뮤니티 서비스룸 작업", content: "" },
      { title: "얼라이언스 가입을 위한 파트너센터 작업", content: "" },
    ],
    trouble: [
      {
        title:
          "모바일 환경에서 하단 주소창으로 인한 Modal 버튼 가려짐 현상 문제",
        content:
          "• 문제: \n모바일 환경에서 하단 주소창 활성화 시 모달의 확인 버튼이 가려지는 현상\n• 해결: \nPortal-Vue를 활용하여 확인 버튼을 DOM 최상단으로 이동시켜 주소창에 가려지지 않도록 구현\n• 결과: \n기기별 주소창 높이 차이에 관계없이 모든 모바일 환경에서 일관된 사용자 경험 제공",
      },
    ],
    website_url: "https://softlanders.com/home",
    github_url: null,
    youtube_url: null,
    skills: ["Vue.js", "Stylus", "Django", "AWS", "Figma"],
  },
  {
    id: 7,
    title: "Tgle: 티글",
    description:
      "티켓팅 미리 알림 서비스로 티켓팅을 쉽고 재밌게! 티켓팅 도움 웹서비스 Tgle: 티글!",
    likes: 8,
    image: "/images/tgle.png",
    period: "2022.11 - 2022.12",
    role: "FE dev",
    team: [
      { role: "FE", members: 3 },
      { role: "BE", members: 3 },
    ],
    func: [
      {
        title: "해외 이동에 필요한 견적서 폼 제작",
        content:
          "• 견적서에 사용되는 다양한 input 들을 공동 컴포넌트로 제작 후 재사용률 증가",
      },
      { title: "카카오 소셜로그인 구현", content: "" },
      {
        title: "네이버 지도 api 연동을 통해 공연장 위치 정보 제공 기능 구현",
        content: "",
      },
      { title: "페이지 SNS 공유 기능 구현", content: "" },
      { title: "티켓팅 D-day 카운트 구현", content: "" },
      { title: "React-slick 사용하여 공연정보 Carousel 구현", content: "" },
    ],
    trouble: [
      {
        title: "CORS 에러의 대처",
        content:
          "• 문제:\n 개발 환경과 배포 환경에서의 CORS 에러 발생\n• 해결:\n 개발 중에는 proxy middleware로 우회하고, 배포 시에는 Cloudfront와 Route53을 연동하여 DNS 서버 일원화\n• 결과:\n 도메인 일원화를 통해 CORS 에러 및 보안 문제 해결",
      },
      {
        title:
          "Github Action을 통해 S3에 배포하는 경우 환경변수가 전달되지 않는 문제",
        content:
          "• 문제:\n Github Actions에서 S3 배포 시 환경변수 누락 문제\n• 해결:\n 빌드 전 echo 명령어로 .env 파일 생성 및 Github Secrets에 값 저장\n• 결과:\n CI/CD 파이프라인에서 환경변수를 안전하게 S3로 전달",
      },
    ],
    website_url: null,
    github_url: "https://github.com/ActualProject99/Frontend",
    youtube_url: "https://youtu.be/WVUNIwTRpi0",
    skills: ["React", "TypeScript", "Recoil", "React-query", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "배달만 민족: 클론코딩",
    description: "배달의 민족 클론코딩입니다.",
    likes: 8,
    image: "/images/bm.png",
    period: "2022.10 - 2022.11",
    role: "FE dev",
    team: [
      { role: "FE", members: 2 },
      { role: "BE", members: 2 },
    ],
    func: [
      {
        title: "스토어 리스트 Intersection Observer 구현",
        content: "",
      },
      { title: "useForm을 이용한 회원가입 페이지 구현", content: "" },
      {
        title: "매장 카테고리 분류 구현",
        content: "",
      },
    ],
    trouble: [],
    website_url: null,
    github_url: "https://github.com/F4-Clone-Coding/Frontend",
    youtube_url: null,
    skills: ["React", "Redux", "Styled-components"],
  },
  {
    id: 9,
    title: "Room.D",
    description: "자신의 패션 스타일을 공유하는 패션 추천 웹 서비스 입니다.",
    likes: 8,
    image: "/images/room_d.png",
    period: "2022.09 - 2022.09",
    role: "FL dev",
    team: [{ role: "FL", members: 3 }],
    func: [
      {
        title: "JWT를 이용해 로그인/로그아웃 구현",
        content: "",
      },
      { title: "패션 스타일 이미지와 내용 추가 게시글 작성 구현", content: "" },
      {
        title: "프로필 이미지, 간단한 소개, 닉네임 변경 구현",
        content: "",
      },
      {
        title: "내 작성글 따로 모아볼 수 있게 구현",
        content: "",
      },
    ],
    trouble: [],
    website_url: null,
    github_url: "https://github.com/JangKroed/Room-D",
    youtube_url: null,
    skills: ["Python", "jQuery", "CSS"],
  },
  // 추가 프로젝트...
];
