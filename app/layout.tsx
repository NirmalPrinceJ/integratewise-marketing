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
      <body className="antialiased">{children}</body>
    </html>
  )
}
