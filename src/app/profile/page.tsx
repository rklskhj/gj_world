import Header from "@/components/header";
import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import dynamic from "next/dynamic";

// 클라이언트 컴포넌트 동적 임포트
const ProfileHero = dynamic(() => import("@/components/profile/ProfileHero"), {
  ssr: false,
});
const ProfileAbout = dynamic(
  () => import("@/components/profile/ProfileAbout"),
  { ssr: false }
);
const ProfileSkills = dynamic(
  () => import("@/components/profile/ProfileSkills"),
  { ssr: false }
);
const ProfileExperience = dynamic(
  () => import("@/components/profile/ProfileExperience"),
  { ssr: false }
);

// 서버 컴포넌트로 유지
export default function Profile() {
  return (
    <div className="relative flex flex-col w-full text-white overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* 배경 효과 */}
      <div className="w-full fixed inset-0 -z-10">
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

      {/* 메인 컨텐츠 - 각 섹션이 화면 높이를 채움 */}
      <main className="flex flex-col z-10">
        <section className="min-h-screen flex items-center justify-center">
          <ProfileHero />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <ProfileAbout />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <ProfileSkills />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <ProfileExperience />
        </section>
      </main>

      <Footer />
    </div>
  );
}
