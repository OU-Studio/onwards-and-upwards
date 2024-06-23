import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.scss'
import './global.css'
import { headers } from 'next/headers';
import Footer8 from './components/footer';
import NavSection from './components/nav';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Onwards + Upwards',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}, ) {
  const headersList = headers();
    const domain = headersList.get('host') || "";
    const fullUrl = headersList.get('referer') || "";
  return (
    <>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ggc0lyq.css" />
        <script type="module" defer src="jquery.js"></script>
        <script type="module" defer src="mainScript.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>

      <body >
        
      <NavSection></NavSection>

        {children}

<Footer8></Footer8>
        
      </body>
    </html>
  </>
  )
}
