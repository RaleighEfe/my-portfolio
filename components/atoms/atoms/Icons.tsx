import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import clsx from "clsx";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

type iconProps = {
  url?: string;
  iconType: String;
  size?: string;
  color?: string;
};

const Icons: any = ({ iconType, url, size, color = "red" }: iconProps) => {
  switch (iconType) {
    case "LinkedIn":
      return (
        <BsLinkedin className={`text-[${color}] text-[${size}]`} />
        // <a href={url} target="_blank" className={clsx(`text-${color} text-${size}`)} rel="noopener noreferrer">
        //   {/* {React.cloneElement(iconType, { size, color })} */}
        //   {iconType}
        // </a>
      );
    case "Twitter":
      return <BsTwitter className={`text-[${color}] text-[${size}]`} />;
    case "Instagram":
      return <BsInstagram className={`text-[${color}] text-[${size}]`} />;
    case "GitHub":
      return <BsGithub className={`text-[${color}] text-[${size}]`} />;
  }
};

export default Icons;
