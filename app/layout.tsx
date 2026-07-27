import React from 'react'
import type { Metadata } from 'next'
import { Bodoni_Moda, Source_Serif_4, Archivo_Narrow, Anton } from 'next/font/google'

import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

const archivo = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const title = 'Abhiraj Singh — The Sunday Edition'
const description =
  'Full-stack developer working across AI, Bitcoin protocol internals, and open source. B.Tech CS student, Bengaluru.'

export const metadata: Metadata = {
  metadataBase: new URL('https://abhiraj-portfolio-website.vercel.app'),
  title,
  description,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Abhiraj Singh',
    title,
    description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Full-stack developer. AI, Bitcoin protocol internals, open source.',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${sourceSerif.variable} ${archivo.variable} ${anton.variable}`}
    >
      <body className="font-body">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
