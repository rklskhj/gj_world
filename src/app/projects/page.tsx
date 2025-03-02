import ProjectsList from "@/components/ProjectsList";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Projects() {
  return (
    <div className="relative w-full h-screen">
      <Header />
      <ProjectsList />
      <Footer />
    </div>
  );
}
