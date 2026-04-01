"use client";
import { useState } from "react";
import { SendMessage } from "@/actions/sendContactMessage";
import { Controller, useForm } from "react-hook-form";
import ContactSendButton from "@/components/custom/ContactSendButton/ContactSendButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
  Spinner,
} from "@/components/ui";
import { Mail, MailCheck, MailWarning, Send } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ContactSchema } from "@/lib/schema/ContactSchema";
import { toast } from "sonner";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      company_name: "",
      contact_message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    setSubmitStatus("idle");
    const result = await SendMessage(data);

    if (!result.success) {
      setSubmitStatus("error");
      toast.error("Message Not Sent", {
        description: result.message,
        classNames: {
          title: "text-base!",
          description: "text-error! text-sm!",
        },
        position: "top-center",
        style: {
          fontFamily: "var(--font-sans)",
          backgroundColor: "var(--color-error-soft)",
          color: "var(--color-error)",
          borderColor: "var(--color-error)",
        },
        icon: <MailWarning className="size-5" />,
      });

      setTimeout(() => setSubmitStatus("idle"), 2000);
    }

    if (result.success) {
      setSubmitStatus("success");
      toast.success("Message Sent", {
        description: result.message,
        classNames: {
          title: "text-base!",
          description: "text-success! text-sm!",
        },
        position: "top-center",
        style: {
          fontFamily: "var(--font-sans)",
          backgroundColor: "var(--color-success-soft)",
          color: "var(--color-success)",
          borderColor: "var(--color-success)",
        },
        icon: <MailCheck className="size-5" />,
      });

      form.reset();

      setTimeout(() => setSubmitStatus("idle"), 2000);
    }
  };

  const contactLength = 500;
  // const [errors, setErrors] = useState<any>({});
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const data = new FormData(e.currentTarget);

  //   const result = await SendMessage(data);

  //   // Form Data Failed Validation
  //   if (!result.success && result.tree) {
  //     setLoading(false);
  //     setErrors(result.tree);
  //     return;
  //   }
  //   setErrors({});
  //   // Server Could Not Send Emails

  //   if (!result.success && result.message) {
  //     setLoading(false);
  //     toast.error("Message Not Sent", {
  //       description: result.message,
  //       position: "top-center",
  //       richColors: true,
  //       icon: <MailWarning className="size-5" />,
  //     });
  //     return;
  //   }

  //   //Success
  //   if (result.success && result.message) {
  //     setLoading(false);
  //     setErrors({});
  //     toast.success("Message Sent", {
  //       description: result.message,
  //       position: "top-center",
  //       richColors: true,
  //       icon: <MailCheck className="size-5" />,
  //     });
  //   }
  // };
  return (
    <div className="min-h-screen w-full relative">
      {/* Noise Texture (Darker Dots) Background */}
      <div
        className="absolute inset-0 opacity-15 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <section className="w-full mx-auto py-16 max-w-7xl px-4 space-y-12 sm:space-y-12 md:flex md:flex-row md:justify-evenly xl:justify-around xl:gap-32 md:gap-8">
        <div className="space-y-4 md:bg-surface py-8 px-8 rounded-lg md:drop-shadow-xl md:border-border md:border h-fit lg:space-y-6 lg:max-w-1/2 translate-y-1/12">
          <h1 className="tracking-widest text-center font-heading text-foreground/75">
            Get In Touch
          </h1>
          <p className="text-lg! hidden md:block text-center text-muted-foreground max-w-3xs mx-auto lg:max-w-md lg:text-xl!">
            Have a project in mind or just want to connect? I&apos;d love to
            hear from you.
          </p>
          <div className="hidden md:block">
            <p className="inline-flex gap-1.5 items-center w-full mt-8 lg:text-lg! justify-center text-foreground/75">
              <Mail className="size-4" /> Email:{" "}
              <Link
                className="hover:underline-offset-2 hover:underline"
                href="mailto:owner@tyodev.com"
              >
                Owner@tyodev.com
              </Link>
            </p>
          </div>
          <div className="border-l-8 hidden md:block lg:mx-auto lg:w-fit text-center border-info pl-4 mt-16! py-2 bg-background">
            <p className="text-base! max-w-2xs lg:max-w-md lg:text-lg! text-muted-foreground">
              I&apos;m currently available for freelance work and open to new
              opportunities.
            </p>
            <p className="text-base! max-w-2xs lg:max-w-md lg:text-lg! text-muted-foreground mt-8!">
              I typically respond to all email inquries within 24-48 hours.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-12 justify-content text-foreground/75">
          <Card className="max-w-md md:shadow-none md:drop-shadow mx-auto">
            <CardHeader className="space-y-4 border-b border-border pb-4">
              <CardTitle className="text-foreground/75 text-2xl sm:text-3xl sm:w-3/4 sm:mx-auto sm:leading-8 font-heading text-center leading-6">
                Lets Build Something Great
              </CardTitle>
              <CardDescription className="text-center sm:w-3/4 sm:mx-auto">
                Tell me about your project and I&apos;ll get back to you within
                24-48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                id="form-contact"
                className="font-sans py-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FieldGroup className="space-y-6">
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <div className="inline-flex items-center">
                          <FieldLabel
                            className="font-bold tracking-wide"
                            htmlFor={field.name}
                          >
                            Name
                          </FieldLabel>
                          <FieldDescription
                            aria-invalid={fieldState.invalid}
                            className="ml-auto text-xs! aria-invalid:text-destructive"
                          >
                            Required*
                          </FieldDescription>
                        </div>
                        <Input
                          {...field}
                          type="text"
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="John Doe"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <div className="inline-flex items-center">
                          <FieldLabel
                            className="font-bold tracking-wide"
                            htmlFor={field.name}
                          >
                            Email Adress
                          </FieldLabel>
                          <FieldDescription
                            aria-invalid={fieldState.invalid}
                            className="ml-auto text-xs! aria-invalid:text-destructive"
                          >
                            Required*
                          </FieldDescription>
                        </div>
                        <Input
                          {...field}
                          type="email"
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="example@example.com"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="company_name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                          className="font-bold tracking-wide"
                          htmlFor={field.name}
                        >
                          Company Name(Optional)
                        </FieldLabel>
                        <Input
                          {...field}
                          type="text"
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Johns Business"
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="contact_message"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <div className="inline-flex items-center">
                          <FieldLabel
                            className="font-bold tracking-wide"
                            htmlFor={field.name}
                          >
                            Message
                          </FieldLabel>
                          <FieldDescription
                            aria-invalid={fieldState.invalid}
                            className="ml-auto text-xs! aria-invalid:text-destructive"
                          >
                            Required*
                          </FieldDescription>
                        </div>
                        <InputGroup>
                          <InputGroupTextarea
                            {...field}
                            id={field.name}
                            placeholder="What's On Your Mind?"
                            rows={3}
                            className="resize-none min-h-16"
                            aria-invalid={fieldState.invalid}
                          />
                          <InputGroupAddon align="block-end">
                            <InputGroupText
                              className={`${field.value.length >= contactLength && "text-error"} tabular-nums`}
                            >
                              {field.value.length}/{contactLength}
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="border-t border-border py-4">
              <Field orientation="horizontal">
                <ContactSendButton
                  className="mx-auto inline-flex items-center"
                  type="submit"
                  form="form-contact"
                  icon={Send}
                  isSending={form.formState.isSubmitting}
                  submitStatus={submitStatus}
                  disabled={
                    form.formState.isSubmitting || submitStatus !== "idle"
                  }
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Spinner />
                      {"Sending..."}
                    </>
                  ) : submitStatus === "success" ? (
                    "Sent"
                  ) : submitStatus === "error" ? (
                    "Not Sent"
                  ) : (
                    submitStatus === "idle" && "Send"
                  )}
                </ContactSendButton>
              </Field>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
