import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vikram Thevar - Computer Science Student & Full Stack Developer',
  description: 'Portfolio of Vikram Thevar, Computer Science student at ASU specializing in AI/ML, full stack development, and assistive technologies.',
  keywords: 'vikram thevar, computer science, AI, ML, full stack developer, ASU, accessibility, technology',
  authors: [{ name: 'Vikram Thevar' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Vikram Thevar - Computer Science Student & Full Stack Developer',
    description: 'Portfolio showcasing AI/ML projects, full stack development, and assistive technology solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikram Thevar - Computer Science Student & Full Stack Developer',
    description: 'Portfolio showcasing AI/ML projects, full stack development, and assistive technology solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}