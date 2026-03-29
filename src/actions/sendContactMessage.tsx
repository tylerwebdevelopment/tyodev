"use server";
import { EmailTemplateContactCustomer } from "@/components/custom/Email_Templates/EmailTemplateContactCustomer";
import { EmailTemplateOwner } from "@/components/custom/Email_Templates/EmailTemplateOwner";
import { ContactSchema } from "@/lib/schema/ContactSchema";
import React from "react";
import { Resend } from "resend";

export const SendMessage = async (data : unknown) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // return { success: true, message: "Test message" };
  const ResendAPI = process.env.RESEND_API_KEY as string;
  const resend = new Resend(ResendAPI);

  const parsed = ContactSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Invalid Data" };
  }

  const validData = parsed.data;

  try {
    const customerEmail = await resend.emails.send({
      from: "TyoDev <contact@tyodev.com>",
      to: validData.email,
      subject: "Contact Message Recieved",
      react: EmailTemplateContactCustomer({ name: validData.name }),
    });

    if (customerEmail.error) {
      throw new Error(customerEmail.error.message);
    }

    const companyName = validData.company_name
      ? validData.company_name
      : "Not Entered";

    const ownerEmail = await resend.emails.send({
      from: "TyoDev <contact@tyodev.com>",
      to: "tylerwebdevelopment@outlook.com",
      subject: `New Contact Message From ${validData.company_name ? validData.company_name : validData.name}`,
      react: EmailTemplateOwner({
        name: validData.name,
        company_name: companyName,
        email: validData.email,
        message: validData.contact_message,
      }),
    });

    if (ownerEmail.error) {
      throw new Error(ownerEmail.error.message);
    }

    return {
      success: true,
      message:
        "Message Sent! Check your inbox (or junk folder) for a confirmation. I'll respond within 1-2 business days.",
    };
  } catch (err) {
    return {
      success: false,
      message: 'Internal Server Error! Please Try Again Later'
    }
  }

  //  try {
  //   const customerEmail = await resend.emails.send({
  //     from: 'TyoDev <contact@tyodev.com>',
  //     replyTo: newData.email,
  //     to: newData.email,
  //     subject: 'Contact Message Recieved',
  //     react: EmailTemplateContactCustomer({name: newData.name, company_name: newData.company_name})
  //   });

  //   if(customerEmail.error){
  //     throw new Error(customerEmail.error.message);
  //   }

  //   const ownerEmail = await resend.emails.send({
  //     from: 'Tyodev <contact@tyodev.com>',
  //     to: 'tylerwebdevelopment@outlook.com',
  //     subject: `New Contact Message From ${newData.company_name}`,
  //     react: EmailTemplateOwner({name: newData.name, company_name: newData.company_name, email: newData.email, message: newData.contact_message})
  //   });

  //   if(ownerEmail.error){
  //     throw new Error(ownerEmail.error.message);
  //   }

  //     return {
  //       success: true,
  //       message: "Message sent! Check your inbox (or junk folder) for a confirmation. I'll respond within 1-2 business days."
  //   }
  //  } catch (err) {

  //   console.log(err);

  //   return{
  //     success: false,
  //     message: "Server Encountered Error! Please Try Again Later",
  //   }
  //  }
};
