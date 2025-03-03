import Link from "next/link";
import DarkModeToggleButton from "./darkModeToggleButton";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font max-sm:px-4 w-full">
        <div className="container mx-auto flex flex-wrap h-11 items-center justify-between px-4">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 max-md:mb-0"
          >
            <span className="absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-ai-blue via-ai-purple to-ai-pink bg-clip-text md:text-xl box-content font-bold text-transparent text-center select-none transition-all">
              GJ, WORLD
            </span>
            <span className="relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-ai-blue via-ai-purple to-ai-pink bg-clip-text md:text-xl font-bold text-transparent text-center select-auto">
              GJ, WORLD
            </span>
          </Link>
          <div className="flex align-center">
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
              {/* <Link href="/" className="mr-5 text-gray-100 hover:text-gray-500">
                <span className="max-md:hidden">HOME</span>🏠
              </Link> */}
              <Link
                href="/projects"
                className="mr-5 text-gray-100 hover:text-gray-500"
              >
                <span className="max-md:hidden">PROJECTS</span>💾
              </Link>
              <Link
                href="https://open.kakao.com/o/slJFWR2e"
                className="mr-5 text-gray-100 hover:text-gray-500"
              >
                <span className="max-md:hidden">CONTACT</span>📱
              </Link>
            </nav>
            <DarkModeToggleButton />
          </div>
        </div>
      </header>
    </>
  );
}
