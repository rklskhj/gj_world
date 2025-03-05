// Firebase 데이터 초기화 스크립트 예제
// 실행 방법: node src/scripts/seed-firebase.js
// 사용 방법: 이 파일을 seed-firebase.js로 복사하고 Firebase 구성 값을 실제 값으로 변경하세요.
/* eslint-disable @typescript-eslint/no-require-imports */
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} = require("firebase/firestore");

// 프로젝트 데이터
const MOCK_PROJECTS = [
  {
    id: "1",
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
    website_url: "https://example.com",
    github_url: "https://github.com/example/example",
    youtube_url: null,
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Three.js",
      "React-Query",
      "Zustand",
    ],
  },
  // 추가 프로젝트 데이터...
];

// Firebase 구성 - 실제 값으로 변경하세요
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore에 데이터 추가
async function seedDatabase() {
  try {
    console.log("데이터베이스 초기화 시작...");

    // 기존 데이터 삭제 (선택 사항)
    await clearCollection("projects");

    // 프로젝트 데이터 추가
    const projectsRef = collection(db, "projects");

    for (const project of MOCK_PROJECTS) {
      console.log(`프로젝트 추가 중: ${project.title}`);
      await setDoc(doc(projectsRef, project.id), project);
    }

    console.log("데이터베이스 초기화 완료!");
  } catch (error) {
    console.error("데이터베이스 초기화 중 오류 발생:", error);
  }
}

// 컬렉션 비우기
async function clearCollection(collectionName) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);

  console.log(`${collectionName} 컬렉션 비우는 중...`);

  const deletePromises = [];
  snapshot.forEach((document) => {
    deletePromises.push(deleteDoc(doc(db, collectionName, document.id)));
  });

  await Promise.all(deletePromises);
  console.log(`${collectionName} 컬렉션 비우기 완료`);
}

// 스크립트 실행
seedDatabase()
  .then(() => {
    console.log("스크립트 실행 완료");
    process.exit(0);
  })
  .catch((error) => {
    console.error("스크립트 실행 중 오류 발생:", error);
    process.exit(1);
  });
