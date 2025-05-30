'use client'
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import "./header.css";
import Image from 'next/image';

const HeaderComp = () => {
    const [mobileview, setMobileview] = useState<string>();
    const lastScrolledSectionRef = useRef<string | null>(null);
    const lastScrollTimeRef = useRef<number>(0);

    const openNav = () => {
        const sideNav = document.getElementById("mySidenav");
        if (sideNav) {
            sideNav.style.width = '100%';
            document.body.style.overflow = "hidden";
        }
        setMobileview("sidenav-bar");
    }

    const closeNav = () => {
        const sideNav = document.getElementById("mySidenav");
        if (sideNav) {
            sideNav.style.width = '0px';
            document.body.style.overflow = "hidden auto";
        }
        setMobileview("empty");
    }

    const scrollToSection = (section: string) => {
        closeNav();
        const now = Date.now();
        if (lastScrolledSectionRef.current === section && now - lastScrollTimeRef.current < 1000) {
          return;
        }
      
        const sections: Record<string, HTMLElement | null> = {
          services: document.getElementById('services'),
          projects: document.getElementById('project'),
          about: document.getElementById('about'),
          team: document.getElementById('team'),
        };
      
        const target = sections[section];
        const headerOffset = 80;
      
        if (target) {
          window.scrollBy(0, 1);
      
          setTimeout(() => {
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
      
            lastScrolledSectionRef.current = section;
            lastScrollTimeRef.current = Date.now();
          }, 15);
        }
      };

    return (
        <header>
            <ul className='brand-card'>
                <Link href={`/`} className='brand-card-icon'>
                    <Image width={30} height={30} className='brand-card-logo' src="/aurifexLogo.svg" alt="Aurifex" />
                    <li className='brand-card-name'>Aurifex</li>
                </Link>
            </ul>
            <ul className="nav-route">
                <Link href={"#"} onClick={() => scrollToSection("services")} className='hover-underline'><li>Services</li></Link>
                <Link href={"#"} onClick={() => scrollToSection("projects")} className='hover-underline'><li>Projects</li></Link>
                <Link href={"#"} onClick={() => scrollToSection("about")} className='hover-underline'><li>About Us</li></Link>
                <Link href={"#"} onClick={() => scrollToSection("team")} className='hover-underline'><li>Team</li></Link>
            </ul>
            <ul className='brand-contact'>
                <li className="resume-card"><Link href={`/contact`}><button className='contact-btn'>Contact Us</button></Link></li>
            </ul>
            <div id="mySidenav" className={`sidenav sidenav-bar ${mobileview}`}>
                <a className={`closebtn`} onClick={closeNav} >x</a>
                <Link href={`#`} onClick={() => scrollToSection("team")}><li>Team</li></Link>
                <Link href={`#`} onClick={() => scrollToSection("services")}><li>Services</li></Link>
                <Link href={`#`} onClick={() => scrollToSection("projects")}><li>Projects</li></Link>
                <Link href={`#`} onClick={() => scrollToSection("about")}><li>About Us</li></Link>
            </div>
            <div className="header-right" onClick={openNav}>
                <Image width={30} height={30} src="/menu.svg" alt='bread crum image' />
            </div>
        </header>
    )
}

export default HeaderComp