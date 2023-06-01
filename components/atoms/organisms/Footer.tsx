import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex gap-3 py-5">
      <div className="relative h-12 w-12">
        <Image src="assets/Email.svg" fill alt="email" />
      </div>
      <div>
        <p className="text-sm text-[#777777]">Send me an Email</p>
        <Link href="">raleighefe@gmail.com</Link>
      </div>
    </div>
  );
};

export default Footer;
