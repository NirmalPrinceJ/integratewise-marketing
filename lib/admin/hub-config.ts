import {
  DollarSign,
  Megaphone,
  Settings2,
  Cpu,
  Users,
  FileText,
  Globe,
  Briefcase,
  Wrench,
  Package,
  CheckSquare,
  BookOpen,
  Database,
  Plug,
  Bot,
  Settings,
  type LucideIcon,
} from "lucide-react"
import type { HubType } from "@/lib/cms/types"

export interface HubConfig {
  id: HubType
  name: string
  icon: LucideIcon
  href: string
  description: string
  color: string
}

// Global nav fixed order per SSOT v3.2
export const PRIMARY_HUBS: HubConfig[] = [
  {
    id: "sales",
    name: "Sales Hub",
    icon: DollarSign,
    href: "/admin/hubs/sales",
    description: "Pipeline, deals, and revenue tracking",
    color: "text-green-600",
  },
  {
    id: "marketing",
    name: "Marketing Hub",
    icon: Megaphone,
    href: "/admin/hubs/marketing",
    description: "Campaigns, assets, and performance",
    color: "text-purple-600",
  },
  {
    id: "operations",
    name: "Operations Hub",
    icon: Settings2,
    href: "/admin/hubs/operations",
    description: "Projects, processes, and workflows",
    color: "text-orange-600",
  },
  {
    id: "technology",
    name: "Technology Hub",
    icon: Cpu,
    href: "/admin/hubs/technology",
    description: "Systems, integrations, and architecture",
    color: "text-blue-600",
  },
  {
    id: "customer-success",
    name: "Customer Success Hub",
    icon: Users,
    href: "/admin/hubs/customer-success",
    description: "Health scores, renewals, and support",
    color: "text-teal-600",
  },
  {
    id: "content",
    name: "Content Hub",
    icon: FileText,
    href: "/admin/hubs/content",
    description: "Articles, case studies, and assets",
    color: "text-pink-600",
  },
  {
    id: "website",
    name: "Website Hub",
    icon: Globe,
    href: "/admin/hubs/website",
    description: "Pages, SEO, and publishing",
    color: "text-indigo-600",
  },
]

export interface SecondaryNavItem {
  name: string
  icon: LucideIcon
  href: string
}

export const SECONDARY_NAV: SecondaryNavItem[] = [
  { name: "Clients", icon: Briefcase, href: "/admin/clients" },
  { name: "Services", icon: Wrench, href: "/admin/services" },
  { name: "Products", icon: Package, href: "/admin/products" },
  { name: "Tasks", icon: CheckSquare, href: "/admin/tasks" },
  { name: "Knowledge Hub", icon: BookOpen, href: "/admin/knowledge" },
  { name: "Data Sources", icon: Database, href: "/admin/data-sources" },
  { name: "Integrations", icon: Plug, href: "/admin/integrations" },
  { name: "AI Assistant", icon: Bot, href: "/admin/ai" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
]

export function getHubConfig(hubId: HubType): HubConfig | undefined {
  return PRIMARY_HUBS.find((h) => h.id === hubId)
}
