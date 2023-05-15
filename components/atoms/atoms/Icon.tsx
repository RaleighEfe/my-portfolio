import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillHtml5,
} from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { VscComment } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";

type iconProps = {
  iconType: any;
  color: any;
};
const Icons = ({ iconType, color }: iconProps) => {
  return (
    <>
      {() => {
        switch (iconType) {
          case "insta":
            return <AiFillInstagram />;
            break;
          case "facebook":
            return <AiFillFacebook />;
            break;
          case "twitter":
            return <AiFillTwitterCircle />;
            break;
          case "git":
            return <AiFillGithub />;
            break;
          case "linkedIn":
            return <AiFillLinkedin />;
          case "rightArrow":
            return <AiOutlineArrowRight />;
          case "leftArrow":
            return <AiOutlineArrowLeft />;
          case "email":
            return <VscComment />;
          case "html":
            return <AiFillHtml5 />;
          case "css":
            return <IoLogoCss3 />;
          case "javascript":
            return <IoLogoJavascript />;
          case "nextjs":
            return <TbBrandNextjs />;
        }
      }}
    </>
  );
};

export default Icons;
