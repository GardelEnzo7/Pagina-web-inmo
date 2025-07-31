import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LS Negocios Inmobiliarios',
  description: 'Alquiler y Compraventa de propiedades',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>{children}</body>
    </html>
  )
}
