import type React from "react"
import type { Metadata } from "next/config"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IntegrateWise AI Workspace — One workspace. All your tools. AI-powered.",
  description:
    "A shared AI workspace that connects your tools and organizes work with AI insights and governed outputs. Normalize once, render anywhere.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/integrateway-favicon-16x16-v1.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/integrateway-logo-markonly-transparent-256px-v1.webp",
        sizes: "256x256",
        type: "image/webp",
      },
      {
        url: "/images/integrateway-logo-markonly-transparent-indigo-v1.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/integrateway-appicon-1024-v1.png",
  },
  openGraph: {
    title: "IntegrateWise AI Workspace — One workspace. All your tools. AI-powered.",
    description:
      "A shared AI workspace that connects your tools and organizes work with AI insights and governed outputs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegrateWise AI Workspace — One workspace. All your tools. AI-powered.",
    description:
      "A shared AI workspace that connects your tools and organizes work with AI insights and governed outputs.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
