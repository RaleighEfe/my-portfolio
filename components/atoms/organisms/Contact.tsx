import Input from "../atoms/Input";
import React, { useEffect, useState } from "react";
// import SendMails from "../../../actions/sendMails";
import axios from "axios";
import SendMails from "../../../actions/SendMails";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      SendMails({ name, email, message }).then((res: any) => {
        console.log(res.message);
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="grid place-self-center p-3 md:px-72 md:py-20">
      <h3 className="text-2xl font-bold text-justify">
        Lets Discuss your Project
      </h3>
      <form action="" className="pt-8" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          id="name"
          value={name}
          setValue={setName}
        />
        <div className="py-5">
          <Input
            type="text"
            placeholder="Your Email"
            id="email"
            value={email}
            setValue={setEmail}
          />
        </div>
        <Input
          type="textarea"
          placeholder="Message"
          id="message"
          value={message}
          setValue={setMessage}
        />
        <div className="grid justify-self-end w-fit py-3">
          <button
            className="text-white bg-primary-100 hover:bg-primary-300 rounded-lg py-2 px-4 text-lg justify-items-end"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
