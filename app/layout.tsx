import { Poppins } from 'next/font/google'
import "../styles/globals.css"

const poppins = Poppins({weight: ["800", "400", "200"], subsets: ["latin"]})

export const metadata = {
  title: 'ShutIt app',
  description: 'App to shut down or sleep your computer at the specified time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
