import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import { LangProvider } from '@/lib/lang-provider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VitaPep Pharma | Canadian Research Peptides, 99%+ Purity',
  description:
    'VitaPep Pharma is a Canadian laboratory producing high-purity research peptides. Raw materials sourced in China, preparation, filling and batch identification in Canada.',
  keywords: [
    'research peptides',
    'VitaPep Pharma',
    'Canadian peptides',
    'peptide laboratory Canada',
    'BPC-157',
    'Retatrutide',
    'GHK-Cu',
  ],
  openGraph: {
    title: 'VitaPep Pharma | Canadian Research Peptides',
    description:
      'High-purity research peptides prepared in our laboratory in Canada. 99%+ purity and batch identification on every vial.',
    type: 'website',
    locale: 'en_CA',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f1e7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="bg-background font-sans antialiased">
        <LangProvider>
          {children}
        </LangProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
