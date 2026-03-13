import React from 'react'

interface EmailTemplateOwnerProps{
  name: string;
  company_name: string;
  email: string;
  message: string;
}

export const EmailTemplateOwner = ({name, company_name, email, message} : EmailTemplateOwnerProps) => {
  return (
    <div>
      <h1>New Message From Tyodev</h1>
      <p>Name: {name}</p><br />
      <p>Company Name: {company_name}</p><br />
      <p>Email Provided: {email}</p><br />
      <p>Message Sent: {message}</p>
    </div>
  )
}