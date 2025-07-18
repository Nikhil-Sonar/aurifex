import HeaderComp from "../components/header/header";
import AboutUsForm from "../components/about-us-form/about-us-form";
import FooterComp from "../components/footer/footer";
// import Image from 'next/image';

export default function contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <HeaderComp />
        <AboutUsForm />
        <FooterComp />
      </main>
    </div>
  );
}