'use client'
import {
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";





function HeroSection10() {

  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [buttonText, setButtonText] = useState('Get Started');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setButtonText('Sending...');

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    if (response.ok) {
      setResponseMessage('Email sent successfully!');
      setButtonText('Get Started');
    } else {
      setResponseMessage(`Error: ${result.error}`);
      setButtonText('Get Started');
    }
  };

  return (
    <>
      <header className="bg-white p-8">
        <div className="w-full container mx-auto pt-12 pb-6 text-center lg:pb-20">
          <Typography
            variant="h1"
            color="blue-gray"
            className="!lg:leading-tight mx-auto mb-6 w-full text-3xl !leading-snug lg:max-w-3xl lg:text-5xl"
          >
            Some of our favourite projects
          </Typography>


        </div>
      </header>
    </>
  );
}

export default HeroSection10;
