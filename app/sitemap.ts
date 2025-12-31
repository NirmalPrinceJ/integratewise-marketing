import { MetadataRoute } from "next"

const baseUrl = "https://www.integratewise.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/platform", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/integrations", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/templates", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/demo", priority: 0.8, changeFrequency: "monthly" as const },
    
    // Solutions
    { url: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solutions/individuals", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/solutions/teams", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/solutions/business-ops", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/solutions/customer-success", priority: 0.7, changeFrequency: "monthly" as const },
    
    // Services
    { url: "/services", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/services/assessments", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/services/implementations", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/services/managed-ops", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/services/training", priority: 0.6, changeFrequency: "monthly" as const },
    
    // Security
    { url: "/security", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/security/privacy", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/security/compliance", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/security/datasentinel", priority: 0.6, changeFrequency: "monthly" as const },
    
    // Docs
    { url: "/docs", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/docs/quickstart", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/docs/webhooks", priority: 0.7, changeFrequency: "weekly" as const },
    
    // Resources
    { url: "/resources/docs", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/resources/blog", priority: 0.7, changeFrequency: "daily" as const },
    { url: "/resources/changelog", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/resources/api", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/resources/case-studies", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/resources/community", priority: 0.6, changeFrequency: "monthly" as const },
    
    // Company
    { url: "/company/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/company/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/company/careers", priority: 0.5, changeFrequency: "weekly" as const },
    
    // Product
    { url: "/product", priority: 0.8, changeFrequency: "weekly" as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
