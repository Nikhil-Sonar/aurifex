'use client'
import React, { useState, useEffect } from 'react';
import "./ourImpactNew.css";

const OurImpactNew = () => {
  const [ProjectCompleted, setProjectCompleted] = useState(0);
  const [ReturnCompleted, setReturnCompleted] = useState(0);
  const [ClientCompleted, setClientCompleted] = useState(0);
  const ProjectCount = 100;
  const ReturnCount = 200;
  const ClientCount = 400;

  useEffect(() => {
    let animationFrameIdProject: number;
    let animationFrameIdReturn: number;
    let animationFrameIdClient: number;

    const ProjectUpdateCount = () => {
      const step = Math.ceil((ProjectCount - ProjectCompleted) / 450); // Adjust the step size as needed
      if (ProjectCompleted < ProjectCount) {
        setProjectCompleted((prevCount) => prevCount + step);
        animationFrameIdProject = requestAnimationFrame(ProjectUpdateCount);
      }
    };

    const ReturnUpdateCount = () => {
      const step = Math.ceil((ReturnCount - ReturnCompleted) / 450); // Adjust the step size as needed
      if (ReturnCompleted <= ReturnCount) {
        setReturnCompleted((prevCount) => prevCount + step);
        animationFrameIdReturn = requestAnimationFrame(ReturnUpdateCount);
      }
    };

    const ClientUpdateCount = () => {
      const step = Math.ceil((ClientCount - ClientCompleted) / 450); // Adjust the step size as needed
      if (ClientCompleted <= ClientCount) {
        setClientCompleted((prevCount) => prevCount + step);
        animationFrameIdClient = requestAnimationFrame(ClientUpdateCount);
      }
    };

    animationFrameIdProject = requestAnimationFrame(ProjectUpdateCount);
    animationFrameIdReturn = requestAnimationFrame(ReturnUpdateCount);
    animationFrameIdClient = requestAnimationFrame(ClientUpdateCount);

    return () => {
      cancelAnimationFrame(animationFrameIdProject);
      cancelAnimationFrame(animationFrameIdReturn);
      cancelAnimationFrame(animationFrameIdClient);
    };
  }, [ProjectCompleted, ReturnCompleted, ClientCompleted, ProjectCount, ReturnCount, ClientCount]); // Add missing dependencies

  return (
    <section className="impact-section">
      <div className="impact-section-container">
        <div className="impact-section-heading">
          <h2>Our Impact New</h2>
          <p>Everything you need to convert, engage, and retain more users.</p>
        </div>
        <div className="impact-section-stats">
          <div className="impact-section-stats-card">
            <p className="impact-section-stats-value">{ProjectCompleted}+</p>
            <p className="impact-section-stats-label">Projects Completed</p>
          </div>
          <div className="impact-section-stats-card">
            <p className="impact-section-stats-value">{ReturnCompleted}%</p>
            <p className="impact-section-stats-label">Return on Investment</p>
          </div>
          <div className="impact-section-stats-card">
            <p className="impact-section-stats-value">{ClientCompleted}%</p>
            <p className="impact-section-stats-label">Client Success</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactNew;
