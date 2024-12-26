"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  // State to control number of visible projects
  const [visibleProjects, setVisibleProjects] = useState(3);

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {visibleProjects < projectsData.length && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMoreProjects}
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
