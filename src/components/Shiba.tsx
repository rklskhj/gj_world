"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
// import { Mesh } from "three";

export function Shiba() {
  const { scene } = useGLTF("/shiba.glb");
  const clonedScene = useMemo(() => {
    const cloned = scene.clone();
    // 모든 메시를 순회하면서 확인
    // cloned.traverse((child) => {
    //   if (child instanceof Mesh) {
    //     const mesh = child as Mesh;
    //     console.log("Mesh name:", mesh.name); // 모든 메시 이름 출력

    //     // 원하는 부분만 선택하기 위해 더 구체적인 조건 추가
    //     if (mesh.name === "Box002_default_0") {
    //       // 새로운 material 생성하여 적용
    //       const newMaterial = new MeshStandardMaterial({
    //         color: new Color("black"),
    //       });
    //       mesh.material = newMaterial;
    //     }
    //   }
    // });

    return cloned;
  }, [scene]);

  return <primitive object={clonedScene} scale={3} />;
}
