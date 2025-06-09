'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import "./ourTeam.css";

const ourTeamComp = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 2, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id='services'
        >
            <section className="our-team">
                <div className="our-team-heading">
                    <h2>Our Services</h2>
                </div>
                <div className="our-team-cards">
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>Full-Stack Development</strong></p>
                        <p className="our-team-cards-one-para">End-to-end full-stack development solutions tailored for scalability, performance, and seamless user experience. From frontend elegance to backend robustness, we build it all.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Complete Development Cycle – From database design to API integration, we build robust systems.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Performance & Security – Scalable, secure, and high-performing applications with rigorous testing.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Seamless Deployment – CI/CD pipelines for smooth releases and post-launch support.</p></li>
                        </ul>
                    </div>
                    <div className="our-team-cards-two">
                        <Image src="/codeImage.svg" width={580} height={564} alt="code image" />
                    </div>
                    <div className="our-team-cards-three">
                        <Image src="/Ui-ux.jpg" width={580} height={537} alt="code image" />
                    </div>
                    <div className="our-team-cards-four"> <Image src="/editIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>UX-UI Design </strong></p>
                        <p className="our-team-cards-one-para">Delivering intuitive, tested UI/UX that increases user satisfaction and conversion rates.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>User Research & Strategy – Understand users and craft data-driven, user-friendly digital experiences.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Wireframing & Prototyping – Understand users and craft data-driven, user-friendly digital experiences.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Usability Testing & Iteration – User feedback drives continuous design refinement.
                            </p></li>
                        </ul>
                    </div>
                    <div className="our-team-cards-five"> <Image src="/saasIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>Saas product development </strong></p>
                        <p className="our-team-cards-one-para">End-to-end SaaS product development, from architecture to deployment, ensuring scalability, security, and seamless user experience.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Full-Cycle Development – From ideation to launch, we build robust SaaS solutions.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Scalable & Secure – Cloud-native architecture optimized for performance and data protection.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Continuous Improvement – CI/CD pipelines, monitoring, and updates for long-term success.</p></li>
                        </ul>
                    </div>
                    <div className="our-team-cards-six"> <Image src="/dashboardImage.svg" width={580} height={530} alt="dashboard image" /></div>
                    <div className="our-team-cards-two">
                        <Image src="/mobile-app-development.jpg" width={580} height={564} alt="code image" />
                    </div>
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>Mobile-App Development</strong></p>
                        <p className="our-team-cards-one-para">End-to-end mobile app development with native experience, responsive polished UI, and backend strength.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Seamless User Experience – Deliver intuitive interfaces and smooth navigation to  users.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Secure Authentication – Support email, OTP, social logins with token-based encrypted security.
                            </p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>In-App Payment Integration – Handle purchases securely via Stripe, Razorpay, Apple, Google Pay.
                            </p></li>
                        </ul>
                    </div>
                    {/* add */}
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>AI ML Building</strong></p>
                        <p className="our-team-cards-one-para">We build AI systems to streamline operations, enhance decisions, and deliver predictive insights.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>
                                Smart Automation – Automate tasks with adaptive, continuously learning AI models.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>
                                Predictive Analytics – Analyze historical data to forecast behavior and business outcomes.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Custom Model Development – Build custom AI models for NLP, vision, and recommendations.</p></li>
                        </ul>
                    </div>
                    <div className="our-team-cards-two">
                        <Image src="/ai-solutions.png" width={580} height={564} alt="code image" />
                    </div>  
                    <div className="our-team-cards-two">
                        <Image src="/devops-img.jpg" width={580} height={564} alt="code image" />
                    </div> 
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>DevOps & Cloud Infrastructure</strong></p>
                        <p className="our-team-cards-one-para">Secure, scalable infrastructure powered by cloud-native CI/CD deployment pipelines.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Automated CI/CD Pipelines – Boost CI/CD workflows with Jenkins, GitHub, GitLab</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Cloud Deployment & Scaling – Scale efficiently with AWS, Azure, GCP, orchestration.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Infrastructure as Code (IaC) – Streamline infrastructure using Terraform, CloudFormation.</p></li>
                        </ul>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default ourTeamComp;