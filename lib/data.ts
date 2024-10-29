import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import travelImg from "@/public/travel.jpeg";
import portfolioImg from "@/public/potfolio.jpeg";
import donutImg from "@/public/donut.jpg";

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
    title: "undergraduate of university of Sri Jayawardenapura",
    location: "Sri Lanka",
    description:
      "I'm an undergraduate studying in USJ. While studying I'm working as a freelancer",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Conducted Couple of projects in UNIVERSITY",
    location: "Sri Lanka",
    description:
      "I worked as the UI/UX designer in university projects",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "freelancing as a UI/UX Designer",
    location: "Sri Lanka",
    description:
      "Designing UI/UX for clients as a freelancer",
    icon: React.createElement(FaReact),
    date: "2023 present",
  },
] as const;

export const projectsData = [
  {
    title: "Travel Destination App",
    description:
      "Designed a travel app to help users discover and plan trips seamlessly. Conducted user research to identify key features, including destination recommendations and hotel listings. Created a clean, intuitive interface in Figma with interactive elements like search and location-based suggestions. Collaborated closely with a small team, gaining hands-on experience in UI/UX design and user flow creation.",
    tags: ["React", "Next.js", 'CSS','HTML','JS'],
    imageUrl: travelImg,
  },
  {
    title: "Donut Shop Web App",
    description:
      "Developed a responsive web app for a donut shop to enhance online ordering and customer engagement. Designed a user-friendly interface that allows customers to browse flavors, customize orders, and schedule pickups. Focused on creating an intuitive experience with a visually appealing layout, enabling easy navigation and a smooth ordering process.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: donutImg,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase my design projects and growing skill set. Created a responsive and interactive layout using Figma, ensuring an intuitive user flow for easy navigation. Integrated basic HTML/CSS to bring the design to life and practiced building cohesive visual branding to reflect my personality and style.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
