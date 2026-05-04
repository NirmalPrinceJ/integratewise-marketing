'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

// 70+ integrations organized by category
const integrations = [
  // CRM & Sales (12)
  { name: "Salesforce", category: "crm", description: "Sync accounts, contacts, and opportunities" },
  { name: "HubSpot", category: "crm", description: "Customer relationships and pipelines" },
  { name: "Pipedrive", category: "crm", description: "Sales pipeline management" },
  { name: "Microsoft Dynamics", category: "crm", description: "Enterprise CRM integration" },
  { name: "Zoho CRM", category: "crm", description: "Small business CRM" },
  { name: "Close", category: "crm", description: "Inside sales CRM" },
  { name: "Copper", category: "crm", description: "Google Workspace CRM" },
  { name: "Freshsales", category: "crm", description: "AI-powered CRM" },
  { name: "Keap", category: "crm", description: "CRM and marketing automation" },
  { name: "Insightly", category: "crm", description: "Project-centric CRM" },
  { name: "Nimble", category: "crm", description: "Social CRM" },
  { name: "Capsule", category: "crm", description: "Simple online CRM" },
  
  // Customer Success (8)
  { name: "Gainsight", category: "success", description: "Customer success platform" },
  { name: "Totango", category: "success", description: "Customer health & engagement" },
  { name: "Planhat", category: "success", description: "Success team collaboration" },
  { name: "ChurnZero", category: "success", description: "Real-time customer success" },
  { name: "Catalyst", category: "success", description: "Customer growth platform" },
  { name: "Vitally", category: "success", description: "Customer success for B2B SaaS" },
  { name: "ClientSuccess", category: "success", description: "Customer lifecycle management" },
  { name: "Custify", category: "success", description: "Customer success automation" },
  
  // Support & Ticketing (10)
  { name: "Zendesk", category: "support", description: "Customer support platform" },
  { name: "Intercom", category: "support", description: "Customer communication" },
  { name: "Freshdesk", category: "support", description: "Help desk & support" },
  { name: "Jira Service", category: "support", description: "Issue tracking & support" },
  { name: "Help Scout", category: "support", description: "Customer service software" },
  { name: "Front", category: "support", description: "Team inbox & email" },
  { name: "Drift", category: "support", description: "Conversational marketing" },
  { name: "Crisp", category: "support", description: "All-in-one messaging" },
  { name: "LiveChat", category: "support", description: "Live chat software" },
  { name: "Tidio", category: "support", description: "Live chat & chatbots" },
  
  // Communication & Collaboration (8)
  { name: "Slack", category: "communication", description: "Team communication" },
  { name: "Microsoft Teams", category: "communication", description: "Enterprise collaboration" },
  { name: "Discord", category: "communication", description: "Community engagement" },
  { name: "Zoom", category: "communication", description: "Video conferencing" },
  { name: "Google Meet", category: "communication", description: "Video meetings" },
  { name: "Gong", category: "communication", description: "Revenue intelligence" },
  { name: "Chorus", category: "communication", description: "Conversation intelligence" },
  { name: "Loom", category: "communication", description: "Async video messaging" },
  
  // Analytics & BI (10)
  { name: "Mixpanel", category: "analytics", description: "Product analytics" },
  { name: "Segment", category: "analytics", description: "Data collection & routing" },
  { name: "Amplitude", category: "analytics", description: "User behavior analytics" },
  { name: "Tableau", category: "analytics", description: "Business intelligence" },
  { name: "Looker", category: "analytics", description: "Data exploration platform" },
  { name: "Heap", category: "analytics", description: "Digital insights platform" },
  { name: "Pendo", category: "analytics", description: "Product experience platform" },
  { name: "FullStory", category: "analytics", description: "Digital experience intelligence" },
  { name: "Hotjar", category: "analytics", description: "Behavior analytics" },
  { name: "PostHog", category: "analytics", description: "Open source product analytics" },
  
  // Billing & Finance (8)
  { name: "Stripe", category: "billing", description: "Payment processing" },
  { name: "Zuora", category: "billing", description: "Subscription billing" },
  { name: "Chargebee", category: "billing", description: "Recurring billing platform" },
  { name: "NetSuite", category: "billing", description: "Enterprise finance" },
  { name: "QuickBooks", category: "billing", description: "Accounting software" },
  { name: "Xero", category: "billing", description: "Cloud accounting" },
  { name: "Recurly", category: "billing", description: "Subscription management" },
  { name: "ProfitWell", category: "billing", description: "Subscription analytics" },
  
  // Data Warehouses (6)
  { name: "Snowflake", category: "data", description: "Cloud data warehouse" },
  { name: "BigQuery", category: "data", description: "Google analytics warehouse" },
  { name: "Redshift", category: "data", description: "AWS data warehouse" },
  { name: "PostgreSQL", category: "data", description: "Open source database" },
  { name: "Databricks", category: "data", description: "Unified analytics platform" },
  { name: "Fivetran", category: "data", description: "Automated data integration" },
  
  // Productivity (10)
  { name: "Notion", category: "productivity", description: "Knowledge management" },
  { name: "Asana", category: "productivity", description: "Project management" },
  { name: "Monday.com", category: "productivity", description: "Work OS platform" },
  { name: "Linear", category: "productivity", description: "Issue tracking" },
  { name: "Jira", category: "productivity", description: "Agile project management" },
  { name: "GitHub", category: "productivity", description: "Code collaboration" },
  { name: "GitLab", category: "productivity", description: "DevOps platform" },
  { name: "Trello", category: "productivity", description: "Visual project boards" },
  { name: "ClickUp", category: "productivity", description: "All-in-one productivity" },
  { name: "Basecamp", category: "productivity", description: "Project management" },
  
  // Marketing (8)
  { name: "Mailchimp", category: "marketing", description: "Email marketing" },
  { name: "HubSpot Marketing", category: "marketing", description: "Marketing automation" },
  { name: "Marketo", category: "marketing", description: "Enterprise marketing" },
  { name: "Klaviyo", category: "marketing", description: "Email & SMS marketing" },
  { name: "ActiveCampaign", category: "marketing", description: "Customer experience automation" },
  { name: "Braze", category: "marketing", description: "Customer engagement" },
  { name: "Iterable", category: "marketing", description: "Cross-channel marketing" },
  { name: "Customer.io", category: "marketing", description: "Automated messaging" },
]

const categories = [
  { id: 'all', label: 'All Integrations' },
  { id: 'crm', label: 'CRM & Sales' },
  { id: 'success', label: 'Customer Success' },
  { id: 'support', label: 'Support' },
  { id: 'communication', label: 'Communication' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'billing', label: 'Billing' },
  { id: 'data', label: 'Data' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'marketing', label: 'Marketing' },
]

// Featured integrations for the animated marquee
const featuredRow1 = ["Salesforce", "HubSpot", "Slack", "Zendesk", "Intercom", "Notion", "Asana", "Linear", "GitHub", "Stripe"]
const featuredRow2 = ["Segment", "Snowflake", "BigQuery", "Gong", "Zoom", "Jira", "Monday.com", "Gainsight", "Mixpanel", "Amplitude"]

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.category === selectedCategory)

  const getCategoryCount = (id: string) => {
    if (id === 'all') return integrations.length
    return integrations.filter(i => i.category === id).length
  }

  return (
    <div className="min-h-screen bg-bg-main overflow-hidden">
      <Header />
      <main className="pt-24">
        {/* Hero Section - Nexify Style */}
        <section className="relative pt-20 pb-16 px-6">
          {/* Gradient background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-gold/20 via-gold/5 to-transparent blur-3xl" />
            <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute top-60 -right-40 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-gold text-sm font-medium">{integrations.length}+ Integrations Available</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-text-primary">Connect Your</span>
                <br />
                <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Entire Stack
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                IntegrateWise connects to all your favorite tools seamlessly. Your data flows into the Spine, powering unified intelligence.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#integrations" className="group relative bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-xl font-semibold transition-all overflow-hidden">
                  <span className="relative z-10">Browse Integrations</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                <a href="#" className="glass-card px-8 py-4 rounded-xl font-semibold hover:border-gold/40 hover:bg-bg-elevated/50 transition-all backdrop-blur-sm">
                  Request Integration
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Logo Marquee - Nexify Style */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent" />
          
          {/* Row 1 - Left to Right */}
          <div className="relative mb-6">
            <div className="flex animate-marquee-left">
              {[...featuredRow1, ...featuredRow1].map((name, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex-shrink-0 mx-3 px-6 py-3 bg-bg-elevated/60 backdrop-blur-sm border border-white/5 rounded-xl hover:border-gold/30 hover:bg-bg-elevated transition-all group"
                >
                  <span className="text-text-secondary group-hover:text-text-primary transition-colors font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Row 2 - Right to Left */}
          <div className="relative">
            <div className="flex animate-marquee-right">
              {[...featuredRow2, ...featuredRow2].map((name, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex-shrink-0 mx-3 px-6 py-3 bg-bg-elevated/60 backdrop-blur-sm border border-white/5 rounded-xl hover:border-gold/30 hover:bg-bg-elevated transition-all group"
                >
                  <span className="text-text-secondary group-hover:text-text-primary transition-colors font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />
        </section>

        {/* Category Filter - Sticky */}
        <section id="integrations" className="sticky top-20 py-4 px-6 bg-bg-main/80 backdrop-blur-xl border-b border-white/5 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gold text-bg-main shadow-lg shadow-gold/25'
                      : 'bg-bg-elevated/50 text-text-secondary hover:text-text-primary hover:bg-bg-elevated border border-white/5'
                  }`}
                >
                  {category.label}
                  <span className="ml-1.5 opacity-70">({getCategoryCount(category.id)})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Grid - Nexify Card Style */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredIntegrations.map((integration, index) => (
                <div 
                  key={integration.name}
                  className="group relative bg-bg-elevated/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-gold/30 hover:bg-bg-elevated/60 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Logo placeholder - will be replaced with actual logos */}
                    <div className="w-12 h-12 bg-bg-muted/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors border border-white/5">
                      <span className="text-lg font-bold text-text-dim group-hover:text-gold transition-colors">
                        {integration.name.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-semibold text-text-primary mb-1.5 group-hover:text-gold transition-colors">
                      {integration.name}
                    </h3>
                    
                    <p className="text-sm text-text-dim leading-relaxed">
                      {integration.description}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-24">
                <div className="w-16 h-16 bg-bg-elevated rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-text-secondary text-lg">No integrations found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "70+", label: "Integrations" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "<50ms", label: "Sync Latency" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-bg-elevated/30 rounded-2xl border border-white/5">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-text-dim">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Nexify Style */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-gold/15 via-gold/5 to-transparent blur-3xl" />
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {"Don't"} see your tool?
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {"We're"} constantly adding integrations. Request your favorite tool or use our API to build a custom integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="group relative bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-xl font-semibold transition-all overflow-hidden">
                <span className="relative z-10">Request Integration</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a href="#" className="glass-card px-8 py-4 rounded-xl font-semibold hover:border-gold/40 transition-all">
                View API Docs
              </a>
            </div>
          </div>
        </section>

        {/* API & Webhooks - Minimal Cards */}
        <section className="py-16 px-6 bg-bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-elevated/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">REST API</h3>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  Build custom integrations with our comprehensive REST API. Full documentation and SDKs included.
                </p>
                <a href="#" className="text-gold hover:text-gold-light font-semibold inline-flex items-center gap-2 group/link">
                  View Docs 
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-bg-elevated/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-500/20 transition-colors">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Webhooks</h3>
                <p className="text-text-secondary mb-5 leading-relaxed">
                  Real-time event notifications for memory updates, approvals, and actions with delivery guarantees.
                </p>
                <a href="#" className="text-gold hover:text-gold-light font-semibold inline-flex items-center gap-2 group/link">
                  Webhook Guide
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
