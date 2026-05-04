import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "IntegrateWise — Give Your Work a Digital Memory",
  description: "The Spine turns scattered data into Digital Memory. Your Twin reasons in the Workspace and waits for your Approval before anything ships. Truth you own, AI you rent, approvals in between.",
  openGraph: {
    title: "IntegrateWise — Give Your Work a Digital Memory",
    description: "Stop being the human API between your tools. One platform that unifies your data, reasons over it, and acts only with your approval.",
    siteName: "IntegrateWise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegrateWise — Give Your Work a Digital Memory",
    description: "Stop being the human API between your tools.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#0B0D17]`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
