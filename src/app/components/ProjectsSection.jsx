"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "WinUtil Desktop",
    description: "Desktop version of WinUtil. A utility application for Windows.",
    image: "/images/projects/Title-Screen.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aarnav-Tech/winutil",
    previewUrl: "https://win-util-landing.vercel.app/",
  },
  {
    id: 2,
    title: "Career Compass Website",
    description: "Website for Career Compass, a career guidance platform.",
    image: "/images/projects/career.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aarnav-Tech/CareerCompassSite",
    previewUrl: "https://career-compass.ct.ws",
  },
  {
    id: 3,
    title: "Apple Color Emoji Installer (Linux Only)",
    description: "Installs Apple Color Emoji font on Linux systems. Cuz why not?",
    image: "/images/projects/apple-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aarnav-Tech/apple-color-emoji-installer",
    previewUrl: "https://aarnav-tech.github.io/apple-color-emoji-installer/",
  },
  {
    id: 4,
    title: "Python Autoclicker",
    description: "Open source autoclicker made with python. Useful for gaming.",
    image: "/images/projects/app.ico",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aarnav-Tech/Python-Autoclicker",
    previewUrl: "https://aarnav-tech.github.io/Python-Autoclicker/",
  },
  {
    id: 5,
    title: "Minecraft Server Status Pinger.",
    description: "A simple website to ping Minecraft servers and check their status.",
    image: "/images/projects/mss.png",
    tag: ["All", "Web"],
    gitUrl: "https://aarnav-tech.github.io/stat-serv-v2/",
    previewUrl: "https://aarnav-tech.github.io/stat-serv-v2/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
