import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'D Line Technical Establishment | Manpower Supply in Jubail',
  description: 'D Line Technical Establishment delivers trusted manpower supply, AC installation, electrical, and mechanical services in Al Jubail, Saudi Arabia.',
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
