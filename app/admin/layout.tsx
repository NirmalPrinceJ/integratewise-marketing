import type React from "react"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/admin/auth"
import { LayoutDashboard, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PRIMARY_HUBS, SECONDARY_NAV } from "@/lib/admin/hub-config"
import Image from "next/image"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#E5E7EB] bg-white flex flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-[#E5E7EB] px-4">
          <Link href="/admin" className="flex items-center gap-2">
            <Image
              src="/images/integrateway-logo-markonly-transparent-256px-v1.webp"
              alt="IntegrateWise"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-bold text-[#1E2A4A]">IntegrateWise</span>
          </Link>
        </div>

        {/* User info */}
        <div className="p-4 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#3F51B5]/10 flex items-center justify-center">
              <span className="text-[#3F51B5] font-semibold text-sm">{user.name?.charAt(0).toUpperCase()}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-[#1E2A4A]">{user.name}</p>
              <p className="truncate text-xs text-[#6B7280] capitalize">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          {/* Dashboard */}
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#1E2A4A] transition-colors hover:bg-[#F3F4F6] mb-4"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>

          {/* Primary Hubs */}
          <div className="mb-4">
            <p className="px-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">Hubs</p>
            <div className="space-y-1">
              {PRIMARY_HUBS.map((hub) => (
                <Link
                  key={hub.id}
                  href={hub.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#4B5563] transition-colors hover:bg-[#F3F4F6] hover:text-[#3F51B5]"
                >
                  <hub.icon className={`h-5 w-5 ${hub.color}`} />
                  {hub.name.replace(" Hub", "")}
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary Nav */}
          <div>
            <p className="px-3 text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">Workspace</p>
            <div className="space-y-1">
              {SECONDARY_NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#4B5563] transition-colors hover:bg-[#F3F4F6] hover:text-[#3F51B5]"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Sign out */}
        <div className="p-4 border-t border-[#E5E7EB]">
          <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-[#6B7280] hover:text-[#1E2A4A]">
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-8">{children}</div>
      </main>
    </div>
  )
}
