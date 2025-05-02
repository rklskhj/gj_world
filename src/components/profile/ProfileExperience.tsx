"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Experience,
  Project,
  workExperience,
  otherExperience,
} from "@/data/experience";
import Link from "next/link";

interface ExperienceCardProps extends Experience {
  isVisible: boolean;
}

interface ProjectCardProps extends Project {
  isVisible: boolean;
}

export default function ProfileExperience() {
  const [scrollY, setScrollY] = useState(0);
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    setThreshold(window.innerHeight * 1.5);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inView = scrollY > threshold;

  return (
    <section className="w-full min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "4rem",
            textAlign: "center",
            color: "white",
          }}
        >
          Experience
        </motion.h1>

        <div className="space-y-20">
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-blue-400">
              Work Experience
            </h3>
            <div className="space-y-16">
              {workExperience.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} isVisible={inView} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-8 text-purple-400">
              Other Experience
            </h3>
            <div className="space-y-16">
              {otherExperience.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} isVisible={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  period,
  description,
  details,
  insight,
  isVisible,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      style={{
        marginTop: "2rem",
        paddingLeft: "1.5rem",
        borderLeft: "2px solid rgba(59, 130, 246, 0.3)",
      }}
    >
      <div className="flex flex-col">
        <span className="text-blue-400 font-medium text-lg mb-2">{period}</span>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-gray-300 mb-4 italic">{description}</p>
        <ul className="space-y-2 mb-4">
          {details.map((detail, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
        {insight && (
          <p className="text-sm text-gray-400 border-l-4 border-blue-500 pl-4 mt-4">
            {insight}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function ExperienceCard({
  company,
  companyLink,
  position,
  period,
  description,
  projects,
  achievements,
  stack,
  teamSize,
  githubLink,
  projectLink,
  insight,
  isVisible,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      transition={{ duration: 0.8 }}
      style={{
        position: "relative",
        backgroundColor: "rgba(31, 41, 55, 0.5)",
        borderRadius: "0.75rem",
        padding: "2rem",
      }}
    >
      <div className="md:grid md:grid-cols-5 md:gap-16 items-start">
        <div className="md:col-span-2 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400 font-medium text-xl">{period}</span>
            {teamSize && (
              <span className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                {teamSize}
              </span>
            )}
          </div>
          {companyLink ? (
            <Link
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-3xl text-white hover:text-blue-400 transition-colors"
            >
              {company}
            </Link>
          ) : (
            <span className="font-bold text-3xl text-white">{company}</span>
          )}
          <h3 className="text-xl font-semibold text-blue-300 mt-2">
            {position}
          </h3>
          {stack && (
            <p className="text-gray-400 mt-4 text-sm">
              Tech Stack: <span className="text-gray-300">{stack}</span>
            </p>
          )}
        </div>
        <div className="md:col-span-3 mt-6 md:mt-0">
          <p className="text-xl text-gray-300 leading-relaxed font-light mb-6">
            {description}
          </p>

          {achievements && achievements.length > 0 && (
            <ul className="space-y-2 mb-6">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}

          {projects &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isVisible={isVisible}
              />
            ))}

          {insight && (
            <p className="text-sm text-gray-400 border-l-4 border-blue-500 pl-4 mt-6">
              {insight}
            </p>
          )}

          <div className="flex gap-4 mt-8">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                </svg>
                GitHub
              </Link>
            )}
            {projectLink && (
              <Link
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
