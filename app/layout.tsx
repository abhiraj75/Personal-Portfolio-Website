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

export const metadata: Metadata = {
  title: 'Abhiraj Singh — The Sunday Edition',
  description:
    'Full-stack developer working across AI, Bitcoin protocol internals, and open source. B.Tech CS student, Bengaluru.',
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
