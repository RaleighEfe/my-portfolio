import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import clsx from "clsx";
import { BsLinkedin, BsGithub, BsMedium, BsTwitter } from "react-icons/bs";

type iconProps = {
  url?: string;
  iconType: String;
  size?: number;
  color?: string;
};

const Icons: any = ({ iconType, url, size, color = "red" }: iconProps) => {
  switch (iconType) {
    case "LinkedIn":
      return (
        <a href={url} target="_blank" rel="noreferrer">
          <BsLinkedin className={`text-[${color}] text-[${size}]`} />
        </a>
      );
    case "Twitter":
      return (
        <a href={url} target="_blank" rel="noreferrer">
          <BsTwitter className={`text-[${color}] text-[${size}]`} />
        </a>
      );
    case "GitHub":
      return (
        <a href={url} target="_blank" rel="noreferrer">
          <BsGithub className={`text-[${color}] text-[${size}]`} />
        </a>
      );
    case "Medium":
      return (
        <a href={url} target="_blank" rel="noreferrer">
          <BsMedium className={`text-[${color}] text-[${size}]`} />
        </a>
      );
  }
};

export default Icons;
