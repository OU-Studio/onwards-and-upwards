'use server'

import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

// Exporting the POST method
export async function POST(req: any, res: any) {
  try {

    const { firstName, email } = await req.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Onwards and Upwards <enquiries@send.ou.studio>',
      to: ['joe@ou.studio'],
      subject: "Website Enquiry",
      react: EmailTemplate({ email: email }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 }); 
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// Example of exporting a GET method (if needed)
export async function GET() {
  try {
    // Implement your GET method logic here
    return Response.json({ message: 'GET method response' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// Add more exports for other HTTP methods as required
