'use client'
import React from 'react';
import Link from 'next/link';
import "./banner.css"

const bannerComp = () => {
    return (
        <section className='banner'>
            {/* <div className="banner-background">
                <div className="gridBackground">
                </div>
            </div> */}
            <div className="banner-background">
                <div className="tiles-grid">
                    {[...Array(600)].map((_, i) => (
                        <div className="tile" key={i}></div>
                    ))}
                </div>
            </div>
            <div className="banner-text">
                <div className="banner-card-one">
                    <video autoPlay loop muted playsInline className='banner-card-one-video'>
                        <source src='/videos/liquid-effect.webm' />
                    </video>
                </div>
                <div className="banner-card-two">
                    <h1>Lets build digital <span> Product</span> together</h1>
                    <p>From idea to launch, we craft high-performance digital products for startups and businesses. Whether you need a sleek mobile app, a powerful web platform, or a scalable SaaS solution, we’ve got you covered</p>
                </div>
                <div className="banner-card-three">
                    <video autoPlay loop muted playsInline className='banner-card-three-video'>
                        <source src='/videos/liquid-effect.webm' />
                    </video>
                </div>
                <video autoPlay loop muted playsInline className='banner-plus'>
                    <source src='/videos/liquid-effect.webm' />
                </video>
            </div>
            <div className='form-btn'><Link href={`/contact`}><button className='contact-btn'>Contact Us</button></Link></div>
        </section>
    )
}

export default bannerComp