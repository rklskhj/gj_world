import Image from "next/image";
import { Project } from "@/data/projects";
import { MouseEventHandler, useRef, useState } from "react";
import SkillTagLabel from "@/components/SkillTagLabel";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

// 카드 회전 각도 (최대 15도)
const cardRoation = 15;
// 카드 호버 시 확대 비율 (1.07배)
const cardScale = 1.07;
// 광택 효과(sheen)의 크기 (픽셀 단위)
const sheenSize = 500;

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // 마우스 위치 상태 관리
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [sheenPosition, setSheenPosition] = useState({ x: 0, y: 0 });

  // 컨테이너 참조 생성
  const containerRef = useRef<HTMLDivElement>(null);

  // 마우스 이벤트에서 상대적 위치 계산 함수
  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    // 요소의 크기와 위치 정보 가져오기
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    // 요소 내부에서의 마우스 좌표 계산
    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  // 마우스 이동 시 호출되는 핸들러
  const handleMouseMove: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } =
      getMousePosition(e);

    // 마우스 위치를 -0.5 ~ 0.5 범위의 비율로 변환
    const xPct = currentMouseX / containerWidth - 0.5;
    const yPct = currentMouseY / containerHeight - 0.5;

    // 회전 각도 계산
    setRotateX(-yPct * cardRoation);
    setRotateY(xPct * cardRoation);

    // 광택 효과 위치 계산
    setSheenPosition({
      x: currentMouseX - sheenSize / 2,
      y: currentMouseY - sheenSize / 2,
    });
  };

  // 마우스가 요소에 진입할 때 호출되는 핸들러
  const handleMouseEnter: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY } = getMousePosition(e);

    // 카드 확대 효과 적용
    setScale(cardScale);

    // 광택 효과 위치 초기화
    setSheenPosition({
      x: currentMouseX - sheenSize / 2,
      y: currentMouseY - sheenSize / 2,
    });
  };

  // 마우스가 요소를 떠날 때 호출되는 핸들러
  const handleMouseLeave: MouseEventHandler = () => {
    // 모든 효과를 기본값으로 리셋
    setScale(1);
    setRotateX(0);
    setRotateY(0);
  };

  // 클릭 이벤트 핸들러 추가
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="flex flex-col h-96 w-80 rounded-xl bg-gradient-to-br from-white to-gray-400 dark:from-gray-800 dark:to-gray-500  p-4 shadow-lg overflow-hidden group cursor-pointer"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* 광택 효과 (마우스를 따라다니는 흰색 그라데이션) */}
      <div
        className="absolute z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-200 rounded-full blur-md"
        style={{
          background: "radial-gradient(white, #3984ff00 80%)",
          left: sheenPosition.x,
          top: sheenPosition.y,
          height: sheenSize,
          width: sheenSize,
          pointerEvents: "none",
        }}
      />
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image
          src={project.image || "/profile.png"}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-1 mt-4 mb-2">
        <p className="text-xl font-semibold tracking-tight leading-tight text-black dark:text-white truncate">
          {project.title}
        </p>

        <p className="text-sm text-neutral-700 line-clamp-1">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 mb-2 flex-wrap">
        {project.skills.slice(0, 3).map((skill) => (
          <SkillTagLabel key={skill} skill={skill} />
        ))}
        {project.skills.length > 3 && (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-sm bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-700">
            +{project.skills.length - 3}
          </span>
        )}
      </div>

      <div className="w-full flex justify-end items-end gap-2">
        {project.website_url && (
          <div className="fill-[#000000] dark:fill-white w-6 opacity-70">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8 14V15C8 16.1 8.9 17 10 17V19.93C6.61 19.43 4 16.07 4 12ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
            </svg>
          </div>
        )}
        {project.github_url && (
          <div className="fill-[#000000] dark:fill-white w-6 opacity-70">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.236 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
        )}
        {project.youtube_url && (
          <div className="fill-[#FF0000] w-6 opacity-70">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>YouTube</title>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
