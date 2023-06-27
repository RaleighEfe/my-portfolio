import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

type iconProps = {
  url: string;
  iconType: ReactNode;
  size?: number;
  color?: string;
};
const Icons = ({ iconType, url, size = 24, color = "white" }: iconProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {/* {React.cloneElement(iconType, { size, color })} */}
    </a>
  );
};

export default Icons;
