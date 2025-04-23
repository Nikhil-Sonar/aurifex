import React from 'react'
import "./teckstack.css"
import Image from 'next/image';

const teckstack = () => {
  return (
    <section className="our-tech-stack">
      <div className="tech-stack-heading">
        <h2>Our Tech Stack</h2>
        <div className="tech-stack-para">
          <p> Connect your tools, connect yourteams. With over 100 apps already available in <br/> our directory, your teams&apos;s favourite tools are just a click away.</p>
        </div>
      </div>

      <div className="tech-stack-contents">
        <div className="tech-stack-content">
           <Image src="/python.svg" alt="Python Logo" />
          <p className="tech-name">Python</p>
          <div className="tech-desc">
            <p>
              Work faster and smarter by integrating directly with Slack, right in the app.
            </p>
          </div>
        </div>

        <div className="tech-stack-content">
           <Image src="/javascript.svg" alt="Python Logo" />
          <p className="tech-name">Python</p>
          <div className="tech-desc">
            <p>
              Work faster and smarter by integrating directly with Slack, right in the app.
            </p>
          </div>
        </div>

        <div className="tech-stack-content">
           <Image src="/react js.svg" alt="Python Logo" />
          <p className="tech-name">React JS</p>
          <div className="tech-desc">
            <p> Work faster and smarter by integrating directly with Slack, right in the app.</p>
          </div>
        </div>

        <div className="tech-stack-content">
           <Image src="/figma.svg" alt="Python Logo" />
          <p className="tech-name">Figma</p>
          <div className="tech-desc">
            <p> Work faster and smarter by integrating directly with Slack, right in the app.</p>
          </div>
        </div>

        <div className="tech-stack-content">
           <Image src="/jira.svg" alt="Python Logo" />
          <p className="tech-name">Jira</p>
          <div className="tech-desc">
            <p> Work faster and smarter by integrating directly with Slack, right in the app.</p>
          </div>
        </div>
        <div className="tech-stack-content">
           <Image src="/flutter.svg" alt="Python Logo" />
          <p className="tech-name">Flutter</p>
          <div className="tech-desc">
            <p> Work faster and smarter by integrating directly with Slack, right in the app.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default teckstack;