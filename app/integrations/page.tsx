'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const integrations = [
    // CRM & Sales
    { name: "Salesforce", category: "crm", icon: "fa-cloud", description: "Sync accounts, contacts, and opportunities", color: "blue" },
    { name: "HubSpot", category: "crm", icon: "fa-link", description: "Customer relationships and pipelines", color: "orange" },
    { name: "Pipedrive", category: "crm", icon: "fa-chart-line", description: "Sales pipeline management", color: "purple" },
    { name: "Microsoft Dynamics", category: "crm", icon: "fa-building", description: "Enterprise CRM integration", color: "blue" },
    
    // Customer Success
    { name: "Gainsight", category: "success", icon: "fa-handshake", description: "Customer success platform", color: "gold" },
    { name: "Totango", category: "success", icon: "fa-chart-pie", description: "Customer health & engagement", color: "green" },
    { name: "Planhat", category: "success", icon: "fa-star", description: "Success team collaboration", color: "purple" },
    
    // Support & Ticketing
    { name: "Zendesk", category: "support", icon: "fa-headset", description: "Customer support platform", color: "green" },
    { name: "Intercom", category: "support", icon: "fa-comments", description: "Customer communication", color: "blue" },
    { name: "Freshdesk", category: "support", icon: "fa-envelope", description: "Help desk & support", color: "orange" },
    { name: "Jira Service", category: "support", icon: "fa-tasks", description: "Issue tracking & support", color: "blue" },
    
    // Communication & Collaboration
    { name: "Slack", category: "communication", icon: "fa-slack", description: "Team communication", color: "purple" },
    { name: "Microsoft Teams", category: "communication", icon: "fa-people-group", description: "Enterprise collaboration", color: "blue" },
    { name: "Discord", category: "communication", icon: "fa-discord", description: "Community engagement", color: "purple" },
    
    // Analytics & BI
    { name: "Mixpanel", category: "analytics", icon: "fa-chart-bar", description: "Product analytics", color: "gold" },
    { name: "Segment", category: "analytics", icon: "fa-sitemap", description: "Data collection & routing", color: "green" },
    { name: "Amplitude", category: "analytics", icon: "fa-wave-square", description: "User behavior analytics", color: "blue" },
    { name: "Tableau", category: "analytics", icon: "fa-chart-area", description: "Business intelligence", color: "orange" },
    
    // Billing & Finance
    { name: "Stripe", category: "billing", icon: "fa-credit-card", description: "Payment processing", color: "blue" },
    { name: "Zuora", category: "billing", icon: "fa-receipt", description: "Subscription billing", color: "green" },
    { name: "Chargebee", category: "billing", icon: "fa-coins", description: "Recurring billing platform", color: "orange" },
    { name: "NetSuite", category: "billing", icon: "fa-building", description: "Enterprise finance", color: "red" },
    
    // Data Warehouses
    { name: "Snowflake", category: "data", icon: "fa-snowflake", description: "Cloud data warehouse", color: "blue" },
    { name: "BigQuery", category: "data", icon: "fa-database", description: "Google analytics warehouse", color: "orange" },
    { name: "Redshift", category: "data", icon: "fa-server", description: "AWS data warehouse", color: "orange" },
    
    // Productivity
    { name: "Notion", category: "productivity", icon: "fa-note-sticky", description: "Knowledge management", color: "gray" },
    { name: "Asana", category: "productivity", icon: "fa-list-check", description: "Project management", color: "blue" },
    { name: "Monday.com", category: "productivity", icon: "fa-calendar", description: "Work OS platform", color: "purple" },
    
    // Marketing
    { name: "Mailchimp", category: "marketing", icon: "fa-envelope-circle-check", description: "Email marketing", color: "gold" },
    { name: "HubSpot Marketing", category: "marketing", icon: "fa-bullhorn", description: "Marketing automation", color: "orange" },
    { name: "Marketo", category: "marketing", icon: "fa-megaphone", description: "Enterprise marketing", color: "red" },
  ]

  const categories = [
    { id: 'all', label: 'All Integrations', count: integrations.length },
    { id: 'crm', label: 'CRM & Sales', count: integrations.filter(i => i.category === 'crm').length },
    { id: 'success', label: 'Customer Success', count: integrations.filter(i => i.category === 'success').length },
    { id: 'support', label: 'Support & Ticketing', count: integrations.filter(i => i.category === 'support').length },
    { id: 'communication', label: 'Communication', count: integrations.filter(i => i.category === 'communication').length },
    { id: 'analytics', label: 'Analytics & BI', count: integrations.filter(i => i.category === 'analytics').length },
    { id: 'billing', label: 'Billing & Finance', count: integrations.filter(i => i.category === 'billing').length },
    { id: 'data', label: 'Data Warehouses', count: integrations.filter(i => i.category === 'data').length },
    { id: 'productivity', label: 'Productivity', count: integrations.filter(i => i.category === 'productivity').length },
    { id: 'marketing', label: 'Marketing', count: integrations.filter(i => i.category === 'marketing').length },
  ]

  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.category === selectedCategory)

  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 hero-glow pointer-events-none"></div>
          <div className="absolute top-40 right-20 w-96 h-96 blob-bg blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-bg-elevated/50 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <i className="fa-solid fa-puzzle-piece text-gold"></i>
                <span className="text-text-secondary text-sm">16 live, 40+ in beta</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Connect Your
                <br />
                <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Entire Stack
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
                IntegrateWise connects to all your favorite tools. Your data flows seamlessly into the Spine, powering unified intelligence across your entire business.
              </p>

              <div className="flex justify-center gap-4">
                <a href="#" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold transition-all gold-glow">
                  View API Docs
                </a>
                <a href="#" className="glass-card px-8 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                  Request Integration
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-24 py-6 px-6 bg-bg-main/95 backdrop-blur-xl border-b border-white/5 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gold text-bg-main'
                      : 'glass-card text-text-secondary hover:text-text-primary border-white/10'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredIntegrations.map((integration) => (
                <div 
                  key={integration.name}
                  className="glass-card rounded-2xl p-6 hover:border-gold/30 transition-all group cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-${integration.color}-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${integration.color}-500/20 transition-colors`}>
                    <i className={`fa-solid ${integration.icon} text-${integration.color}-400 text-2xl`}></i>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gold transition-colors">
                    {integration.name}
                  </h3>
                  
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {integration.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-text-dim uppercase tracking-wider">Learn more</span>
                    <i className="fa-solid fa-arrow-right text-text-dim group-hover:text-gold transition-colors"></i>
                  </div>
                </div>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-24">
                <i className="fa-solid fa-circle-info text-gold text-5xl mb-4"></i>
                <p className="text-text-secondary text-lg">No integrations found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* Custom Integration CTA */}
        <section className="py-24 px-6 bg-bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-6">Don't see your tool?</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              We&apos;re constantly adding integrations. Request your favorite tool or use our API to build a custom integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-gold hover:bg-gold-light text-bg-main px-8 py-4 rounded-lg font-semibold transition-all gold-glow">
                Request Integration
              </a>
              <a href="#" className="glass-card px-8 py-4 rounded-lg font-semibold hover:border-gold/30 transition-all">
                Build Custom Integration
              </a>
            </div>
          </div>
        </section>

        {/* API & Webhook Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass-card rounded-2xl p-8 border-gold/20">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-code text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">REST API</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Build custom integrations with our comprehensive REST API. Full documentation, SDKs, and code samples included.
                </p>
                <a href="#" className="text-gold hover:text-gold-light font-semibold flex items-center gap-2">
                  View API Docs <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 border-purple-500/20">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-webhook text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Webhooks</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Real-time event notifications for memory updates, approvals, and actions. Webhook security and delivery guarantees.
                </p>
                <a href="#" className="text-gold hover:text-gold-light font-semibold flex items-center gap-2">
                  Webhook Guide <i className="fa-solid fa-arrow-right"></i>
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
