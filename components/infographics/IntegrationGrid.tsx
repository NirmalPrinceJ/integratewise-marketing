import { Logo } from "@/components/Logo"

interface IntegrationGridProps {
  items: { name: string; status?: "native" | "beta" | "planned" }[]
}

export function IntegrationGrid({ items }: IntegrationGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
      {items.map((item) => (
        <div
          key={item.name}
          className="relative flex items-center justify-center rounded-lg p-4 transition-all hover:shadow-md"
          style={{ background: "#F3F4F6", border: "1px solid #C5CAE9" }}
        >
          <Logo name={item.name} className="h-12 w-auto sm:h-16" />
          {item.status === "beta" && (
            <span
              className="absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-medium"
              style={{ background: "#F54476", color: "#FFFFFF" }}
            >
              Beta
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
