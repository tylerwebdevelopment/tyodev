"use server";
import { EmailTemplateContactCustomer } from "@/components/custom/Email_Templates/EmailTemplateContactCustomer";
import { EmailTemplateOwner } from "@/components/custom/Email_Templates/EmailTemplateOwner";
import { ContactSchema } from "@/lib/schema/ContactSchema"
import {Resend} from 'resend';
import z, { success } from "zod";

export const SendMessage = async (formData : FormData) => {
 const resend = new Resend(process.env.RESEND_API_KEY);
 const formdata = {
  name: formData.get('name'),
  email: formData.get('email'),
  company_name: formData.get('company_name'),
  contact_message: formData.get('contact_message')
 }

 const result = ContactSchema.safeParse(formdata);

 if(!result.success){
  const tree = z.treeifyError(result.error).properties;
  return {
    success: false,
    tree
  }
 }

 const newData = result.data;


 try {
  const customerEmail = await resend.emails.send({
    from: 'TyoDev <contact@tyodev.com>',
    replyTo: newData.email,
    to: newData.email,
    subject: 'Contact Message Recieved',
    react: EmailTemplateContactCustomer({name: newData.name, company_name: newData.company_name})
  });

  if(customerEmail.error){
    throw new Error(customerEmail.error.message);
  }

  const ownerEmail = await resend.emails.send({
    from: 'Tyodev <contact@tyodev.com>',
    to: 'tylerwebdevelopment@outlook.com',
    subject: `New Contact Message From ${newData.company_name}`,
    react: EmailTemplateOwner({name: newData.name, company_name: newData.company_name, email: newData.email, message: newData.contact_message})
  });

  if(ownerEmail.error){
    throw new Error(ownerEmail.error.message);
  }

    return {
      success: true,
      message: "Message sent! Check your inbox (or junk folder) for a confirmation. I'll respond within 1-2 business days."
  }
 } catch (err) {

  console.log(err);

  return{
    success: false,
    message: "Server Encountered Error! Please Try Again Later",
  }
 }

}