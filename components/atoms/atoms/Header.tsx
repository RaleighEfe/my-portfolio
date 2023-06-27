import SectionLayout from "../organisms/SectionLayout";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const Header = () => {
  const handleDownloadCV = () => {
    window.location.href = "/Documents/aa/raleigh-efe";
  };
  const handleContactMe = () => {
    window.location.href = `mailto:${"raleighefe@gmail.com"}`;
  };
  return (
    <div>
      <header className="grid grid-cols-2 p-3">
        <div>
          <SectionTitle type="main">Raleigh Efe</SectionTitle>
        </div>
        <div className="flex gap-8 justify-self-end">
          <Button
            type="filled"
            text="Download CV"
            onClick={handleDownloadCV}
            className="hidden md:block"
          />
          <Button
            type="outlined"
            text="Contact Me"
            onClick={handleContactMe}
            email="raleighefe@gmail.com"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
