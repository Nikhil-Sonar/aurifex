import React from 'react'
import "./ourImpact.css";
import Image from 'next/image';

const ourImpactComp = () => {
    return (
        <section className='our-impact'>
            <div className="our-impact-heading">
                <h2>Our Impact</h2>
            </div>
            <div className="our-impact-logos">
                 <Image src='/companyLogoOne.svg' alt='company logo' />
                 <Image src='/companyLogoTwo.svg' alt='company logo' />
                 <Image src='/companyLogoThree.svg' alt='company logo' />
                 <Image src='/companyLogoFour.svg' alt='company logo' />
                 <Image src="/companyLogoOne.svg" alt="company logo" />
                 <Image src="/companyLogoTwo.svg" alt="company logo" />
                 <Image src="/companyLogoThree.svg" alt="company logo" />
                 <Image src="/companyLogoFour.svg" alt="company logo" />
            </div>
        </section>
    )
}

export default ourImpactComp