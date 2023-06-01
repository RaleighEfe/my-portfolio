// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // Set up your email transport configuration (e.g., SMTP, SendGrid, etc.)
  // Refer to nodemailer documentation for different transport options
});

const sendMail = async (name: string, email: string, message: string) => {
  await transporter.sendMail({
    from: "raleighefe@gmail.com",
    to: "raleighefe@gmail.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
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
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
