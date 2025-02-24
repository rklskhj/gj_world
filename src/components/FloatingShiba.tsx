"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MovingModel } from "./MovingModel";
import { Suspense, useState, useEffect } from "react";
import Loader from "./Loader"; // 이전에 만든 Loading 컴포넌트

export default function FloatingShiba() {
  const COUNT = 120; //모델의 갯수 조절
  const easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
  const [speed, setSpeed] = useState(1); //모델의 속도 조절
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black h-screen relative">
      {!isLoading && (
        <div className="absolute z-30 bottom-1/2 md:right-1 -right-6 transform rotate-90">
          <input
            type="range"
            min={0}
            max={10}
            value={speed}
            step={1}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="appearance-none cursor-pointer bg-gray-200  rounded-lg w-full h-2 accent-slate-500"
          />
        </div>
      )}
      <Canvas flat dpr={[1, 1.5]}>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          {Array.from({ length: COUNT }, (_, i) => (
            <MovingModel
              key={i}
              index={i}
              z={Math.round(easing(i / COUNT) * 80)}
              speed={speed}
            />
          ))}
          <ambientLight intensity={1} />
          <Environment preset="forest" />
        </Suspense>
      </Canvas>
    </div>
  );
}
