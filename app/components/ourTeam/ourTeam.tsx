import Image from "next/image";
import "./ourTeam.css";

const ourTeamComp = () => {
    return (
        <section className="our-team">
            <div className="our-team-heading">
                <h2>Our Team</h2>
            </div>
            <div className="our-team-cards">
                <div className="our-team-cards-one">
                     <Image src="/codeIcon.svg" alt="code tag icon" />
                    <p className="our-team-cards-one-heading"><strong>Full-Stack Development</strong></p>
                    <p className="our-team-cards-one-para">End-to-end full-stack development solutions tailored for scalability, performance, and seamless user experience. From frontend elegance to backend robustness, we build it all.</p>
                    <ul className="our-team-cards-one-list">
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Complete Development Cycle – From database design to API integration, we build robust systems.</p></li>
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Performance & Security – Scalable, secure, and high-performing applications with rigorous testing.</p></li>
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Seamless Deployment – CI/CD pipelines for smooth releases and post-launch support.</p></li>
                    </ul>
                </div>
                <div className="our-team-cards-two">
                     <Image src="/codeImage.svg" alt="code image" />
                </div>
                <div className="our-team-cards-three">
                     <Image src="/PortfolioMockup.svg" alt="code image" />
                </div>
                <div className="our-team-cards-four"> <Image src="/editIcon.svg" alt="code tag icon" />
                    <p className="our-team-cards-one-heading"><strong>UX UI Design </strong></p>
                    <p className="our-team-cards-one-para">Intuitive and user-centric UX/UI design that enhances engagement and drives conversions. We craft seamless digital experiences backed by research and testing.</p>
                    <ul className="our-team-cards-one-list">
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>User Research & Strategy – Understanding your audience to create data-driven, user-friendly experiences.</p></li>
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Wireframing & Prototyping – Visualizing ideas with interactive prototypes before development.</p></li>
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Usability Testing & Iteration – Refining designs based on real user feedback for optimal performance.</p></li>
                    </ul>
                </div>
                <div className="our-team-cards-five"> <Image src="/saasIcon.svg" alt="code tag icon" />
                    <p className="our-team-cards-one-heading"><strong>Saas product development </strong></p>
                    <p className="our-team-cards-one-para">End-to-end SaaS product development, from architecture to deployment, ensuring scalability, security, and seamless user experience.</p>
                    <ul className="our-team-cards-one-list">
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Full-Cycle Development – From ideation to launch, we build robust SaaS solutions.</p></li>
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Scalable & Secure – Cloud-native architecture optimized for performance and data protection.</p></li>
                        <li> <Image src="/checkCircle.svg" alt="check circle icon"/><p>Continuous Improvement – CI/CD pipelines, monitoring, and updates for long-term success.</p></li>
                    </ul></div>
                <div className="our-team-cards-six"> <Image src="/dashboardImage.svg" alt="dashboard image" /></div>
            </div>
        </section>
    )
}

export default ourTeamComp;