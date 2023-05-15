import SectionLayout from "../organisms/SectionLayout";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

const Header = () => {
  return (
    <SectionLayout>
      <header className="grid grid-cols-2">
        <div>
          <SectionTitle type="main">Raleigh Efe</SectionTitle>
        </div>
        <div className="place-self-end flex items-center gap-8">
          <Button type="filled" text="Download CV" />
          <Button type="outlined" text="Contact Me" />
        </div>
      </header>
    </SectionLayout>
  );
};

export default Header;
