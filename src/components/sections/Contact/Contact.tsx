import { InputIcon } from "@/components/custom";
import ContactSendButton from "@/components/custom/ContactSendButton/ContactSendButton";
import { Mail, User, Briefcase, Send } from "lucide-react";
import Link from "next/link";
const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto py-16 px-8 space-y-6">
      <h1 className="text-lg tracking-widest text-center uppercase font-thin text-text-muted">
        Contact
      </h1>
      <div className="flex flex-col gap-4 justify-content">
        <div className="inline-flex items-center py-1 px-2 bg-primary-500/20 mx-auto rounded-lg text-sm gap-2">
          <Mail className="size-4" />
          <Link href={"mailto:owner@tyodev.com"} className="hover:underline">
            Owner@tyodev.com
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <form action="#" autoComplete="off" className="space-y-4">
            <InputIcon type="text" side="left" placeholder="Name" icon={User} />
            <InputIcon
              type="email"
              side="left"
              placeholder="Email Address"
              icon={Mail}
            />
            <InputIcon
              type="text"
              side="left"
              placeholder="Company Name"
              icon={Briefcase}
            />
            <textarea
              autoComplete="off"
              rows={4}
              cols={30}
              placeholder="Enter A Brief Message..."
              className="input-control textarea-scroll overflow-visible w-full resize-none"
            />
            <div className="w-full inline-flex justify-center">
              <ContactSendButton icon={Send}>Send</ContactSendButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
