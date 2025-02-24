import { Html, useProgress } from "@react-three/drei";
import GridLoader from "react-spinners/GridLoader";

export default function Loading() {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="bg-black/80 w-screen h-screen absolute z-50 flex items-center justify-center gap-4"
    >
      <GridLoader color="#ffffff" size={4} />
      <div className="text-white text-xl">{Math.round(progress)} % loaded</div>
    </Html>
  );
}
