import { IconType } from "react-icons";
import Button from "@/components/ui";
import React from "react";

interface ContactSendButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  icon: IconType;
  children: React.ReactNode;
}
const ContactSendButton: React.FC<ContactSendButtonProps> = ({
  icon: Icon,
  children
}) => {
  return (
    <Button>
      {children}
      <Icon />
    </Button>
  );
};

export default ContactSendButton;
