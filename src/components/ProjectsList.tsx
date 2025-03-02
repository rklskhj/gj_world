"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { MOCK_PROJECTS, Project } from "@/data/projects";
import { SparklesCore } from "./ui/sparkles";

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  // 나중에 API 호출로 대체 가능
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const response = await fetch('/api/projects');
  //     const data = await response.json();
  //     setProjects(data);
  //   };
  //   fetchProjects();
  // }, []);

  return (
    <div className="container mx-auto w-full h-screen pt-14">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="w-full absolute inset-0 h-screen -z-10">
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
    </div>
  );
}
