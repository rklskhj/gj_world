import ProjectsList from "@/components/ProjectsList";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Projects() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen w-full">
      <div>
        <Header />
        <ProjectsList />
      </div>
      <div className="w-full absolute inset-0 -z-10">
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
      <Footer />
    </div>
  );
}
