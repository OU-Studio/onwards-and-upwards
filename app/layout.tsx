'use client'
import { Inter } from 'next/font/google'
import './global.scss'
import './global.css'
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";



const inter = Inter({ subsets: ['latin'] })
const theme = {
  // Define your custom theme or use the default theme
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/path/to/your/styles.css" />
      </head>
      <body>
        <ThemeProvider>
          <div className="container mx-auto">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;

