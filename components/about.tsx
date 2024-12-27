"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a passionate <span className="font-medium">software developer</span> with expertise in building innovative and reliable software solutions. I am specialized in full-stack development, focusing on creating scalable, high-performance web applications.
        My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>. I am also familiar with TypeScript and React Native.
        My journey in software development has provided me with valuable experience in the development life cycle, allowing me to refine applications for optimal performance. I am always eager to learn new technologies, tackle fresh challenges, and collaborate on projects.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and travelling.
      </p>
    </motion.section>
  );
}
