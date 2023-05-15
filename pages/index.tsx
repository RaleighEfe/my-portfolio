import Header from "../components/atoms/atoms/Header";
import SectionLayout from "../components/atoms/organisms/SectionLayout";
import Hero from "../components/atoms/organisms/Hero";
import AboutMe from "../components/atoms/organisms/AboutMe";
import Project from "../components/atoms/organisms/Project";
import Contact from "../components/atoms/organisms/Contact";
import Profile from "../components/atoms/atoms/Profile";

const index = () => {
  return (
    <>
      <Header />
      <div className="grid gap-3 grid-cols-2 h-[100vh]">
        <div className="relative">
          <Profile />
        </div>
        {/* <Hero /> */}
        {/* <Contact /> */}
        {/* <Project /> */}
        <AboutMe />
      </div>
    </>
  );
};
export default index;
