import React from 'react';
import Link from 'next/link';
import "./header.css";
import Image from 'next/image';

const headerComp = () => {
    return (
        <header>
            <ul className='brand-card'>
                <Link href={`/`} className='brand-card-icon'>
                     <Image className='brand-card-logo' src="/aurifexLogo.svg" alt="" />
                    <li className='brand-card-name'>Aurifex</li>
                </Link>
            </ul>
            <ul className="nav-route">
                <Link href={`/`}><li>Services</li></Link>
                <Link href={`/`} ><li>Projects</li></Link>
                <Link href={`/`} ><li>About US</li></Link>
                <Link href={`/`} ><li>Team</li></Link>
            </ul>
            <ul className='brand-contact'>
            <li className="resume-card"><Link href={`/contact`}><button className='contact-btn'>Contact Us</button></Link></li>
            </ul>
        </header>
    )
}

export default headerComp