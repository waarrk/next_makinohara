import '@/styles/globals.css'

import { Inter as FontSans } from '@next/font/google'

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='ja'
      className={twMerge(
        clsx(
          'bg-white font-sans text-slate-900 antialiased',
          fontSans.variable,
        ),
      )}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
