import HeaderComp from "./components/header/header";
import BannerComp from "./components/banner/Banner";
import OurTeamComp from "./components/ourTeam/ourTeam";
import OurImpactComp from "./components/ourImpact/ourImpact";
import OurTeamMemberComp from "./components/ourTeamMember/ourTeamMember";
import Testimonial from "./components/testimonial/testimonial";
import Projects from "./components/projects/projects";
import OurImpactNew from "./components/ourImpactNew/ourImpactNew";
import Teckstack from "./components/teckstack/teckstack";
import OurJourney from "./components/ourJourney/ourJourney";
import FooterComp from "./components/footer/footer";
// import Modal from "./components/modal/modal"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
       <HeaderComp/>
       <BannerComp/>
       <OurTeamComp/>
       <Projects/>
       <OurImpactComp/>
       <OurImpactNew/>
       <Teckstack/>
       <OurTeamMemberComp/>
       <Testimonial/>
       <OurJourney/>
       <FooterComp/>
       {/* <Modal/> */}
      </main>
    </div>
  );
}