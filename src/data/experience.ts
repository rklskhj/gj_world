export interface Project {
  id: string;
  period: string;
  title: string;
  description: string;
  details: string[];
  insight?: string;
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  companyLink?: string;
  position: string;
  description: string;
  projects?: Project[];
  achievements?: string[];
  skills?: string[];
  githubLink?: string;
  projectLink?: string;
  insight?: string;
  stack?: string;
  teamSize?: string;
}

export const workExperience: Experience[] = [
  {
    id: "launchpack-1",
    period: "2023.02.15 - 2024.12.13",
    company: "런치팩(Launch Pack)",
    companyLink: "https://launchpack.co.kr/home",
    position: "Frontend Developer",
    description:
      "누구나 웹,앱서비스를 만들고 창업할 수 있도록 글로벌 SaaS 솔루션",
    projects: [
      {
        id: "platform-template",
        period: "2024.09-2024.12",
        title: "플랫폼 템플릿 서비스 개발",
        description:
          "서비스를 제작하고 싶은 고객과 개발 파트너를 연결해주는 서비스",
        details: [
          "동적 필터링 시스템 구현으로 검색 속도 40% 향상",
          "템플릿 상품 유형에 따른 백엔드 API 설계 및 모델 설정",
          "Socket.io 활용한 고객과 파트너의 실시간 채팅 시스템 구현",
        ],
        insight:
          "비즈니스 요구사항과 기술적 구현의 균형을 맞추는 법을 익히고, 빠른 피드백을 반영해 사용자 중심의 기능을 개선하는 과정을 경험함",
      },
      {
        id: "quotation-platform",
        period: "2023.06-2023.09",
        title: "견적서 주문 플랫폼 개발",
        description:
          "유저가 견적을 요청하고 파트너에게 받은 견적서를 비교, 결제/주문할 수 있는 플랫폼",
        details: [
          "Vue.js 기반 프론트엔드 및 백오피스 개발 및 유지보수 관여 (기여도 60%)",
          "견적서에 필요한 다양한 입력 폼을 재사용성을 고려해 컴포넌트화하여 유지보수성 개선",
          "Google Translate API 연동으로 3개 국어 이상 지원, 해외 사용자 경험 개선",
        ],
        insight:
          "컴포넌트화와 유효성 검증을 통해 견고한 폼 구조를 설계하는 법을 익혔고, 외부 API 연동을 통한 다국어 처리 경험",
      },
      {
        id: "aws-deployment",
        period: "2023.03-2024.12",
        title: "AWS 기반 서비스 배포 및 운영",
        description: "AWS 인프라 구축 및 운영",
        details: [
          "프론트엔드 정적 페이지 AWS S3 + CloudFront 배포",
          "백엔드 서버 AWS EC2 배포 및 운영",
          "반응형 UI 구현으로 모바일 사용자 만족도 20% 증가",
        ],
      },
    ],
  },
];

export const otherExperience: Experience[] = [
  {
    id: "tgle",
    period: "2022.11-2022.12",
    company: "Tgle: 티글",
    position: "Frontend Developer",
    description:
      "티켓팅 미리 알림 서비스로 티켓팅을 쉽고 재밌게! 티켓팅 도움 웹 서비스",
    achievements: [
      "SNS 회원가입/로그인 구현으로 기존 이메일 가입보다 가입률 90% 증가",
      "티켓팅 시간을 실시간 카운트다운으로 구현해 유저 만족도 40% 증가",
      "콘서트(홈), 상세, MyPicks(정보), 검색 등 페이지 제작 관여",
    ],
    stack: "React, TypeScript, Recoil, React-Query",
    teamSize: "BE 3 / FE 3",
    githubLink: "https://github.com/ActualProject99/Frontend",
    insight:
      "CORS 문제를 proxy middleware로 해결하며 프론트와 백엔드 협업의 중요성을 경험. 또한 사용자 편의 기능이 서비스 성장에 미치는 영향을 체감",
  },
  {
    id: "payment-demo",
    period: "2025.03",
    company: "결제 시스템 데모 프로젝트",
    position: "FullStack Developer",
    description:
      "Strip API를 활용해 일회성/구독형 결제 시스템을 구현한 데모 프로젝트",
    achievements: [
      "Stripe 결제를 활용한 일회성/구독 결제 시스 구현 및 Webhook 비동기 처리",
      "실제 결제 흐름 시나리오 테스트 및 동시성 제어 설계 경험",
      "코드 최적화로 빌드 시간 36% 단축, Lighthouse 성능 점수 100점 달성",
    ],
    stack: "Next.js, TypeScript, Prisma, PostgreSQL, Stripe API, Vercel",
    teamSize: "Full-stack 1",
    projectLink: "https://payment-system-demo.vercel.app/",
    githubLink: "https://github.com/rklskhj/payment-system-demo",
    insight:
      "결제 시스템에서 동시성 제어 및 에러 처리의 중요성을 경험. 또한, 서버리스 환경에서 데이터베이스 연결 관리가 성능에 미치는 영향을 체감",
  },
  {
    id: "testing-project",
    period: "2025.03",
    company: "React Component Testing Project",
    position: "Frontend Developer",
    description:
      "Jest와 React Testing Library를 활용한 React 컴포넌트 테스트 학습 프로젝트",
    achievements: [
      "Counter, TodoList, SignupForm 등 실제 서비스와 유사한 컴포넌트 테스트 구현",
      "비동기 작업 및 API 호출에 대한 모킹(Mocking) 테스트 전략 수립",
      "GitHub Actions를 통한 CI/CD 파이프라인 구축 및 자동화된 테스트 환경 구성",
    ],
    stack: "Next.js, TypeScript, Jest, React Testing Library",
    teamSize: "FE 1",
    githubLink: "https://github.com/rklskhj/test-code_jest-rtl",
    insight:
      "컴포넌트 테스트 자동화를 통해 안정적인 개발 환경을 구축하고, 실제 서비스 환경에서 발생할 수 있는 다양한 시나리오에 대한 테스트 작성 경험을 쌓음",
  },
];
