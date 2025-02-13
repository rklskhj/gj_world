// import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

export default function LandingOverlay() {
  return (
    <div className="absolute top-0 z-20 w-full h-full flex flex-col justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <span className="absolute z-10 mx-auto text-white flex font-bold text-center ">
          무한한 가능성을 가진 개발자, 김혁진입니다.
        </span>
        <span className="relative top-0 w-fit h-auto justify-center blur-sm flex bg-gradient-to-r items-center from-white via-blue-700 to-gray-700 bg-clip-text font-bold text-transparent text-center select-auto">
          무한한 가능성을 가진 개발자, 김혁진입니다.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white via-blue-700 to-gray-700 bg-clip-text text-3xl md:text-6xl box-content font-extrabold text-transparent text-center select-none">
          GJ, WORLD
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-blue-700 to-gray-700 bg-clip-text text-3xl md:text-6xl font-extrabold text-transparent text-center select-auto">
          GJ, WORLD
        </h1>
      </div>
      <div className="w-full flex justify-center">
        {/* // TODO: 포스트 완성 후 복구 */}
        {/* <Link href="/posts/all" className="z-10"> */}
        <button
          disabled
          type="button"
          className="font-bold px-4 py-2 rounded-sm bg-gray-700"
        >
          포스트 구경하기
        </button>
        {/* </Link> */}
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="text-gray-400 text-xs z-10 absolute bottom-1 text-center w-full">
        <span>
          <a href="https://skfb.ly/oERRF">&quot;Shiba&quot;</a>
        </span>
        by zixisun02 is licensed under
        <span>
          <a href="http://creativecommons.org/licenses/by/4.0/">
            Creative Commons Attribution
          </a>
        </span>
      </div>
    </div>
  );
}
