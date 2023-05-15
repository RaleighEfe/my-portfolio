import Image from "next/image";

type designProps = {
  children: any;
};
const SectionLayout = ({ children }: designProps) => {
  return <div className="py-5 px-8">{children}</div>;
};

export default SectionLayout;
