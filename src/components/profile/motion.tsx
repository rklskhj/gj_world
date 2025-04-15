"use client";

import { motion, HTMLMotionProps } from "framer-motion";

// Motion 컴포넌트에 className 속성 및 스타일 속성을 포함하기 위한 타입 확장
interface ExtendedMotionComponents {
  div: React.ForwardRefExoticComponent<HTMLMotionProps<"div">>;
  h1: React.ForwardRefExoticComponent<HTMLMotionProps<"h1">>;
  h2: React.ForwardRefExoticComponent<HTMLMotionProps<"h2">>;
  p: React.ForwardRefExoticComponent<HTMLMotionProps<"p">>;
  section: React.ForwardRefExoticComponent<HTMLMotionProps<"section">>;
}

// 타입 캐스팅을 통해 확장된 타입 사용
const extendedMotion = motion as unknown as ExtendedMotionComponents;

// 직접 컴포넌트 정의
export const MotionDiv = extendedMotion.div;
export const MotionH1 = extendedMotion.h1;
export const MotionH2 = extendedMotion.h2;
export const MotionP = extendedMotion.p;
export const MotionSection = extendedMotion.section;
