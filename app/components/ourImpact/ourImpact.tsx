'use client';
import React from 'react'
import { motion } from 'framer-motion';
import "./ourImpact.css";
import Image from 'next/image';

const ourImpactComp = () => {

    const imageData = [
        '/gandhi-investmall.png',
        '/hbr-tech.png',
        '/careerwale.png',
        '/akshar-decore.png',
        '/scca-logo.png',
        '/sspc-logo.png',
        '/gandhi-investmall.png',
        '/hbr-tech.png',
        '/careerwale.png',
        '/akshar-decore.png',
        '/scca-logo.png',
        '/sspc-logo.png',
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 2, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <section className='our-impact'>
                <div className="our-impact-heading">
                    <h2>Our Clients</h2>
                </div>
                <div className="our-impact-logos">
                    {
                       imageData.map((item, index) => {
                          return <Image key={index} width={362} height={100} src={item} alt='company logo' />
                       })   
                    }
                </div>
            </section>
        </motion.div>
    )
}

export default ourImpactComp