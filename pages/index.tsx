import Header from "../components/atoms/Header";
import SectionLayout from "../components/organisms/SectionLayout";
import Hero from "../components/organisms/Hero";
import AboutMe from "../components/organisms/AboutMe";
import Project from "../components/organisms/Project";
import Contact from "../components/organisms/Contact";
import Footer from "../components/organisms/Footer";


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
