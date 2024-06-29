import * as React from "react";

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div>
    <p>New website enquiry from, {email}!</p>
    <p></p>
    <p>This was sent from the homepage.</p>
  </div>
);

export default EmailTemplate;