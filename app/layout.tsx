import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/siteConfig"
import AnalyticsProvider from "@/components/analytics/analytics-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Universal AI OS for Modern Work`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.company }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
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
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  )
}
