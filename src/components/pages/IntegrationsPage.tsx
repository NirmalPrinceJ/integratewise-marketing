import { motion, AnimatePresence } from "motion/react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "../motion/AnimateIn";
import {
  Search,
  ArrowRight,
  ArrowLeftRight,
  ArrowDown,
  ArrowUp,
  Zap,
  Link2,
  Shield,
} from "lucide-react";
import { NetworkIllustration } from "../CustomIllustrations";
import {
  QuickBooksLogo,
  SalesforceLogo,
  WhatsAppLogo,
  StripeLogo,
  FreshworksLogo,
  ShopifyLogo,
  GoogleSheetsLogo,
  MSTeamsLogo,
  SlackLogo,
  ExcelLogo,
  APILogo,
} from "../ToolLogos";

type Integration = {
  name: string;
  logo: string | React.FC<{ size?: number }>;
  category: string;
  shortDesc: string;
  direction: "Read" | "Write" | "Bi-directional";
  entities: string[];
  usedBy: string[];
};

const integrations: Integration[] = [
  {
    name: "QuickBooks",
    logo: QuickBooksLogo,
    category: "Accounting",
    shortDesc: "Auto-sync invoices, ledgers, and tax data. Bi-directional — update in IntegrateWise, QuickBooks updates too.",
    direction: "Bi-directional",
    entities: ["Invoices", "Ledgers", "Stock Items", "Tax Reports"],
    usedBy: ["Accountant", "Founder"],
  },
  {
    name: "Salesforce",
    logo: SalesforceLogo,
    category: "CRM",
    shortDesc: "Sync leads, contacts, deals, and customer data into one unified view with your accounting and messaging tools.",
    direction: "Bi-directional",
    entities: ["Leads", "Contacts", "Deals", "Tasks"],
    usedBy: ["Sales", "Founder"],
  },
  {
    name: "WhatsApp Business",
    logo: WhatsAppLogo,
    category: "Communication",
    shortDesc: "Connect via QR code. Every customer chat linked to their invoices and payment history automatically.",
    direction: "Bi-directional",
    entities: ["Messages", "Contacts", "Media", "Labels"],
    usedBy: ["Sales", "Support", "Founder"],
  },
  {
    name: "Stripe",
    logo: StripeLogo,
    category: "Payments",
    shortDesc: "Auto-reconcile payments with invoices. Real-time payment notifications and collection links.",
    direction: "Read",
    entities: ["Payments", "Invoices", "Subscriptions", "Refunds"],
    usedBy: ["Accountant", "Founder"],
  },
  {
    name: "Freshworks",
    logo: FreshworksLogo,
    category: "CRM",
    shortDesc: "Connect Freshsales, Freshdesk, or Freshservice for unified customer support and sales tracking.",
    direction: "Bi-directional",
    entities: ["Tickets", "Contacts", "Deals", "Companies"],
    usedBy: ["Sales", "Support"],
  },
  {
    name: "Shopify",
    logo: ShopifyLogo,
    category: "E-Commerce",
    shortDesc: "Sync online orders, inventory, and customer data. Stock levels auto-update across all channels.",
    direction: "Read",
    entities: ["Orders", "Products", "Customers", "Inventory"],
    usedBy: ["Sales", "Operations"],
  },
  {
    name: "Google Sheets",
    logo: GoogleSheetsLogo,
    category: "Data",
    shortDesc: "Import customer lists, order tracking, and historical data. Auto-sync with live workspace.",
    direction: "Bi-directional",
    entities: ["Sheets", "Rows", "Formulas"],
    usedBy: ["All Teams"],
  },
  {
    name: "Microsoft Teams",
    logo: MSTeamsLogo,
    category: "Communication",
    shortDesc: "Use IntegrateWise inside Teams. Your operations team stays in Teams but sees live data from all tools.",
    direction: "Write",
    entities: ["Channels", "Messages", "Notifications"],
    usedBy: ["Operations", "Management"],
  },
  {
    name: "Excel / CSV Upload",
    logo: ExcelLogo,
    category: "Data",
    shortDesc: "Drag and drop your customer lists, order history, or inventory. We clean, deduplicate, and normalize.",
    direction: "Read",
    entities: ["Spreadsheets", "Customer Lists", "Inventory Data"],
    usedBy: ["All Teams"],
  },
  {
    name: "Slack",
    logo: SlackLogo,
    category: "Communication",
    shortDesc: "Get business alerts, payment notifications, and stock warnings directly in your Slack channels.",
    direction: "Write",
    entities: ["Channels", "Messages", "Webhooks"],
    usedBy: ["All Teams"],
  },
  {
    name: "Custom API",
    logo: APILogo,
    category: "Custom",
    shortDesc: "Connect any internal system via a simple API. Your developer writes once, integrates forever.",
    direction: "Bi-directional",
    entities: ["Custom entities"],
    usedBy: ["Engineering", "Operations"],
  },
];

const directionIcons = {
  Read: ArrowDown,
  Write: ArrowUp,
  "Bi-directional": ArrowLeftRight,
};

export function IntegrationsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(integrations.map((i) => i.category))),
  ];

  const filtered = integrations.filter(
    (i) =>
      (activeCategory === "All" || i.category === activeCategory) &&
      (search === "" ||
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.shortDesc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#F0FDF6] via-[#F4FCF8] to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-[#E6FBF1] to-transparent opacity-70" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="text-[#0EA775] bg-white hover:bg-emerald-50 border-emerald-200 px-4 py-1.5 text-sm font-medium rounded-full shadow-sm mb-6">
              <span className="text-[#0EA775] mr-2 text-base leading-none">✨</span>
              Integrations Hub
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#0f1a15]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            One Login. <span className="text-[#0EA775]">Every Tool Connected.</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            200+ connectors. Your accounting, CRM, messaging, payments, e-commerce — all unified. Update once, sync everywhere.
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border bg-white shadow-lg overflow-hidden aspect-[16/9] max-h-[300px]">
              <NetworkIllustration />
            </div>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search integrations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((integration) => {
                const DirIcon = directionIcons[integration.direction];
                const isHovered = hoveredCard === integration.name;

                return (
                  <motion.div
                    key={integration.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card
                        className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                        onMouseEnter={() => setHoveredCard(integration.name)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                              {typeof integration.logo === "string" ? (
                                <span className="text-sm group-hover:text-primary-foreground transition-colors">{integration.logo}</span>
                              ) : (
                                <integration.logo size={32} />
                              )}
                            </div>
                            <div>
                              <h3 className="text-sm">{integration.name}</h3>
                              <Badge variant="outline" className="text-xs mt-1">
                                {integration.category}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mb-4">
                            {integration.shortDesc}
                          </p>

                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 border-t space-y-3">
                                  <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted text-xs">
                                      <DirIcon className="h-3 w-3" />
                                      {integration.direction}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Entities:</p>
                                    <div className="flex flex-wrap gap-1">
                                      {integration.entities.map((e) => (
                                        <span
                                          key={e}
                                          className="px-1.5 py-0.5 bg-muted rounded text-xs"
                                        >
                                          {e}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground mb-1">Used by:</p>
                                    <div className="flex flex-wrap gap-1">
                                      {integration.usedBy.map((u) => (
                                        <span
                                          key={u}
                                          className="px-1.5 py-0.5 bg-primary/5 rounded text-xs"
                                        >
                                          {u}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <FadeIn className="text-center py-16 text-muted-foreground">
              <p>No integrations found. Try a different search or category.</p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* How Integrations Work */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl tracking-tight mb-4">How Integrations Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every integration follows the same secure, governed pattern — connect, clean, and protect.
              </p>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
              {[
                {
                  icon: Link2,
                  title: "Connect in Minutes",
                  desc: "One-click sign-in for cloud tools, QR code for messaging, drag-drop for spreadsheets. No engineers needed.",
                },
                {
                  icon: Zap,
                  title: "Auto-Clean & Match",
                  desc: "Data is automatically cleaned and matched. 'R. Chen' in your CRM becomes 'Rachel Chen' in your chat app. One person, everywhere.",
                },
                {
                  icon: Shield,
                  title: "Your Data Stays Yours",
                  desc: "All data stays in your chosen region. Encrypted everywhere. Disconnect any tool anytime — your data stays with you.",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 3 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <item.icon className="h-8 w-8 mx-auto mb-3" />
                        </motion.div>
                        <h4 className="text-sm mb-2">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0EA775] text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Don't see your tool? We're adding more every week.
            </h2>
            <p className="text-emerald-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Plus, the Custom API connector lets you bring any internal system
              into the workspace. Your developer writes once, integrates forever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/app" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#111827] hover:bg-black text-white font-bold text-lg transition-all shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-all w-full sm:w-auto">
                Request an Integration
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}