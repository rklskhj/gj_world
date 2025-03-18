# 🌏 GJ, WORLD

포트폴리오 프로젝트로, 기술적 역량을 효과적으로 보여주는 것에 중점을 둔 웹 애플리케이션입니다.

## 🌐 URL

https://gj-world.vercel.app/ (준비중)

## 🎙️ Next.js 선택 이유

- **`App Router`**를 활용한 서버 컴포넌트와 클라이언트 컴포넌트의 효율적인 관리
- **`서버 사이드 렌더링(SSR)`**을 통한 초기 로딩 성능 최적화
- **`TypeScript`**와의 완벽한 통합으로 타입 안정성 확보
- **`Vercel`** 배포 플랫폼과의 원활한 통합 및 자동화된 배포 프로세스

## 🛠️ Tech Stack

| Area           | Tech Stack                                                                                                                                                                                                                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**   | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=Tailwind-CSS&logoColor=white) |
| **Backend/DB** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black)                                                                                                                                                                                                                                        |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white)                                                                                                                                                                                                                                              |

## 🖼️ 주요 기능

- **`Firebase 인증`**을 통한 사용자 관리
- **`Firestore`**를 활용한 데이터 관리
- **`반응형 디자인`** 구현
- **`다크 모드`** 지원
- **`성능 최적화`**
  - 이미지 최적화
  - 코드 스플리팅
  - 레이지 로딩
- **`애니메이션`** 효과
  - Framer Motion을 활용한 부드러운 전환 효과
  - 스크롤 기반 애니메이션

## 📦 Project Structure

📦 src
├── 📂 app # App Router 페이지
├── 📂 components # 재사용 가능한 컴포넌트
│ ├── 📂 common # 공통 컴포넌트
│ ├── 📂 layout # 레이아웃 관련 컴포넌트
│ └── 📂 sections # 각 섹션별 컴포넌트
├── 📂 constants # 상수 정의
├── 📂 hooks # 커스텀 훅
├── 📂 lib # 유틸리티 함수 및 설정
│ ├── 📂 firebase # Firebase 설정 및 함수
│ └── 📂 utils # 유틸리티 함수
├── 📂 store # 상태 관리
├── 📂 styles # 전역 스타일
└── 📂 types # TypeScript 타입 정의

## 🚀 Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# Firebase 데이터베이스 초기화
npm run seed-firebase
```
