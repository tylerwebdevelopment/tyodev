import { ContactSchema } from "@/lib/schema/ContactSchema"
import z from "zod";

export const SendMessage = async (formData : FormData) => {
 const data = {
  name: formData.get('name'),
  email: formData.get('email'),
  company_name: formData.get('company_name'),
  contact_message: formData.get('contact_message')
 }

 const result = ContactSchema.safeParse(data);

 if(!result.success){
  const tree = z.treeifyError(result.error).properties;
  return {
    success: false,
    tree
  }
 }


//  Configure Resend to send message contents to me if success before alerting success to use send a confirmation email to user thanking them. 

}