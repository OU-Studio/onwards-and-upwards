

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.scss'  

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Onwards + Upwards',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header class="header"></header>
      <body >{children}</body> 
    </html>
  )
}
