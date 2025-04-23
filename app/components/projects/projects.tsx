import React from 'react'
import "./projects.css"
import Image from 'next/image'

const projects = () => {
  return (
    <div className="Projects-container">
      <div className='Projects-container-heading'>
      <div className="section-heading">Our Projects</div>
      <div className="sub-heading">Projects</div>
      <div className="project-title">Furrl</div>
      <div className="tags">
        <span className="tag design">Design</span>
        <span className="tag research">Research</span>
        <span className="tag presentation">Presentation</span>
      </div>
      </div>
      <div className="project-image-wrapper">
         <Image src="/FerlImg.png" alt="Furrl Project Showcase" className="project-image" />
      </div>
  
    </div>
  )
}

export default projects