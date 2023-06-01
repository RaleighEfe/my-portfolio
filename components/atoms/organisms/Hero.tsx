import Button from "../atoms/Button";
import SectionTitle from "../atoms/SectionTitle";
import SectionLayout from "./SectionLayout";
import Profile from "../atoms/Profile";

const Hero = () => {
   const handleAboutMe= () => {
     window.location.href = "/path/to/your/file.pdf";
  };
    const handleMyProject = () => {
      window.location.href = "/path/to/your/file.pdf";
    };
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
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
          <Button text="About Me" type="filled" onClick={handleAboutMe} />
          <Button text="My Project" type="outlined" onClick={handleMyProject}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
