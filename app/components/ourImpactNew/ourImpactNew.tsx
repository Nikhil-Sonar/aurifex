'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ourImpactNew.css";

const OurImpactNew = () => {
  const [projectCompleted, setProjectCompleted] = useState(0);
  const [returnCompleted, setReturnCompleted] = useState(0);
  const [clientCompleted, setClientCompleted] = useState(0);

  const PROJECT_COUNT = 20;
  const RETURN_COUNT = 200;
  const CLIENT_COUNT = 100;

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (!inView) return;

    let animationId: number;

    const animateCount = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      let count = 0;

      const step = () => {
        count += Math.ceil((target - count) / 20);
        if (count >= target) {
          setter(target);
        } else {
          setter(count);
          animationId = requestAnimationFrame(step);
        }
      };

      step();
    };

    animateCount(PROJECT_COUNT, setProjectCompleted);
    animateCount(RETURN_COUNT, setReturnCompleted);
    animateCount(CLIENT_COUNT, setClientCompleted);

    return () => cancelAnimationFrame(animationId);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <section className="impact-section">
        <div className="impact-section-container">
          <div className="impact-section-heading">
            <h2>Our Impact</h2>
            <p>Everything you need to convert, engage, and retain more users.</p>
          </div>
          <div className="impact-section-stats">
            <div className="impact-section-stats-card">
              <p className="impact-section-stats-value">{projectCompleted}+</p>
              <p className="impact-section-stats-label">Projects Completed</p>
            </div>
            <div className="impact-section-stats-card">
              <p className="impact-section-stats-value">{returnCompleted}%</p>
              <p className="impact-section-stats-label">Return on Investment</p>
            </div>
            <div className="impact-section-stats-card">
              <p className="impact-section-stats-value">{clientCompleted}%</p>
              <p className="impact-section-stats-label">Client Success</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default OurImpactNew;