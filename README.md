# 🌏 GJ, WORLD<a id="top"></a>

<br/>
<div align="center">
  <h3>프로젝트 포트폴리오</h3>
  <a href="https://gj-world.vercel.app/" target="_blank">
    GJ, WORLD (준비중)
  </a>
</div>
<br/>

## 프로젝트

포트폴리오 사이트입니다.

<p align="right"><a href="#top">맨 위로 가기 ⬆️</a></p>

### 🛠️ 기술 스택

<div>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">
</div>

<p align="right"><a href="#top">맨 위로 가기 ⬆️</a></p>

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
