# 🌏 GJ, WORLD

포트폴리오 프로젝트로, 기술적 역량을 효과적으로 보여주는 것에 중점을 둔 웹 애플리케이션입니다.

## 🌐 URL

https://gj-world.vercel.app/

## ✔️ Next.js 선택 이유

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

## ✨ 주요 기능

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

## 🔥 Firebase 설정 방법

### 1. Firebase 프로젝트 생성

1. [Firebase 콘솔](https://console.firebase.google.com/)에 접속합니다.
2. '프로젝트 추가'를 클릭하여 새 프로젝트를 생성합니다.
3. 프로젝트 이름을 입력하고 안내에 따라 설정을 완료합니다.

### 2. Firestore 데이터베이스 생성

1. 왼쪽 메뉴에서 'Firestore Database'를 클릭합니다.
2. '데이터베이스 만들기' 버튼을 클릭합니다.
3. 시작 모드를 선택합니다 (개발 중에는 '테스트 모드' 권장).
4. 데이터베이스 위치를 선택하고 '사용 설정'을 클릭합니다.

### 3. 웹 앱 등록

1. 프로젝트 개요 페이지에서 '</>' 아이콘을 클릭하여 웹 앱을 등록합니다.
2. 앱 닉네임을 입력하고 '앱 등록'을 클릭합니다.
3. Firebase SDK 구성 정보를 복사합니다.

### 4. 환경 변수 설정

1. 프로젝트 루트에 `.env.local` 파일을 생성합니다.
2. 다음과 같이 환경 변수를 설정합니다:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. 데이터베이스 초기화

1. `src/scripts/seed-firebase.example.js` 파일을 `src/scripts/seed-firebase.js`로 복사합니다.
2. Firebase 구성 값을 실제 값으로 변경합니다.
3. 다음 명령어를 실행하여 데이터베이스를 초기화합니다:

```bash
npm run seed-firebase
```

<p align="right"><a href="#top">맨 위로 가기 ⬆️</a></p>
