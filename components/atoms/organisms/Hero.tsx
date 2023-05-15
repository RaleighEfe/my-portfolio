import Button from "../atoms/Button";
import SectionTitle from "../atoms/SectionTitle";
import SectionLayout from "./SectionLayout";

const Hero = () => {
  return (
    <div className="place-self-center">
      <SectionLayout>
        <SectionTitle type="main">Hi, I am Efe Raleigh</SectionTitle>
        <p className="text-left text-lg font-normal py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut quam
          quasi adipisci, in dicta cum exercitationem architecto nulla eaque rem
          iste! Deleniti, est ratione! Facere error eius nulla itaque.
        </p>
        <div className="flex gap-8 ">
          <Button text="About Me" type="filled" />
          <Button text="My Project" type="outlined" />
        </div>
      </SectionLayout>
    </div>
  );
};

export default Hero;
