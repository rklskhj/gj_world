// 스킬별 색상 매핑 객체 생성
const skillColors: Record<string, string> = {
  // 프론트엔드
  react: "#61DAFB",
  "next.js": "#000000",
  nextjs: "#000000",
  "vue.js": "#4FC08D",
  vuejs: "#4FC08D",
  angular: "#DD0031",
  svelte: "#FF3E00",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  html: "#E34F26",
  css: "#1572B6",
  tailwind: "#06B6D4 ",
  "tailwind css": "#06B6D4",
  bootstrap: "#7952B3",
  redux: "#764ABC",
  graphql: "#E10098",
  "react-query": "#FF4785",
  zustand: "#433D37",
  "three.js": "#000000",
  r3f: "#10577B",
  stylus: "#333333",
  pinia: "#F7D336",
  "styled-components": "#DB7093",
  recoil: "#3578E5",

  // 백엔드
  node: "#339933",
  nodejs: "#339933",
  express: "#000000",
  nestjs: "#E0234E",
  django: "#092E20",
  flask: "#000000",
  spring: "#6DB33F",
  springboot: "#6DB33F",
  php: "#777BB4",
  laravel: "#FF2D20",
  ruby: "#CC342D",
  rails: "#CC0000",
  dotnet: "#512BD4",
  go: "#00ADD8",
  rust: "#000000",
  python: "#306998",

  // 데이터베이스
  mysql: "#4479A1",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  firebase: "#FFCA28",
  supabase: "#3ECF8E",

  // 클라우드/인프라
  aws: "#232F3E",
  azure: "#0078D4",
  gcp: "#4285F4",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  vercel: "#000000",
  netlify: "#00C7B7",

  // 모바일
  "react-native": "#61DAFB",
  flutter: "#02569B",
  swift: "#F05138",
  kotlin: "#7F52FF",

  // 기타
  figma: "#F24E1E",
  git: "#F05032",
  github: "#181717",
  gitlab: "#FC6D26",
  jest: "#C21325",
  cypress: "#17202C",
  storybook: "#FF4785",
};

// 텍스트 색상을 결정하는 함수 (배경색이 어두운 경우 흰색, 밝은 경우 검은색)
const getTextColor = (bgColor: string): string => {
  // 16진수 색상 코드를 RGB로 변환
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);

  // 색상의 밝기 계산 (YIQ 공식 사용)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // YIQ가 128보다 크면 어두운 텍스트, 작으면 밝은 텍스트
  return yiq >= 128 ? "#000000" : "#FFFFFF";
};

export default function SkillTag({ skill }: { skill: string }) {
  // 스킬 이름을 소문자로 변환하여 매핑
  const normalizedSkill = skill.toLowerCase();

  // 스킬에 해당하는 색상 가져오기, 없으면 기본 회색 사용
  const bgColor = skillColors[normalizedSkill] || "#718096";

  // 배경색에 따른 텍스트 색상 결정
  const textColor = getTextColor(bgColor);

  return (
    <span
      className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-sm"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {skill}
    </span>
  );
}
