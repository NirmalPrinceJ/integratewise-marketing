import OsNavbar from "@/components/os/os-navbar"
import SettingsForm from "@/components/settings/settings-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Settings",
  description: "Usage caps and privacy mode for IntegrateWise OS.",
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <OsNavbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-3 text-muted-foreground">
          Configure on‑demand usage and privacy mode. These settings apply to your OS experience.
        </p>
        <div className="mt-8">
          <SettingsForm />
        </div>
      </main>
    </div>
  )
}

