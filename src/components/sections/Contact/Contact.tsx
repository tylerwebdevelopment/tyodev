"use client";
import { SendMessage } from "@/actions/sendContactMessage";
import { InputIcon } from "@/components/custom";
import ContactSendButton from "@/components/custom/ContactSendButton/ContactSendButton";
import { Spinner } from "@/components/ui";
import { Mail, User, Briefcase, Send } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    const result = await SendMessage(data);

    if (!result?.success) {
      setErrors(result?.tree);
      console.log(result?.tree);
      setLoading(false);
    }

    if(result?.success){
      
    }
  };
  return (
    <section className="w-full mx-auto py-16 px-8 space-y-6">
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
          <form
            action="#"
            autoComplete="off"
            onSubmit={handleSubmit}
            className="space-y-4 w-full"
          >
            <div className="flex flex-col gap-1.5">
              <InputIcon
                type="text"
                name="name"
                invalid={errors.name?.errors[0] ? true : false}
                side="left"
                className={
                  errors.name?.errors[0] ? "input-control-invalid" : ""
                }
                placeholder="Name"
                icon={User}
              />
              {errors.name?.errors[0] && (
                <span className="input-control-invalid-helper">
                  {errors.name.errors[0]}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <InputIcon
                type="text"
                name="email"
                invalid={errors.email?.errors[0] ? true : false}
                side="left"
                className={
                  errors.email?.errors[0] ? "input-control-invalid" : ""
                }
                placeholder="Email Address"
                icon={Mail}
              />
              {errors.email?.errors[0] && <span className="input-control-invalid-helper">{errors.email.errors[0]}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <InputIcon
                type="text"
                side="left"
                invalid={errors.company_name?.errors[0] ? true : false}
                name="company_name"
                className={
                  errors.company_name?.errors[0] ? "input-control-invalid" : ""
                }
                placeholder="Company Name"
                icon={Briefcase}
              />
              {errors.company_name?.errors[0] && (
                <span className="input-control-invalid-helper">{errors.company_name.errors[0]}</span>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <textarea
                autoComplete="off"
                rows={4}
                cols={30}
                name="contact_message"
                className={
                  errors.contact_message?.errors[0]
                    ? "input-control-invalid input-control textarea-scroll overflow-visible w-full resize-none"
                    : "input-control textarea-scroll overflow-visible w-full resize-none"
                }
                placeholder="Enter A Brief Message..."
              />
              {errors.contact_message?.errors[0] && (
                <span className="input-control-invalid-helper">{errors.contact_message?.errors[0]}</span>
              )}
            </div>
            <div className="w-full inline-flex justify-center">
              <ContactSendButton disabled={loading} type="submit" icon={Send}>
                {loading ? (
                  <>
                    <Spinner />
                    {"Sending..."}
                  </>
                ) : (
                  "Send"
                )}
              </ContactSendButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
