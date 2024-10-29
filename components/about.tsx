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
        After graduating with a degree in{" "}
        <span className="font-medium">IT</span>, I decided to shift gears and follow my passion for programming. I dedicated myself to learning UI/UX design through online courses, hands-on projects, and a lot of experimentation. {" "}
        <span className="font-medium">What I love most about design is the challenge of creating intuitive, visually appealing experiences that genuinely make people's lives easier.</span>.{" "}
        <span className="italic">I focus on responsive and interactive design, primarily using Figma, Adobe XD, and Sketch, and I’m also building my skills in front-end development with React (Next.js).{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        I’m always eager to explore new tools and trends, as I believe there’s always something new to learn in design.</span>  Outside of design, you’ll often find me trying out new recipes, catching up on the latest in film, or exploring different art styles for inspiration. <span className="underline"> I’m also</span>  learning guitar, diving into history and philosophy, and expanding my perspectives along the way. I'm excited to find a role where I can bring my creativity and problem-solving skills to a collaborative team.{" "}
        <span className="font-medium"> </span>  
      </p>

     
    </motion.section>
  );
}
