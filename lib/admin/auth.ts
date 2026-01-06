import { cookies } from "next/headers"

export type UserRole = "admin" | "editor" | "viewer"

export interface CMSUser {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
}

// Simple session management for v0 demo - in production use NextAuth or similar
export async function getCurrentUser(): Promise<CMSUser | null> {
  const cookieStore = await cookies()
  const session = cookieStore.get("cms_session")

  if (!session) return null

  // Mock user for demo - replace with real auth
  return {
    id: "1",
    email: "editor@integratewise.com",
    name: "Content Editor",
    role: "editor",
    avatar: "/placeholder.svg?height=40&width=40",
  }
}

export async function hasPermission(user: CMSUser | null, action: "read" | "write" | "publish"): Promise<boolean> {
  if (!user) return false

  if (user.role === "admin") return true
  if (user.role === "editor" && (action === "read" || action === "write")) return true
  if (user.role === "viewer" && action === "read") return true

  return false
}

export function requireAuth() {
  // Middleware or layout component to protect admin routes
  return async () => {
    const user = await getCurrentUser()
    if (!user) {
      throw new Error("Unauthorized")
    }
    return user
  }
}
