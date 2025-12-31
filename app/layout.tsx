import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const siteUrl = "https://www.integratewise.co"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IntegrateWise | The Productivity OS for Effortless Work",
    template: "%s | IntegrateWise",
  },
  description:
    "Connect your tools once. IntegrateWise unifies Notion, Slack, CRMs, calendars, and AI apps through a shared structure. No migrations required. BYOM supported.",
  keywords: [
    "productivity platform",
    "AI agents",
    "tool integration",
    "workflow automation",
    "no-code integration",
    "BYOM",
    "bring your own model",
    "enterprise productivity",
    "Notion integration",
    "Slack integration",
    "CRM automation",
    "AI orchestration",
  ],
  authors: [{ name: "IntegrateWise" }],
  creator: "IntegrateWise",
  publisher: "IntegrateWise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "IntegrateWise",
    title: "IntegrateWise | The Productivity OS for Effortless Work",
    description:
      "Connect your tools once. IntegrateWise unifies Notion, Slack, CRMs, calendars, and AI apps through a shared structure. No migrations required.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntegrateWise - The Productivity OS for Effortless Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntegrateWise | The Productivity OS for Effortless Work",
    description:
      "Connect your tools once. IntegrateWise unifies Notion, Slack, CRMs, and AI apps. No migrations required. BYOM supported.",
    site: "@integratewise",
    creator: "@integratewise",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1E2A4A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "IntegrateWise",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/integrateway-logo-markonly-transparent-256px-v1.webp`,
      },
      sameAs: [
        "https://twitter.com/integratewise",
        "https://linkedin.com/company/integratewise",
        "https://github.com/integratewise",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@integratewise.co",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "IntegrateWise",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#product`,
      name: "IntegrateWise",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Web",
      description:
        "AI Agents Platform that connects your tools through a shared structure (Spine), routes securely (Hub), and uses AI agents to turn work into action.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available",
      },
      featureList: [
        "Multi-AI Orchestration (Claude, ChatGPT, Gemini, Perplexity)",
        "Zero Migration Required",
        "BYOM - Bring Your Own Model",
        "Enterprise Security (SOC 2, RBAC, Audit Logs)",
        "Full Integration or Render Only modes",
        "Second Brain from AI conversations",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is BYOM (Bring Your Own Model)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BYOM allows you to connect your own AI model—commercial or self-hosted—using your API key. IntegrateWise preserves context and logic while routing through your chosen model.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to migrate my existing tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No migrations required. IntegrateWise sits on top of your existing tools like Notion, Slack, CRMs, and calendars. It connects without replacing them.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Full Integration and Render Only modes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full Integration enables two-way sync and automation where agents can create and update work. Render Only is a compliance-friendly read-only mode with zero writes to source systems—perfect for secure analytics and dashboards.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
