export type NavSubItem = {
  label: string
  href: string
  description?: string
}

export type NavItem = {
  label: string
  href: string
  items?: NavSubItem[]
}

export const navItems: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      { label: "Spine", href: "/platform#spine", description: "Unified data foundation" },
      { label: "How It Works", href: "/platform#how-it-works", description: "Platform architecture" },
      { label: "Digital Memory", href: "/platform#digital-memory", description: "Semantic context layer" },
      { label: "Connectors", href: "/platform#connectors", description: "16 live, 40+ in beta" },
      { label: "Security", href: "/platform#security", description: "Enterprise-grade security" },
      { label: "Integrations", href: "/platform#integrations", description: "Browse all integrations" },
    ],
  },
  {
    label: "Product",
    href: "/product",
    items: [
      { label: "Workspace", href: "/product#workspace", description: "Unified workspace" },
      { label: "How It Works", href: "/product#how-it-works", description: "Product workflow" },
      { label: "Digital Memory", href: "/product#digital-memory", description: "Semantic context" },
      { label: "Security", href: "/product#security", description: "Enterprise security" },
    ],
  },
  {
    label: "Intelligence",
    href: "/intelligence",
    items: [
      { label: "Twin", href: "/intelligence#twin", description: "Meet your Twin" },
      { label: "How It Works", href: "/intelligence#how-it-works", description: "The reasoning cycle" },
      { label: "Digital Memory Reference", href: "/intelligence#digital-memory-reference", description: "Memory architecture" },
      { label: "Twin Execution", href: "/intelligence#twin-execution", description: "Execution framework" },
      { label: "Security", href: "/intelligence#security", description: "Safety & control" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "By Use Case", href: "/solutions#by-use-case", description: "Solution by use case" },
      { label: "By Role", href: "/solutions#by-role", description: "Solutions by role" },
      { label: "By Industry", href: "/solutions#by-industry", description: "Industry solutions" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    items: [
      { label: "About", href: "/company#about", description: "Our story & mission" },
      { label: "Manifesto", href: "/company#manifesto", description: "What we believe" },
      { label: "Customer Zero", href: "/company#customer-zero", description: "Built for ourselves first" },
      { label: "Why", href: "/company#why", description: "Why we exist" },
      { label: "Contact", href: "/company#contact", description: "Get in touch" },
    ],
  },
]
