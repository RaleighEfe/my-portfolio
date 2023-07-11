import Header from "../components/atoms/atoms/Header";
import SectionLayout from "../components/atoms/organisms/SectionLayout";
import Hero from "../components/atoms/organisms/Hero";
import AboutMe from "../components/atoms/organisms/AboutMe";
import Project from "../components/atoms/organisms/Project";
import Contact from "../components/atoms/organisms/Contact";
import Profile from "../components/atoms/atoms/Profile";
import Footer from "../components/atoms/organisms/Footer";
import CardSlider from "../components/atoms/atoms/Carousel";

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Project />
      {/* <CardSlider /> */}
      <Contact />
      <Footer />
    </>
  );
};
export default index;
