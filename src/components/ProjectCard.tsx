import Image from "next/image";
import { Project } from "@/data/projects";
import { motion, useTransform, useSpring } from "framer-motion";
import { MouseEventHandler } from "react";

interface ProjectCardProps {
  project: Project;
}

// 카드 회전 각도 (최대 15도)
const cardRoation = 15;
// 카드 호버 시 확대 비율 (1.07배)
const cardScale = 1.07;
// 광택 효과(sheen)의 크기 (픽셀 단위)
const sheenSize = 500;

export default function ProjectCard({ project }: ProjectCardProps) {
  // useSpring: 부드러운 애니메이션을 위한 값 생성, bounce: 0은 튕김 효과 없이 부드럽게 전환
  // xPcnt, yPcnt: 마우스 위치의 상대적 비율 (-0.5 ~ 0.5 범위)
  const xPcnt = useSpring(0, { bounce: 0 });
  const yPcnt = useSpring(0, { bounce: 0 });
  // scale: 카드 크기 조절을 위한 값 (기본값 1)
  const scale = useSpring(1, { bounce: 0 });
  // mouseX, mouseY: 카드 내 마우스의 절대 위치 (픽셀 단위)
  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });

  // useTransform: 입력값을 출력값으로 매핑
  // yPcnt 값을 기반으로 X축 회전 각도 계산 (위/아래 움직임에 따른 회전)
  const rotateX = useTransform(
    yPcnt,
    [-0.5, 0.5],
    [`-${cardRoation}deg`, `${cardRoation}deg`]
  );
  // xPcnt 값을 기반으로 Y축 회전 각도 계산 (좌/우 움직임에 따른 회전)
  const rotateY = useTransform(
    xPcnt,
    [-0.5, 0.5],
    [`-${cardRoation}deg`, `${cardRoation}deg`]
  );

  // 광택 효과의 위치 계산 (마우스 위치에서 광택 크기의 절반을 빼서 중앙 정렬)
  const sheenX = useTransform(() => mouseX.get() - sheenSize / 2);
  const sheenY = useTransform(() => mouseY.get() - sheenSize / 2);

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
    xPcnt.set(currentMouseX / containerWidth - 0.5);
    yPcnt.set(currentMouseY / containerHeight - 0.5);

    // 광택 효과를 위한 마우스 절대 위치 저장
    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);
  };

  // 마우스가 요소에 진입할 때 호출되는 핸들러
  const handleMouseEnter: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY } = getMousePosition(e);

    // 카드 확대 효과 적용
    scale.set(cardScale);

    // 광택 효과 위치 초기화
    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);
  };

  // 마우스가 요소를 떠날 때 호출되는 핸들러
  const handleMouseLeave: MouseEventHandler = () => {
    // 모든 효과를 기본값으로 리셋
    scale.set(1);
    xPcnt.set(0);
    yPcnt.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col h-96 w-80 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-400 p-4 shadow-lg overflow-hidden group"
      style={{
        transformStyle: "preserve-3d", // 3D 변환 효과 유지
        rotateX, // X축 회전 (위/아래 움직임)
        rotateY, // Y축 회전 (좌/우 움직임)
        scale, // 크기 조절 (호버 시 확대)
      }}
    >
      {/* 광택 효과 (마우스를 따라다니는 흰색 그라데이션) */}
      <motion.div
        className="absolute z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-full blur-md"
        style={{
          background: "radial-gradient(white, #3984ff00 80%)",
          left: sheenX,
          top: sheenY,
          height: sheenSize,
          width: sheenSize,
        }}
      />
      <div className="relative w-full aspect-square rounded-md overflow-hidden">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-0 mt-4">
        <h1 className="text-xl font-semibold tracking-tight leading-tight">
          Built With Code
        </h1>
        <p className="text-sm text-neutral-700 font-mono">YouTube</p>
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-[0.6rem] font-medium px-2 py-[3px] border-neutral-700 text-neutral-700 border-[1px] rounded-sm">
          Est. January 2021
        </span>
        <button className="fill-[#FF0000] w-6 opacity-70">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
