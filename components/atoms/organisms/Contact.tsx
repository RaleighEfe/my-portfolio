import Image from "next/image";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import SectionTitle from "../atoms/SectionTitle";
import SectionLayout from "./SectionLayout";
import Link from "next/link";

const Contact = () => {
  return (
    <SectionLayout>
      <h3 className="text-2xl font-bold text-justify">
        Lets Discuss your Project
      </h3>
      <form action="" className="py-8">
        <Input type="text" placeholder="Full Name" />
        <div className="py-5">
          <Input type="text" placeholder="Your Email" />
        </div>
        <Input type="textarea" placeholder="Message" />
        <div className="grid justify-items-end py-3">
          <Button type="filled" text="Submit" />
        </div>
      </form>
      <div className="flex gap-3 py-5">
        <div className="relative h-12 w-12">
          <Image src="assets/Email.svg" fill alt="email" />
        </div>
        <div>
          <p className="text-sm text-[#777777]">Send me an Email</p>
          <Link href="">raleighefe@gmail.com</Link>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
