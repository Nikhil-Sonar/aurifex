'use client';
import React from 'react'
import { motion } from 'framer-motion';
import "./teckstack.css"
import Image from 'next/image';

const teckstack = () => {

  const teckStackData = [
    {
      techName: "Python",
      image: "/python.svg",
      discription: "High-level, versatile language great for web, data science, automation, and scripting.",
    },
    {
      techName: "JavaScript",
      image: "/javascript.svg",
      discription: "Core web language for interactive websites, supported by all major browsers.",
    },
    {
      techName: "React JS",
      image: "/react js.svg",
      discription: "JavaScript library for building dynamic user interfaces using reusable components..",
    },
    {
      techName: "Figma",
      image: "/figma.svg",
      discription: "Cloud-based design tool for UI/UX, enabling real-time collaboration and prototyping.",
    },
    {
      techName: "Java",
      image: "/java_logo.svg",
      discription: "Object-oriented, cross-platform language widely used in enterprise, Android, and backend development.",
    },
    {
      techName: "Flutter",
      image: "/flutterrr.svg",
      discription: "Work faster and smarter by integrating directly with Dropbox, right in the app interface.",
    },
    {
      techName: "TypeScript",
      image: "/typescript.svg",
      discription: "Superset of JavaScript adding static types, improving code quality and maintainability.",
    },
    {
      techName: "Next Js",
      image: "/next_Js_logo.svg",
      discription: "React framework with server-side rendering, API routes, and static site generation..",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 2, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}>
    <section className="our-tech-stack">
      <div className="tech-stack-heading">
        <h2>Our Tech Stack</h2>
        <div className="tech-stack-para">
          <p> Connect your tools, connect yourteams. With over 100 apps already available in <br/> our directory, your teams&apos;s favourite tools are just a click away.</p>
        </div>
      </div>

      <div className="tech-stack-contents">
        {
            teckStackData.map((item, index )=> {
              return (
                <div key={index} className="tech-stack-content">
                  <Image width={68} height={68} src={item.image} alt="Python Logo" />
                  <p className="tech-name">{item.techName}</p>
                  <div className="tech-desc">
                    <p>{item.discription}</p>
                  </div>
                </div>
              )
            }) 
        }
        
      </div>
    </section>
    </motion.div>
  )
}

export default teckstack;