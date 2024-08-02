// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, userEmail, contactNumber, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: name,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Submission from ${name} `,
      text: `Name: ${name}\nEmail: ${userEmail}\nPhone: ${contactNumber}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
