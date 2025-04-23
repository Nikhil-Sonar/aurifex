import React from 'react'
import "./about-us-form.css"
import Image from 'next/image'

const AboutUsForm = () => {
  return (
    <div className="contact-wrapper">
    <div className="contact-form">
      <h2>Get in touch</h2>
      <p>Our friendly team would love to hear from you.</p>
  
      <form>
        <div className="input-group">
          <div className="input-field">
            <label form="first-name">First name*</label>
            <input type="text" id="first-name" placeholder="First name" required />
          </div>
          <div className="input-field">
            <label form="last-name">Last name*</label>
            <input type="text" id="last-name" placeholder="Last name" required />
          </div>
        </div>
  
        <div className="input-field">
          <label form="email">Email*</label>
          <input type="email" id="email" placeholder="you@company.com" required />
        </div>
  
        <div className="input-field">
          <label form="phone">Phone number</label>
          <div className="phone-wrapper">
            <select>
              <option value="IN">IN</option>
            </select>
            <input type="tel" id="phone" placeholder="+91 00000 88888" />
          </div>
        </div>
  
        <div className="input-field">
          <label form="message">Message*</label>
          <textarea id="message" placeholder="Leave us a message..." required></textarea>
        </div>
  
        <div className="checkbox-wrapper">
          <input type="checkbox" id="agree" />
          <label form="agree" className='checkbox-wrapper-label'>You agree to our friendly <a href="#">privacy policy</a>.</label>
        </div>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  
    <div className="contact-image">
      <Image src="/Image.png" alt="girl image" />
    </div>
  </div>
  )
}

export default AboutUsForm