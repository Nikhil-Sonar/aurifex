'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "./ourJourney.css";
import Modal from "../modal/modal";
import Image from 'next/image';

const OurJourney = () => {
  const refVal = useRef(null);
  const [showCard, setShowCard] = useState("hide");
  const [passData, setPassData] = useState<{ title: string; year: string; image: string; card_view_title: string; description: string } | null>(null);

  const journeyEvent = (message: string, itemVal: { title: string; year: string; image: string; card_view_title: string; description: string }) => {
    if (message == "show") {
      setShowCard("show");
      setPassData(itemVal);
      document.body.style.overflow = "hidden";
    } else {
      setShowCard("hide");
      setPassData(null);
      document.body.style.overflow = "hidden auto";
    }
  }

  const journeyData = [
    { id: 1, title: "Automatic Concrete Brick Machine", card_view_title: "Brick Machine", year: "2018", image: "/earth-icon.png", description: "Developed an Automatic Concrete Brick Making Machine. Completed in semi-automatic and fully automatic phases, with a capacity of 500-1000 blocks per hour Embedded C on LPC2129 ARM microcontroller with CAN network integration." },
    { id: 2, title: "Started CareerWale Product", card_view_title: "Careerwale", year: "2024", image: "/boat-icon.png", description: "At CareerWale, we turn confusion into clarity for students and parents. With advanced assessments and expert guidance, we help every child find career path that matches their true potential" },
    { id: 3, title: "Started Manufacturing Drone For Cleaning Infra & Agriculture ", card_view_title: "Drone Manufacturing", year: "2024", image: "/butterfly-icon.png", description: "We’ve started manufacturing advanced drones specifically designed for infrastructure cleaning and agricultural applications. These drones enhance efficiency, reduce manual labor, and provide innovative solutions for maintaining large surfaces and improving farming practices with precision and smart automation." },
    { id: 5, title: "Restaurant Serving Robot ECO System", card_view_title: "Serving Machine", year: "2025", image: "/rocket-icon.png", description: "Developed a Restaurant Serving Robot Ecosystem with AI-powered autonomous robots for efficient food delivery using LiDAR, sensors, and AI-driven path planning. Integrated with POS, kitchen order management, and mobile apps, it enhances service efficiency and customer experience." },
    { id: 6, title: "Started SSCPS Product", card_view_title: "SSCPS Product", year: "2025", image: "/leaf-icon.jpg", description: "Designed and developed a website and logo for SSPCS Pest Control, enhancing brand identity and online visibility. The website featured a modern UI/UX, mobile-friendly design, improving user engagement and accessibility. As a result, the company saw a 40% increase in revenue through better customer acquisition and online reach." },
    { id: 7, title: "Aurifex Connect", card_view_title: "Aurifex Connect", year: "2025", image: "/aurifexLogo.svg", description: "Aurifex is a results-driven digital product studio specializing in crafting exceptional mobile apps, scalable web platforms, and enterprise-grade SaaS solutions. From ideation to deployment, we combine strategic insight, cutting-edge technology, and refined design to deliver high-performance digital products that accelerate growth and create lasting user impact." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 2, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='about'
    >
      <section ref={refVal} className="journey-section">
        <h2 className="journey-title">Our Journey</h2>
        <div className="journey-container">
          {journeyData?.map((item, index) => (
            <div key={item.id}
              onClick={() => journeyEvent("show", item)}
              className={`journey-card ${index < 3 ? "top-card" : "top-card bottomCard"}`}>
              <Image width={32} height={32} src={item?.image as string} alt={item.card_view_title} />
              <div>
                <h3>{item.card_view_title}</h3>
                <p>{item.year}</p>
              </div>
            </div>
          ))}

          <div className="timeline">
            {[...Array(6)].map((_, i) => (
              <div className="dot" key={i}></div>
            ))}
          </div>
        </div>
        <Modal showCard={showCard} passData={passData} onSendData={journeyEvent} />
      </section>
    </motion.div>
  )
}

export default OurJourney