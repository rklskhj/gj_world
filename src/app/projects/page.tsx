import ProjectsList from "@/components/ProjectsList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Projects() {
  return (
    <div className="relative w-full">
      <Header />
      <ProjectsList />
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
