import React from 'react'
import "./footer.css"
import Image from 'next/image'

const footerComp = () => {
  return (
    <footer>
    <div className="social-icons">
      <a href="https://linkedin.com" target="_blank" title="LinkedIn">
         <Image src="/linkedinIcon.svg" alt="LinkedIn"/>
      </a>
      <a href="https://facebook.com" target="_blank" title="Facebook">
         <Image src="/fb.png" alt="Facebook"/>
      </a>
      <a href="https://github.com" target="_blank" title="GitHub">
         <Image src="/github.png" alt="GitHub"/>
      </a>
      <a href="https://dribbble.com" target="_blank" title="Dribbble">
         <Image src="/dribble.png" alt="Dribbble"/>
      </a>
    </div>

    <div className="brand">
      <div className="logo-box">
         <Image src="/aurifex.png" alt="Aurifex Logo"/>
      </div>
      <div className="brand-name">Aurifex</div>
    </div>
    <div className="copyright">© 2021 Aurifex. All rights reserved.</div>
  </footer>
  )
}

export default footerComp