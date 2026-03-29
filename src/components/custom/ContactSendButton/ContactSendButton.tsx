"use client";
import { IconType } from "react-icons";
import Button from "@/components/ui";
import React from "react";
import { Check, XCircle } from "lucide-react";

interface ContactSendButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  isSending: boolean,
  submitStatus?: 'idle' | 'success' | 'error',
  children: React.ReactNode;
}
const ContactSendButton: React.FC<ContactSendButtonProps> = ({
  icon: Icon,
  isSending,
  submitStatus,
  children,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {children}
      {isSending ? '' : submitStatus === 'success' ? <Check /> : submitStatus === 'error' ? <XCircle /> : submitStatus === 'idle' && Icon && <Icon />}
    </Button>
  );
};

export default ContactSendButton;
