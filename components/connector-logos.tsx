"use client"

import { motion } from "framer-motion"

// SVG Logo components
const ConnectorLogo = {
  salesforce: (
    <svg viewBox="0 0 100 70" className="w-full h-full">
      <path d="M41.6 13.7c3.2-3.3 7.6-5.4 12.5-5.4 6.1 0 11.5 3.2 14.5 8 2.8-1.2 5.8-1.9 9-1.9 12.8 0 23.2 10.4 23.2 23.2s-10.4 23.2-23.2 23.2c-1.6 0-3.2-.2-4.7-.5-2.6 4.8-7.7 8-13.5 8-2.3 0-4.5-.5-6.5-1.4-2.7 5.3-8.2 8.9-14.5 8.9-6.4 0-12-3.7-14.6-9.1-1.3.3-2.7.4-4.1.4-10.7 0-19.4-8.7-19.4-19.4 0-8.2 5.1-15.2 12.3-18-1-2.3-1.6-4.9-1.6-7.6C11 10.1 20.1 1 31.1 1c7.2 0 13.5 3.8 17 9.5" fill="#00A1E0"/>
    </svg>
  ),
  hubspot: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M72.4 33.8v-8.5c3.3-1.6 5.6-5 5.6-8.9 0-5.5-4.5-10-10-10s-10 4.5-10 10c0 3.9 2.3 7.3 5.6 8.9v8.5c-4.2.9-8.1 2.7-11.4 5.3L26.7 19.8c.2-.8.3-1.6.3-2.5 0-6.1-4.9-11-11-11s-11 4.9-11 11 4.9 11 11 11c2.5 0 4.9-.9 6.8-2.3l25.1 19c-3.4 4.7-5.4 10.4-5.4 16.6 0 6.2 2 12 5.4 16.7l-8.4 8.4c-1-.4-2-.6-3.1-.6-5.1 0-9.2 4.1-9.2 9.2s4.1 9.2 9.2 9.2 9.2-4.1 9.2-9.2c0-1.1-.2-2.1-.6-3.1l8.3-8.3c5.1 4 11.5 6.4 18.4 6.4 16.5 0 29.9-13.4 29.9-29.9.1-14.5-10.4-26.6-24.2-29.5zM68 78.3c-10.2 0-18.5-8.3-18.5-18.5S57.8 41.3 68 41.3s18.5 8.3 18.5 18.5S78.2 78.3 68 78.3z" fill="#FF7A59"/>
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M21.3 63.2c0 5.8-4.7 10.5-10.5 10.5S.3 69 .3 63.2s4.7-10.5 10.5-10.5h10.5v10.5zm5.3 0c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5v26.3c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5V63.2z" fill="#E01E5A"/>
      <path d="M37.1 21.3c-5.8 0-10.5-4.7-10.5-10.5S31.3.3 37.1.3s10.5 4.7 10.5 10.5v10.5H37.1zm0 5.2c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5H10.8C5 47.5.3 42.8.3 37s4.7-10.5 10.5-10.5h26.3z" fill="#36C5F0"/>
      <path d="M79.2 37c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5-4.7 10.5-10.5 10.5H79.2V37zm-5.2 0c0 5.8-4.7 10.5-10.5 10.5S53 42.8 53 37V10.8C53 5 57.7.3 63.5.3S74 5 74 10.8V37z" fill="#2EB67D"/>
      <path d="M63.5 79c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5S53 95.3 53 89.5V79h10.5zm0-5.2c-5.8 0-10.5-4.7-10.5-10.5S57.7 52.8 63.5 52.8h26.3c5.8 0 10.5 4.7 10.5 10.5S95.6 73.8 89.8 73.8H63.5z" fill="#ECB22E"/>
    </svg>
  ),
  jira: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="jira-g1" x1="99.7%" y1="15.8%" x2="24.6%" y2="62.1%">
          <stop offset="18%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
      <path d="M95.4 47.2L53.1 4.9 50 1.8l-31.5 31.5-16.7 16.7c-2.4 2.4-2.4 6.2 0 8.5l28.3 28.3L50 106.5l31.5-31.5.2-.2 13.7-13.7c2.4-2.3 2.4-6.1 0-8.5zM50 66.3L37.5 53.8 50 41.3l12.5 12.5L50 66.3z" fill="url(#jira-g1)"/>
    </svg>
  ),
  zendesk: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M46.1 38.5v51.6H0L46.1 38.5zM46.1 9.9C46.1 22.7 35.8 33 23 33S0 22.7 0 9.9h46.1zM53.9 61.5V9.9H100L53.9 61.5zM53.9 90.1C53.9 77.3 64.2 67 77 67s23 10.3 23 23.1H53.9z" fill="#03363D"/>
    </svg>
  ),
  intercom: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm-25 62.5V37.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zm15 7.5V30c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v40c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zm15 0V30c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v40c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5zm15-7.5V37.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v25c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5z" fill="#1F8DED"/>
    </svg>
  ),
  notion: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M6.2 7.6c3.4 2.8 4.7 2.6 11.2 2.2l60.9-3.7c1.3 0 .2-1.3-.2-1.5L68.9.2C66.6-1.5 63.5-1.1 60.5-.9l-51.8 3.7C5.3 3.1 4.6 4.6 6.2 7.6zM17.5 20.3v64c0 3.5 1.7 4.8 5.7 4.6l66.5-3.9c3.9-.2 4.3-2.6 4.3-5.3V16.3c0-2.6-1.1-4.1-3.5-3.9l-69.3 4.1c-2.6.2-3.7 1.3-3.7 3.8z" fill="#fff"/>
    </svg>
  ),
  asana: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="72.4" cy="75.4" r="24.6" fill="#F06A6A"/>
      <circle cx="27.6" cy="75.4" r="24.6" fill="#F06A6A"/>
      <circle cx="50" cy="27.6" r="24.6" fill="#F06A6A"/>
    </svg>
  ),
  linear: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M1.2 58.5a49.5 49.5 0 0 0 40.4 40.3L1.2 58.5zm-1-7.4a50 50 0 0 0 5.9 27.5l21.6-21.6a25 25 0 0 1 20.8-20.8L70 14.7A50 50 0 0 0 .2 51.1zm98.6-2.2a50 50 0 0 0-84.6-35l35 35h49.6zM50 0a50 50 0 0 0-35.8 85L85 14.2A49.8 49.8 0 0 0 50 0z" fill="#5E6AD2"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0C22.4 0 0 22.4 0 50c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2 0-4.3-.1-8.5-13.9 3-16.8-6.7-16.8-6.7-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 .4 7.6 5.1 7.6 5.1 4.5 7.7 11.7 5.5 14.6 4.2.5-3.3 1.8-5.5 3.2-6.7-11.1-1.3-22.8-5.6-22.8-24.7 0-5.5 1.9-9.9 5.1-13.4-.5-1.3-2.2-6.4.5-13.2 0 0 4.2-1.3 13.7 5.1 4-1.1 8.3-1.7 12.5-1.7 4.2 0 8.5.6 12.5 1.7 9.5-6.4 13.7-5.1 13.7-5.1 2.7 6.9 1 12 .5 13.2 3.2 3.5 5.1 7.9 5.1 13.4 0 19.2-11.7 23.4-22.8 24.6 1.8 1.5 3.4 4.6 3.4 9.2 0 6.7-.1 12-.1 13.7 0 1.3.9 2.9 3.4 2.4C85.7 90.8 100 72.1 100 50 100 22.4 77.6 0 50 0z" fill="#fff"/>
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 100 42" className="w-full h-full">
      <path d="M10.4 13.6c0-1.5 1.2-2.1 3.2-2.1 2.9 0 6.5.9 9.4 2.4V6.1C19.9 4.8 16.8 4 13.6 4 5.4 4 0 8.2 0 14.8c0 10.3 14.1 8.6 14.1 13 0 1.7-1.5 2.3-3.6 2.3-3.1 0-7.1-1.3-10.2-3v8c3.5 1.5 7 2.1 10.2 2.1 8.4 0 14.2-4.2 14.2-10.8-.1-11.1-14.3-9.1-14.3-12.8z" fill="#6772E5"/>
    </svg>
  ),
  segment: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M58.1 24.3H6.4c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h51.7c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM93.6 53.4H41.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2h51.7c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2z" fill="#52BD94"/>
    </svg>
  ),
  google: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M91.2 42.2H50v16.1h23.7c-2.4 12.8-13.3 18.4-23.6 18.4-14.3 0-26.3-11.5-26.3-26.2 0-14.4 11.7-26.2 26.3-26.2 9.5 0 15.4 4 18.9 7.4l11.4-11.5C72.5 12.7 62.4 7.3 50.1 7.3c-23.7 0-42.9 18.7-42.9 42.7s19.2 42.7 42.9 42.7c24.9 0 41.5-17.5 41.5-42.1 0-3.7-.5-6.4-.4-8.4z" fill="#4285F4"/>
    </svg>
  ),
  microsoft: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path fill="#F25022" d="M0 0h47.6v47.6H0z"/>
      <path fill="#7FBA00" d="M52.4 0H100v47.6H52.4z"/>
      <path fill="#00A4EF" d="M0 52.4h47.6V100H0z"/>
      <path fill="#FFB900" d="M52.4 52.4H100V100H52.4z"/>
    </svg>
  ),
  zoom: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#2D8CFF"/>
      <path d="M73.5 62.5c1 .7 2.2.4 2.7-.5.3-.5.3-1 .3-1.5V39.5c0-1.2-1.3-2-2.3-1.3l-11.7 7.5v8.7l11 8.1zM23.5 37.5h32.3c2.4 0 4.2 1.9 4.2 4.3v16.4c0 2.4-1.9 4.3-4.2 4.3H23.5c-2.4 0-4.2-1.9-4.2-4.3V41.8c0-2.4 1.9-4.3 4.2-4.3z" fill="#fff"/>
    </svg>
  ),
  gong: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="50" fill="#7C3AED"/>
      <path d="M50 25c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 40c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z" fill="#fff"/>
      <circle cx="50" cy="50" r="8" fill="#fff"/>
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 0L50 100M25 14.4L75 85.6M75 14.4L25 85.6M0 50L100 50M14.4 25L85.6 75M14.4 75L85.6 25" stroke="#29B5E8" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <circle cx="50" cy="50" r="12" fill="#29B5E8"/>
    </svg>
  ),
  bigquery: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M38 62.5l-16.5 16.5 4 4L42 66.5" fill="#4386FA"/>
      <path d="M50 20c-16.5 0-30 13.5-30 30 0 7.7 3 14.8 7.8 20.2L42 56c-3.7-2.6-6-6.9-6-11.7 0-7.7 6.3-14 14-14s14 6.3 14 14c0 4.8-2.4 9.1-6 11.7l14.2 14.2C77 64.8 80 57.7 80 50c0-16.5-13.5-30-30-30z" fill="#4386FA"/>
      <circle cx="50" cy="51" r="6" fill="#4386FA"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M80.5 44.2c-.8-5-3.6-9-7.9-11.5.5-2.1.8-4.4.8-6.8C73.4 11.7 62.3 0 48.6 0c-6.4 0-12.3 2.5-17.1 7-2.3-.5-4.7-.8-7.2-.8C10.8 6.2 0 18.2 0 33.1c0 5.6 1.3 10.9 3.7 15.6-2.4 4.1-3.7 8.8-3.7 13.7C0 81.1 15.5 96.6 34.2 96.6c5.1 0 10-1.1 14.5-3.1 4.5 4.1 10.4 6.5 16.7 6.5 13.9 0 25.3-11.4 25.3-25.4 0-3-.5-5.9-1.4-8.7 6-4.7 9.5-12 9.5-19.8 0-1.2-.1-2.4-.3-3.9z" fill="#336791"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5z" fill="#00758F"/>
      <path d="M35 32L25 60l-5-15-5 15-10-28h7l5 15 5-15h6z" fill="#F29111"/>
    </svg>
  ),
}

const connectorData = [
  { name: "Salesforce", logo: ConnectorLogo.salesforce },
  { name: "HubSpot", logo: ConnectorLogo.hubspot },
  { name: "Slack", logo: ConnectorLogo.slack },
  { name: "Jira", logo: ConnectorLogo.jira },
  { name: "Zendesk", logo: ConnectorLogo.zendesk },
  { name: "Intercom", logo: ConnectorLogo.intercom },
  { name: "Notion", logo: ConnectorLogo.notion },
  { name: "Asana", logo: ConnectorLogo.asana },
  { name: "Linear", logo: ConnectorLogo.linear },
  { name: "GitHub", logo: ConnectorLogo.github },
  { name: "Stripe", logo: ConnectorLogo.stripe },
  { name: "Segment", logo: ConnectorLogo.segment },
  { name: "Google Workspace", logo: ConnectorLogo.google },
  { name: "Microsoft 365", logo: ConnectorLogo.microsoft },
  { name: "Zoom", logo: ConnectorLogo.zoom },
  { name: "Gong", logo: ConnectorLogo.gong },
  { name: "Snowflake", logo: ConnectorLogo.snowflake },
  { name: "BigQuery", logo: ConnectorLogo.bigquery },
  { name: "PostgreSQL", logo: ConnectorLogo.postgresql },
  { name: "MySQL", logo: ConnectorLogo.mysql },
]

export function ConnectorLogosGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {connectorData.map((connector, index) => (
        <motion.div
          key={connector.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.03 }}
          viewport={{ once: true }}
          className="glass-card px-4 py-4 rounded-xl text-sm text-text-secondary flex items-center gap-3 hover:border-gold/30 transition-all group"
        >
          <div className="w-8 h-8 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            {connector.logo}
          </div>
          <span className="group-hover:text-text-primary transition-colors truncate">{connector.name}</span>
        </motion.div>
      ))}
    </div>
  )
}

export { connectorData, ConnectorLogo }
