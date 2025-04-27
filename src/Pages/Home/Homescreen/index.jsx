import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
import ExtracurricularActivities from "../ExtracurricularActivities";
import CoursesCertificates from "../CoursesCertificates";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <ExtracurricularActivities />
      <CoursesCertificates />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
