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
    { id: 1, title: "Pestmed India", year: "", card_view_title: "Pestmed India", image: "/earth-icon.png", description: "With 50 years of experience, we specialize in Integrated Pest Management and the control of all household pests, including ants, bed bugs, termites, rodents, and more. Our seasoned team—comprising skilled operations, customer care, and technical experts—works together to deliver safe, efficient, and customized pest control solutions. We focus on understanding our clients' needs and applying our expertise to meet them effectively." },

    { id: 2, title: "Started CareerWale Product", year: "", card_view_title: "Careerwale", image: "/boat-icon.png", description: "At CareerWale, we turn confusion into clarity for students and parents. With advanced assessments and expert guidance, we help every child find career path that matches their true potential" },

    { id: 3, title: "Started Manufacturing Drone For Cleaning Infra & Agriculture ", year: "", card_view_title: "Drone Manufacturing", image: "/butterfly-icon.png", description: "We’ve started manufacturing advanced drones specifically designed for infrastructure cleaning and agricultural applications. These drones enhance efficiency, reduce manual labor, and provide innovative solutions for maintaining large surfaces and improving farming practices with precision and smart automation." },

    { id: 5, title: "SCCA", year: "", card_view_title: "SCCA", image: "/rocket-icon.png", description: "Revolutionising pest control product sales, our eCommerce app enables SCCA to seamlessly manage over 2000 custom[ers—previously tracked manually via Excel sheets. The platform integrates full-scale CRM and ERP capabilities, offering real-time access to order history, product catalogs with high-resolution images, payment tracking, customer chats, and personalized support—all in one unified system." },

    { id: 6, title: "Started SSCPS Product", year: "", card_view_title: "SSCPS Product", image: "/leaf-icon.jpg", description: "Designed and developed a website and logo for SSPCS Pest Control, enhancing brand identity and online visibility. The website featured a modern UI/UX, mobile-friendly design, improving user engagement and accessibility. As a result, the company saw a 40% increase in revenue through better customer acquisition and online reach." },

    { id: 7, title: "Aurifex Connect", year: "", card_view_title: "Aurifex Connect", image: "/aurifexLogo.svg", description: "Aurifex is a results-driven digital product studio specializing in crafting exceptional mobile apps, scalable web platforms, and enterprise-grade SaaS solutions. From ideation to deployment, we combine strategic insight, cutting-edge technology, and refined design to deliver high-performance digital products that accelerate growth and create lasting user impact." },
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