import Header from "@/components/header";
import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import ProfileWrapper from "@/components/profile/ProfileWrapper";
import CircleTopPageBtn from "@/components/common/CircleTopPageBtn";
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
      <ProfileWrapper />
      <CircleTopPageBtn />
      <Footer />
    </div>
  );
}
