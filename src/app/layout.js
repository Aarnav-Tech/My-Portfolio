import './globals.css'
import { Inter } from 'next/font/google'
import { LavishlyYours } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aarnav Lokesh | Portfolio',
  description: 'Aarnav Lokesh\'s personal portfolio showcasing skills, projects, and contact information.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
