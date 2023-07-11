import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import React from "react";
import Icons from "../atoms/Icons";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 py-5 px-3">
      <div className="flex gap-3">
        <div className="relative h-12 w-12">
          <Image src="assets/Email.svg" fill alt="email" />
        </div>
        <div>
          <p className="text-sm text-[#777777]">Send me an Email</p>
          <Link href="mailto:raleighefe@mail.com">raleighefe@gmail.com</Link>
        </div>
      </div>
      <div className="flex gap-5 place-items-end content-center justify-end">
        <Icons
          url="https://www.linkedin.com/in/efe-raleigh-674b8723b/"
          iconType="LinkedIn"
          color="#00A86B"
          size="30px"
        />
        <Icons
          url="https://github.com/RaleighEfe"
          iconType="GitHub"
          color="#00A86B"
          size="30px"
        />
        <Icons
          url="https://twitter.com/EfeRaleigh"
          iconType="Twitter"
          color="#00A86B"
          size="30px"
        />
        {/* <Icons
          url="https://medium.com/@raleighefe"
          iconType="Medium"
          color="#00A86B"
          size="30px"
        /> */}
      </div>
    </div>
  );
};

export default Footer;
