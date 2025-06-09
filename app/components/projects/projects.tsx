'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './projects.css';

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectData = [
    { src: '/Hommile-project-image.png', title: 'Hommlie', type: 'Web app & Mobile App' },
    { src: '/Careerwale-project-image.png', title: 'CareerWale', type: 'Mobile App' },
    { src: '/Furrl-project-image.png', title: 'Furrl', type: 'Mobile App' },
    { src: '/Akshar-decor-project-image.png', title: 'Akshar Decor', type: 'Website' },
    { src: '/Aurifex-Connect-image.png', title: 'Aurifex Connect', type: 'Website' },
    { src: '/project-careerwale.png', title: 'CareerWale', type: 'Website' },
    { src: '/project-img-sccca.png', title: 'SCCA', type: 'Website' },
  

  ];

  

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
  
    let scrollPosition = 0;
    let isAnimating = false;
  
    const getNextSection = (down = true) => {
      const sections = Array.from(document.querySelectorAll('section'));
      const currentIndex = sections.findIndex((sec) => sec.contains(container));
      return down
        ? sections[currentIndex + 1]
        : sections[currentIndex - 1];
    };
  
    const handleWheel = (e: WheelEvent) => {
      if (!container.contains(e.target as Node)) return;
  
      e.preventDefault();
  
      if (isAnimating) return;
      isAnimating = true;
  
      scrollPosition += e.deltaY * 1;
      const maxScroll = container.scrollWidth - window.innerWidth;
      scrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
  
      container.style.transform = `translateX(-${scrollPosition}px)`;

      if (scrollPosition >= maxScroll && e.deltaY > 0) {
        const nextSection = getNextSection(true);
        if (nextSection) {
          setTimeout(() => {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
  
      if (scrollPosition <= 0 && e.deltaY < 0) {
        const prevSection = getNextSection(false);
        if (prevSection) {
          setTimeout(() => {
            prevSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
  
      setTimeout(() => {
        isAnimating = false;
      }, 60);
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 2, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='project'
    >
    <section className="projects">
      <p className='projects-title'>Our Projects</p>
      <div className="horizontal-scroll" ref={scrollRef}>
        {[...projectData, ...projectData].map((project, i) => (
          <div className="projects__slide" key={i}>
            <Image
              src={project.src}
              alt={`${project.title} Project`}
              width={776}
              height={644}
              className="projects__image"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
    </motion.div>
  );
};

export default Projects; 