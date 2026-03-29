import React from "react";

interface EmailTemplateContactCustomerProps {
  name: string;
}

export const EmailTemplateContactCustomer = ({
  name,
}: EmailTemplateContactCustomerProps) => {
  return (
    <div>
      <h1>Your Message Has Been Recieved</h1>
      <p>
        Thank you for reaching out {name}! Please allow me 24-48 hours to view
        your message and respond.
      </p>
      <br />
      <br />
      <p>Tyler OBier</p>
      <br />
      <p>Tyodev.com</p>
      <br />
      <p>Cleburne, Texas</p>
    </div>
  );
};
