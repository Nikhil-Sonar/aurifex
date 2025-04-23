'use client';
import React from 'react';
import "./testimonial.css";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Testimonial = () => {
  const sliderSettings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const listData = [
    {
      name: "Hardik Solanki",
      image: "/prem.jpeg",
      jobTitle: "CEO, Careerwale",
      discription: "Working with Aurifex was a game-changer for our Careerwale app. They understood our vision, delivered a sleek and intuitive design, and ensured a smooth user experience. Their team was proactive, communicative, and always ready to go the extra mile. Highly recommend!",
    },
    {
      name: "Prem Rathod",
      image: "/prem.jpeg",
      jobTitle: "CEO, SCCA",
      discription: "Partnering with Aurifex truly elevated our SCCA app. They grasped our goals quickly and crafted a clean, user-friendly design that exceeded our expectations. The collaboration was seamless — their team was responsive, collaborative, and consistently went above and beyond. We’re thrilled with the results and would definitely recommend them!.",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-box">
        <div className="testimonial-heading">
          <p><span className="highlight">What </span>OUR Clients are SAYING...</p>
        </div>

        <div className="testimonial-slider-container">
          <Slider {...sliderSettings}>
            {listData.map((item, index) => (
              <div className="testimonial-slide" key={index}>
                <div className="testimonial-card">
                  <div className='testimonial-card-icon-parent'>
                   <Image src={item.image as string} alt="Client Photo" className="profile-image" />
                  <div className="author author-mobile">
                      <p className="author-name">{item.name}</p>
                      <p className="author-title"><em>{item.jobTitle}</em></p>
                    </div>
                    </div>
                  <div className="testimonial-text">
                    <p className="quote">{item.discription}</p>
                    <div className="author author-desktop">
                      <p className="author-name">{item.name}</p>
                      <p className="author-title"><em>{item.jobTitle}</em></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;