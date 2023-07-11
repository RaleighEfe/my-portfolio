import Button from "../atoms/Button";
import SectionTitle from "../atoms/SectionTitle";
import React, { useRef } from "react";
import SectionLayout from "./SectionLayout";
import Profile from "../atoms/Profile";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="relative w-full h-[550px]">
        <Profile />
      </div>
      <div className="place-self-center px-3">
        <SectionTitle type="main">Hi, I am Efe Raleigh</SectionTitle>
        <p className="text-lg font-normal py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut quam
          quasi adipisci, in dicta cum exercitationem architecto nulla eaque rem
          iste! Deleniti, est ratione! Facere error eius nulla itaque.
        </p>
        <div className="flex gap-8">
          <Link
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="w-fit items-center justify-center rounded-md py-2 px-4 text-white bg-primary-100 "
          >
            About Me
          </Link>
          <Link
            className="w-fit items-center justify-center rounded-md py-2 px-4 border border-primary-100 text-[#00A86B]"
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Project
          </Link>
          {/* <Button text="About Me" type="filled" onClick={handleAboutMe} /> */}
          {/* <Button text="My Project" type="outlined" onClick={handleMyProject} /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
