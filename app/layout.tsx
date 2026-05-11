import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShipAlly | Maritime Environmental Solutions',
  description: 'Global maritime environmental solutions, waste disposal, and vessel support services from Singapore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
