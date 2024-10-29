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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
