// pages/api/contact.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminTemplate } from "@/mailTemplates/createAdminTemplate";
import { createUserTemplate } from "@/mailTemplates/createUserTemplate";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { name, email, message, phone } = body; //destructuring

  if (!name || !email || !message) {
    return NextResponse.json({ message: "incomplete data submitted" },{status:500});
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 465, //25,465,587
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const adminMail = await transporter.sendMail({
      from: "support@campaignkart.com", // sender address
      to: "pranavcampaignkart@gmail.com", // list of receivers
      subject: `${name} filled the form`, // Subject line
      html: createAdminTemplate(body),
    });

    const userMail = await transporter.sendMail({
      from: "support@campaignkart.com", // sender address
      to: email, // list of receivers
      subject: `Thank you for reaching out to us`, // Subject line
      html: createUserTemplate(body),
    });


    return NextResponse.json({ status: 200, message: "successfull" });
  } catch (error:any) {
    console.log(error, "error");
    return NextResponse.json({ message: error.message||error }, {status: 500});
  }
}
