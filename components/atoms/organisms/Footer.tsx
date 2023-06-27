import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";
import Icons from "../atoms/Icons";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 bg-[#00A86B]">
      <div className="flex gap-3 py-5">
        <div className="relative h-12 w-12">
          <Image src="assets/Email.svg" fill alt="email" />
        </div>
        <div>
          <p className="text-sm text-[#777777]">Send me an Email</p>
          <Link href="">raleighefe@gmail.com</Link>
        </div>
      </div>
      <div className="grid grid-cols-4  place-items-end content-center justify-end">
        <Icons
          url="https://www.linkedin.com/in/efe-raleigh-674b8723b/"
          iconType={<BsLinkedin />}
        />
        <Icons url="https://github.com/RaleighEfe" iconType={<BsGithub />} />
        <Icons
          url="https://www.instagram.com/_hey_fey/"
          iconType={<BsInstagram />}
        />
        <Icons url="https://twitter.com/EfeRaleigh" iconType={<BsTwitter />} />
      </div>
    </div>
  );
};

export default Footer;
