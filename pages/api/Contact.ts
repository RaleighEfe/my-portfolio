// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "raleighefe@gmail.com",
    pass: "rnseynccxyqpmakz",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendMail = async (name: string, email: string, message: string) => {
  await transporter.sendMail({
    from: email,
    to: "raleighefe@gmail.com",
    subject: "Email from portfolio",
    html: `
      <h2>Email from portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await sendMail(name, email, message);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send message" });
    }
  }
}
