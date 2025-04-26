"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

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

export default function ProfileWrapper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex flex-col z-10">
      <section className="min-h-screen flex items-center justify-center">
        <ProfileHero />
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <ProfileAbout />
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <ProfileExperience />
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <ProfileSkills />
      </section>
    </main>
  );
}
