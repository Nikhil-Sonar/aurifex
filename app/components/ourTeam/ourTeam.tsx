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
                        <Image src="/PortfolioMockup.svg" width={580} height={537} alt="code image" />
                    </div>
                    <div className="our-team-cards-four"> <Image src="/editIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>UX UI Design </strong></p>
                        <p className="our-team-cards-one-para">Intuitive and user-centric UX/UI design that enhances engagement and drives conversions. We craft seamless digital experiences backed by research and testing.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>User Research & Strategy – Understanding your audience to create data-driven, user-friendly experiences.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Wireframing & Prototyping – Visualizing ideas with interactive prototypes before development.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Usability Testing & Iteration – Refining designs based on real user feedback for optimal performance.</p></li>
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
                        <Image src="/codeImage.svg" width={580} height={564} alt="code image" />
                    </div>
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>Mobile-App Development</strong></p>
                        <p className="our-team-cards-one-para">End-to-end mobile app solutions engineered for performance, scalability, and native feel. From UI finesse to backend stability, we craft seamless, high-quality mobile experiences.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Seamless User Experience – Ensure smooth navigation and intuitive interfaces that keep users engaged from first tap to final action.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Secure Authentication – Implement login via email, OTP, or social platforms with token-based security and encryption.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>In-App Payment Integration – Securely handle purchases or subscriptions using Stripe, Razorpay, Apple Pay, or Google Pay.</p></li>
                        </ul>
                    </div>
                    {/* add */}
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>AI ML Building</strong></p>
                        <p className="our-team-cards-one-para">AI-driven systems tailored to optimize operations, enhance decision-making, and unlock predictive insights. From model training to real-time deployment, we deliver intelligent solutions with precision and scalability.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>
                                Smart Automation – Streamline workflows and repetitive tasks using intelligent models that learn and adapt over time.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>
                                Predictive Analytics – Leverage historical data to forecast trends, customer behavior, and operational outcomes with accuracy.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p> Custom Model Development – Build and deploy machine learning models tailored to your specific business needs classification, recommendation, NLP, or vision.</p></li>
                        </ul>
                    </div>
                    <div className="our-team-cards-two">
                        <Image src="/ai-chatbot.webp" width={580} height={564} alt="code image" />
                    </div>  
                    <div className="our-team-cards-two">
                        <Image src="/devops-img.jpg" width={580} height={564} alt="code image" />
                    </div> 
                    <div className="our-team-cards-one">
                        <Image src="/codeIcon.svg" width={48} height={48} alt="code tag icon" />
                        <p className="our-team-cards-one-heading"><strong>DevOps & Cloud Infrastructure</strong></p>
                        <p className="our-team-cards-one-para">Reliable, scalable, and secure infrastructure solutions designed to streamline deployment, enhance uptime, and support continuous delivery. From CI/CD pipelines to cloud-native architecture, we ensure performance and resilience at scale.</p>
                        <ul className="our-team-cards-one-list">
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p> Automated CI/CD Pipelines – Accelerate development with continuous integration and delivery setups using tools like Jenkins, GitHub Actions, or GitLab CI.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Cloud Deployment & Scaling – Launch and manage apps on AWS, Azure, or GCP with autoscaling, load balancing, and container orchestration via Docker & Kubernetes.</p></li>
                            <li> <Image src="/checkCircle.svg" width={28} height={28} alt="check circle icon" /><p>Infrastructure as Code (IaC) – Maintain consistency and speed using tools like Terraform or AWS CloudFormation for automated infrastructure provisioning.</p></li>
                        </ul>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default ourTeamComp;