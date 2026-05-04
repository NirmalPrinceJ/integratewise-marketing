// Integration Logos Component - 70+ app logos with Nexify-style marquee
"use client"

import { SVGProps } from "react"

type LogoProps = SVGProps<SVGSVGElement> & { className?: string }

// All 70+ integration logos
export const integrationLogos = [
  // CRM & Sales
  { name: "Salesforce", color: "#00A1E0" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Pipedrive", color: "#21A366" },
  { name: "Zoho CRM", color: "#DC2626" },
  { name: "Monday Sales", color: "#FF3D57" },
  { name: "Close", color: "#264653" },
  { name: "Copper", color: "#F59E0B" },
  { name: "Freshsales", color: "#FF6B2B" },
  // Communication
  { name: "Slack", color: "#4A154B" },
  { name: "Microsoft Teams", color: "#6264A7" },
  { name: "Discord", color: "#5865F2" },
  { name: "Zoom", color: "#2D8CFF" },
  { name: "Google Meet", color: "#00897B" },
  { name: "Webex", color: "#00BCF2" },
  { name: "Loom", color: "#625DF5" },
  // Project Management
  { name: "Jira", color: "#0052CC" },
  { name: "Asana", color: "#F06A6A" },
  { name: "Notion", color: "#000000" },
  { name: "Linear", color: "#5E6AD2" },
  { name: "Trello", color: "#0079BF" },
  { name: "Monday.com", color: "#FF3D57" },
  { name: "ClickUp", color: "#7B68EE" },
  { name: "Basecamp", color: "#1D2D35" },
  { name: "Wrike", color: "#28A745" },
  // Support & Service
  { name: "Zendesk", color: "#03363D" },
  { name: "Intercom", color: "#1F8CEB" },
  { name: "Freshdesk", color: "#2AB773" },
  { name: "ServiceNow", color: "#62D84E" },
  { name: "Drift", color: "#0176D3" },
  { name: "Help Scout", color: "#1292EE" },
  { name: "Front", color: "#F78DA7" },
  { name: "Crisp", color: "#2B65F8" },
  // Dev Tools
  { name: "GitHub", color: "#181717" },
  { name: "GitLab", color: "#FC6D26" },
  { name: "Bitbucket", color: "#0052CC" },
  { name: "Vercel", color: "#000000" },
  { name: "Netlify", color: "#00C7B7" },
  { name: "AWS", color: "#FF9900" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Azure", color: "#0078D4" },
  { name: "Heroku", color: "#430098" },
  { name: "DigitalOcean", color: "#0080FF" },
  // Analytics
  { name: "Segment", color: "#52BD95" },
  { name: "Mixpanel", color: "#7856FF" },
  { name: "Amplitude", color: "#0057FF" },
  { name: "Google Analytics", color: "#E37400" },
  { name: "Heap", color: "#00C9A7" },
  { name: "Pendo", color: "#FF4F9E" },
  { name: "PostHog", color: "#1D4ED8" },
  { name: "Hotjar", color: "#FF3C00" },
  // Billing & Finance
  { name: "Stripe", color: "#635BFF" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Xero", color: "#13B5EA" },
  { name: "Chargebee", color: "#FF6600" },
  { name: "Recurly", color: "#7A5FD1" },
  { name: "Paddle", color: "#FFCE00" },
  { name: "ChartMogul", color: "#6366F1" },
  // Data & Databases
  { name: "Snowflake", color: "#29B5E8" },
  { name: "BigQuery", color: "#669DF6" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redshift", color: "#8C4FFF" },
  { name: "Databricks", color: "#FF3621" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "MySQL", color: "#4479A1" },
  // Marketing
  { name: "Mailchimp", color: "#FFE01B" },
  { name: "Marketo", color: "#5C4EFF" },
  { name: "ActiveCampaign", color: "#004CFF" },
  { name: "Klaviyo", color: "#000000" },
  { name: "SendGrid", color: "#1A82E2" },
  { name: "Customer.io", color: "#FFD54F" },
  // Revenue Intelligence
  { name: "Gong", color: "#7B2D8E" },
  { name: "Chorus", color: "#5E17EB" },
  { name: "Clari", color: "#00A3E0" },
  { name: "Outreach", color: "#5C4EE5" },
  { name: "SalesLoft", color: "#FF6B35" },
  // Productivity
  { name: "Google Workspace", color: "#4285F4" },
  { name: "Microsoft 365", color: "#D83B01" },
  { name: "Dropbox", color: "#0061FF" },
  { name: "Box", color: "#0061D5" },
  { name: "Airtable", color: "#18BFFF" },
  { name: "Coda", color: "#F46A54" },
]

// Simple logo component that creates a stylized initial
export function IntegrationLogo({ name, color, size = 40 }: { name: string; color: string; size?: number }) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  
  return (
    <div 
      className="flex items-center justify-center rounded-xl font-bold text-white transition-all duration-300"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        fontSize: size * 0.35,
      }}
    >
      {initials}
    </div>
  )
}

// Nexify-style marquee component
export function IntegrationMarquee({ 
  speed = 30,
  direction = "left",
  pauseOnHover = true 
}: { 
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean 
}) {
  const row1 = integrationLogos.slice(0, Math.ceil(integrationLogos.length / 2))
  const row2 = integrationLogos.slice(Math.ceil(integrationLogos.length / 2))
  
  return (
    <div className="w-full overflow-hidden py-8">
      {/* Row 1 - Left */}
      <div className={`flex mb-6 ${pauseOnHover ? 'group' : ''}`}>
        <div 
          className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ 
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal"
          }}
        >
          {[...row1, ...row1].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 glass-card px-5 py-3 rounded-xl hover:border-gold/30 transition-all shrink-0 cursor-pointer hover:scale-105"
            >
              <IntegrationLogo name={logo.name} color={logo.color} size={32} />
              <span className="text-text-secondary text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Row 2 - Right */}
      <div className={`flex ${pauseOnHover ? 'group' : ''}`}>
        <div 
          className="flex gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speed * 1.2}s` }}
        >
          {[...row2, ...row2].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 glass-card px-5 py-3 rounded-xl hover:border-gold/30 transition-all shrink-0 cursor-pointer hover:scale-105"
            >
              <IntegrationLogo name={logo.name} color={logo.color} size={32} />
              <span className="text-text-secondary text-sm font-medium whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Grid display for integration page
export function IntegrationGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {integrationLogos.map((logo) => (
        <div 
          key={logo.name}
          className="glass-card p-4 rounded-xl flex flex-col items-center gap-3 hover:border-gold/30 transition-all cursor-pointer group hover:scale-105"
        >
          <IntegrationLogo name={logo.name} color={logo.color} size={48} />
          <span className="text-text-secondary text-xs font-medium text-center group-hover:text-text-primary transition-colors">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  )
}

// Compact logo strip for hero sections
export function IntegrationStrip({ count = 10 }: { count?: number }) {
  const logos = integrationLogos.slice(0, count)
  
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      {logos.map((logo) => (
        <div 
          key={logo.name}
          className="opacity-60 hover:opacity-100 transition-opacity"
          title={logo.name}
        >
          <IntegrationLogo name={logo.name} color={logo.color} size={36} />
        </div>
      ))}
      <span className="text-text-dim text-sm">+{integrationLogos.length - count} more</span>
    </div>
  )
}
