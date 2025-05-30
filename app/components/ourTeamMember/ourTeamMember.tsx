'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ourTeamMember.css';
import Image from 'next/image';

const OurTeamMemberComp = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    setAutoplay(inView);
  }, [inView]);

  const sliderSettingsMembers = {
    infinite: true,
    dots: false,
    speed: 1400,
    slidesToShow: 2,
    slidesToScroll: 3,
    autoplay,
    autoplaySpeed: 4000,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  };

  const teamMembers = [
    { name: "Kanhaiya Sonar", image: "/suraj.jpeg", jobTitle: "CEO", discription: "Leads company vision, drives growth, empowers teams, ensures strategic execution." },
    { name: "Pratik Raval", image: "/pratik.jpeg", jobTitle: "Solution Architecture", discription: "Designs scalable systems, aligns tech solutions with business goals effectively." },
    { name: "Bhavik Hirani", image: "/bhavik.jpeg", jobTitle: "Embedded Engineer", discription: "Develops low-level software, interfaces with hardware, ensures real-time performance." },
    { name: "Niraj Gujarati", image: "/niraj.jpeg", jobTitle: "Fullstack Developer", discription: "Builds frontend and backend systems, ensures seamless, end-to-end functionality." },
    { name: "Palak Dave", image: "/palak.jpeg", jobTitle: "Software Developer", discription: "Builds responsive interfaces, enhances user experience, ensures cross-browser compatibility." },
    { name: "Pal Gabani", image: "/pal.jpeg", jobTitle: "Fullstack Developer", discription: "Builds frontend and backend systems, ensures seamless, end-to-end functionality." },
    { name: "Chinmay Bhole", image: "/chinmay.png", jobTitle: "Front-end developer", discription: "Builds responsive interfaces, enhances user experience, ensures cross-browser compatibility." },
    { name: "Vaibhav Patel", image: "/vaibhav.jpeg", jobTitle: "Fullstack Developer", discription: "Builds frontend and backend systems, ensures seamless, end-to-end functionality." },
    { name: "Tejas Shivankar", image: "/tejas.jpg", jobTitle: "Android developer", discription: "Builds Android apps, optimizes performance, ensures smooth mobile user experiences." },
    { name: "Hmang Shah", image: "/hemang.jpeg", jobTitle: "Front-end developer", discription: "Builds responsive interfaces, enhances user experience, ensures cross-browser compatibility." },
    { name: "Vishal kholakiya", image: "/vishal.jpeg", jobTitle: "Software Engineer (backend)", discription: "Develops server-side logic, manages databases, ensures secure, scalable APIs." },
    { name: "Harsh Marne", image: "/HarshMarne.jpg", jobTitle: "Front-end developer", discription: "Builds responsive interfaces, enhances user experience, ensures cross-browser compatibility." }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id='team'
    >
      <section className="our-team-member">
        <div className="our-team-member-heading">
          <h2>Our Team Member</h2>
        </div>
        <div className="our-team-member-cards">
          <Slider key={autoplay ? 'play' : 'pause'} {...sliderSettingsMembers}>
            {teamMembers.map((item, index) => (
              <div className="our-team-member-card" key={index}>
                <Image width={380} height={440} src={item.image} alt={`Team member ${index + 1}`} />
                <div className="our-team-member-card-detail">
                  <p className="our-team-member-common-name"><strong>{item.name}</strong></p>
                  <p className="our-team-member-common-designation">{item.jobTitle}</p>
                  <p className="our-team-member-common-disc">{item.discription}</p>
                  <ul className="our-team-member-social">
                    <li><Image width={24} height={24} src="/twitterIcon.svg" alt="twitter" /></li>
                    <li><Image width={24} height={24} src="/linkedinIcon.svg" alt="linkedin" /></li>
                    <li><Image width={24} height={24} src="/VectorIcon.svg" alt="icon" /></li>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </motion.div>
  );
};

export default OurTeamMemberComp;
