'use client';
import React, { useState, useRef } from 'react';
import "./ourJourney.css";
import Modal from "../modal/modal";
import Image from 'next/image';

const OurJourney = () => {
  const refVal = useRef(null);
  const [showCard, setShowCard] = useState("hide");
  const [passData, setPassData] = useState<{ title: string; year: string; image: string } | null>(null);

  const journeyEvent = (message: string, itemVal: { title: string; year: string; image: string }) => {
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
    { id: 1, title: "Renaissance", year: "2021", image: "/logo1.svg" },
    { id: 2, title: "Cl0udWatch", year: "2021", image: "/logo2.svg" },
    { id: 3, title: "Spherule", year: "2021", image: "/logo3.svg" },
    { id: 5, title: "Railspeed", year: "2021", image: "/logo4.svg" },
    { id: 6, title: "Sisyphus", year: "2021", image: "/logo5.svg" },
    { id: 7, title: "Voxel Labs", year: "2021", image: "/logo6.svg" },
  ];

  return (
    <section ref={refVal} className="journey-section">
      <h2 className="journey-title">Our Journey</h2>
      <div className="journey-container">
        {journeyData.map((item, index) => (
          <div key={item.id}
            onClick={() => journeyEvent("show", item)}
            className={`journey-card ${index < 3 ? "top-card" : "top-card bottomCard"}`}>
             <Image  src={item?.image as string} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
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
  )
}

export default OurJourney