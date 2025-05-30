'use client';
import React from 'react'
import "./footer.css"
import { motion } from 'framer-motion';
import Image from 'next/image'

const footerComp = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 150 }}
         whileInView={{ opacity: 2, y: 0 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
      >
         <footer>
            <div className="social-icons">
               <a href="https://linkedin.com" target="_blank" title="LinkedIn">
                  <Image width={24} height={24} src="/linkedinIcon.svg" alt="LinkedIn" />
               </a>
               <a href="https://facebook.com" target="_blank" title="Facebook">
                  <Image width={24} height={24} src="/fb.png" alt="Facebook" />
               </a>
               <a href="https://github.com" target="_blank" title="GitHub">
                  <Image width={24} height={24} src="/github.png" alt="GitHub" />
               </a>
               <a href="https://dribbble.com" target="_blank" title="Dribbble">
                  <Image width={24} height={24} src="/dribble.png" alt="Dribbble" />
               </a>
            </div>

            <div className="brand">
               <div className="logo-box">
                  <Image width={24} height={24} src="/aurifex.png" alt="Aurifex Logo" />
               </div>
               <div className="brand-name">Aurifex</div>
            </div>
            <div className="copyright">© 2021 Aurifex. All rights reserved.</div>
         </footer>
      </motion.div>
   )
}

export default footerComp