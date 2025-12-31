"use client"

import Image from "next/image"

interface PartnerLogo {
  name: string
  svg: string
  width: number
  height: number
}

// Partner logos with consistent sizing (24-32px height)
const partnerLogos: PartnerLogo[] = [
  { name: "Notion", svg: "/images/partners/notion.svg", width: 80, height: 24 },
  { name: "Slack", svg: "/images/partners/slack.svg", width: 80, height: 24 },
  { name: "Salesforce", svg: "/images/partners/salesforce.svg", width: 80, height: 24 },
  { name: "HubSpot", svg: "/images/partners/hubspot.svg", width: 80, height: 24 },
  { name: "Google", svg: "/images/partners/google.svg", width: 72, height: 24 },
  { name: "Microsoft", svg: "/images/partners/microsoft.svg", width: 96, height: 24 },
  { name: "Stripe", svg: "/images/partners/stripe.svg", width: 56, height: 24 },
  { name: "Zendesk", svg: "/images/partners/zendesk.svg", width: 88, height: 24 },
  { name: "Jira", svg: "/images/partners/jira.svg", width: 64, height: 24 },
  { name: "Linear", svg: "/images/partners/linear.svg", width: 72, height: 24 },
  { name: "ChatGPT", svg: "/images/partners/openai.svg", width: 80, height: 24 },
  { name: "Claude", svg: "/images/partners/anthropic.svg", width: 80, height: 24 },
  { name: "Gemini", svg: "/images/partners/google-ai.svg", width: 80, height: 24 },
]

interface PartnerLogosProps {
  variant?: "grid" | "marquee" | "compact"
  showAll?: boolean
  className?: string
}

export function PartnerLogos({ 
  variant = "grid", 
  showAll = false,
  className = "" 
}: PartnerLogosProps) {
  const displayLogos = showAll ? partnerLogos : partnerLogos.slice(0, 8)

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-x-12 gap-y-6 ${className}`}>
        {displayLogos.map((logo) => (
          <PartnerLogoItem key={logo.name} logo={logo} />
        ))}
      </div>
    )
  }

  if (variant === "marquee") {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex animate-marquee items-center gap-16">
          {[...displayLogos, ...displayLogos].map((logo, index) => (
            <PartnerLogoItem key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </div>
    )
  }

  // Grid variant (default)
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center ${className}`}>
      {displayLogos.map((logo) => (
        <PartnerLogoItem key={logo.name} logo={logo} />
      ))}
    </div>
  )
}

function PartnerLogoItem({ logo }: { logo: PartnerLogo }) {
  return (
    <div 
      className="flex items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
      style={{ height: 32 }}
    >
      {/* Fallback to text if SVG doesn't exist */}
      <PartnerLogoFallback name={logo.name} />
    </div>
  )
}

function PartnerLogoFallback({ name }: { name: string }) {
  // Use styled text as fallback - production would have actual SVGs
  return (
    <span 
      className="text-base font-semibold text-gray-500 hover:text-gray-800 transition-colors whitespace-nowrap"
      role="img"
      aria-label={`${name} logo`}
    >
      {name}
    </span>
  )
}

// Export individual logo component for custom use
export function PartnerLogo({ 
  name, 
  className = "" 
}: { 
  name: string
  className?: string 
}) {
  const logo = partnerLogos.find(l => l.name.toLowerCase() === name.toLowerCase())
  
  if (!logo) {
    return <PartnerLogoFallback name={name} />
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <PartnerLogoItem logo={logo} />
    </div>
  )
}
