import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { siteConfig } from "@/lib/siteConfig"

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
        url: "/brand/logo.svg",
        width: 1200,
        height: 630,
        alt: siteConfig.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: ["/brand/logo.svg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/brand/logo-mark.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
