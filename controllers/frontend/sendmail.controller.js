"use server";

import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, message, html }) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      to,
      subject,
      text: message,
      html,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
