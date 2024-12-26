import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import TrucklinkImg from "@/public/trucklink.png";
import AventurasImg from "@/public/aventuras.png";
import AmxImg from "@/public/amx.png";
import HungerspointImg from "@/public/hungerspoint.png";
import DogPerfectImg from "@/public/dogperfect.png";
import FlyDroImg from "@/public/flydro.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Diploma in Computer Science",
    location: "Bengaluru, India",
    description:
      "After completing my schooling, I pursued a Diploma in Computer Science to further enhance my understanding of technology and gain practical skills in the field.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Enrolled in Courses and Training Programs",
    location: "Bengaluru, India",
    description:
   "I completed a software development certification course, gaining hands-on experience and working on practical projects.",
  icon: React.createElement(FaLaptopCode),
    date: "2022",
  },
  {
    title: "Software Developer",
    location: "Bengaluru, India",
    description:
      "I'm now a Software Developer working full-time. My stack includes React, Next.js, TypeScript, Tailwind,Nodejs, MongoDB and more.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Trucklink",
    description:
      "I worked as a full-stack developer on this startup project for 5 months. Dashboard for Managing Drivers,trucks,orders and accounts.",
    tags: ["React","Typescript","Tailwind","Google Sheets"],
    imageUrl: TrucklinkImg,
  },
  {
    title: "Aventuras",
    description:
      "Travel website with full fledged features from Planning trip to booking including Payments and generating invoice and storing data",
    tags: ["React", "Nodejs", "Strapi.js", "Redux"],
    imageUrl: AventurasImg,
  },
  {
    title: "AMX Fibregrid",
    description:
      "powerful cloud based enterprise software stack we have ever built and is based on providing real time analytics and fleet information along with synchronised data storing at the organisations finger tips",
    tags: ["React"],
    imageUrl: AmxImg,
  },
  {
    title: "FlyDro",
    description:
      "Online Course booking WebApp",
    tags: ["React","Typescript","Tailwind"],
    imageUrl: FlyDroImg,
  },
  {
    title: "Hungerspoint",
    description:
      "Food ordering Website",
    tags: ["React","Tailwind"],
    imageUrl: HungerspointImg,
  },
  {
    title: "Dog Perfect",
    description:
      "Online Pet Store Website integrating POS management ",
    tags: ["HTML",'CSS','Javascript'],
    imageUrl: DogPerfectImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "Strapi",
  "React Native cli",
  "Expo",
  "MUI",
  "Antd",
  "Git",
  "Figma",
  "Docker",
  "Jenkins",
  "Digital Ocean",
  "Firebase",
  "Tailwind",
  "Framer Motion",
] as const;
