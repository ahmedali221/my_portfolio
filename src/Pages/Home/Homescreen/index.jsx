import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
import Education from "../Education";
import Internships from "../Internships";
import Experience from "../Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Education />
      <Internships />
      <Experience />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
