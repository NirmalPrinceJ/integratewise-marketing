import Link from "next/link"
import { ArrowRight, Code, Key, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DocsApiPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            API Reference
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Complete API documentation for IntegrateWise, including endpoints, authentication, and SDK examples.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">Base URL</h2>
            <div className="not-prose my-4">
              <Card className="border-border bg-muted/30">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Production</Badge>
                      <code className="text-sm">https://api.integratewise.co/v1</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Preview</Badge>
                      <code className="text-sm">https://preview-api.integratewise.co/v1</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Authentication</h2>
            <p className="text-muted-foreground">
              All API requests require authentication via one of the following methods:
            </p>

            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">OAuth2 Bearer Token</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <code>Authorization: Bearer &lt;token&gt;</code>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">API Key</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <code>X-API-Key: &lt;api-key&gt;</code>
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Core Endpoints</h2>

            <div className="not-prose my-6 space-y-4">
              {[
                {
                  method: "GET",
                  path: "/v1/tasks",
                  description: "List all tasks with filtering and pagination",
                },
                {
                  method: "POST",
                  path: "/v1/tasks",
                  description: "Create a new task",
                },
                {
                  method: "GET",
                  path: "/v1/tasks/{id}",
                  description: "Get a specific task by ID",
                },
                {
                  method: "PATCH",
                  path: "/v1/tasks/{id}",
                  description: "Update a task",
                },
                {
                  method: "GET",
                  path: "/v1/notes",
                  description: "List all notes",
                },
                {
                  method: "POST",
                  path: "/v1/notes",
                  description: "Create a new note",
                },
                {
                  method: "GET",
                  path: "/v1/conversations",
                  description: "List conversations from connected tools",
                },
                {
                  method: "GET",
                  path: "/v1/plans",
                  description: "List plans with milestones",
                },
                {
                  method: "POST",
                  path: "/v1/agents/{agent_id}/invoke",
                  description: "Invoke an agent with context",
                },
              ].map((endpoint) => (
                <div
                  key={endpoint.path}
                  className="flex items-center gap-4 rounded-lg border border-border p-4"
                >
                  <Badge
                    variant={endpoint.method === "GET" ? "secondary" : "default"}
                    className="w-16 justify-center"
                  >
                    {endpoint.method}
                  </Badge>
                  <div>
                    <code className="text-sm font-medium">{endpoint.path}</code>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Query Parameters</h2>
            <p className="text-muted-foreground">All list endpoints support standard query parameters:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <code>limit</code>: Number of results (default: 20, max: 100)
              </li>
              <li>
                <code>cursor</code>: Pagination cursor from previous response
              </li>
              <li>
                <code>order</code>: Sort order (<code>asc</code> or <code>desc</code>)
              </li>
              <li>
                <code>filter[field][op]</code>: Filter by field with operator
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold">Filter Operators</h3>
            <div className="not-prose my-4">
              <Card className="border-border bg-muted/30">
                <CardContent className="p-4">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      { op: "eq", desc: "Equal" },
                      { op: "ne", desc: "Not equal" },
                      { op: "gt", desc: "Greater than" },
                      { op: "gte", desc: "Greater than or equal" },
                      { op: "lt", desc: "Less than" },
                      { op: "lte", desc: "Less than or equal" },
                      { op: "in", desc: "In array" },
                      { op: "contains", desc: "Contains substring" },
                    ].map((filter) => (
                      <div key={filter.op} className="flex items-center gap-2">
                        <code className="text-sm">{filter.op}</code>
                        <span className="text-sm text-muted-foreground">{filter.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Example Request</h2>
            <div className="not-prose my-4">
              <Card className="border-border bg-muted/30">
                <CardContent className="p-4">
                  <pre className="text-sm overflow-x-auto">
{`GET /v1/tasks?limit=50&order=desc&filter[status][eq]=in_progress&filter[priority][in]=high,urgent
Authorization: Bearer <token>`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Error Model</h2>
            <p className="text-muted-foreground">All errors follow a consistent structure:</p>
            <div className="not-prose my-4">
              <Card className="border-border bg-muted/30">
                <CardContent className="p-4">
                  <pre className="text-sm overflow-x-auto">
{`{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { "field": "Additional context" },
    "request_id": "req_1234567890"
  }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h3 className="mt-8 text-xl font-semibold">Error Codes</h3>
            <div className="not-prose my-4">
              <div className="space-y-2">
                {[
                  { code: "AUTH_REQUIRED", status: "401", desc: "Authentication required" },
                  { code: "AUTH_INVALID_TOKEN", status: "401", desc: "Invalid or expired token" },
                  { code: "FORBIDDEN", status: "403", desc: "Access denied" },
                  { code: "NOT_FOUND", status: "404", desc: "Resource not found" },
                  { code: "VALIDATION_ERROR", status: "422", desc: "Request validation failed" },
                  { code: "RATE_LIMIT_EXCEEDED", status: "429", desc: "Rate limit exceeded" },
                ].map((error) => (
                  <div
                    key={error.code}
                    className="flex items-center gap-4 rounded-lg border border-border p-3"
                  >
                    <Badge variant="outline" className="w-12 justify-center">
                      {error.status}
                    </Badge>
                    <code className="text-sm">{error.code}</code>
                    <span className="text-sm text-muted-foreground">{error.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Rate Limits</h2>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <strong>Default</strong>: 100 requests per minute per API key
              </li>
              <li>
                <strong>Burst</strong>: Up to 200 requests in short bursts
              </li>
              <li>
                <strong>Headers</strong>: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>,{" "}
                <code>X-RateLimit-Reset</code>
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">SDKs</h2>
            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">JavaScript/TypeScript</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <code>npm install @integratewise/sdk</code>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Python</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <code>pip install integratewise</code>
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Related Documentation</h2>
            <div className="not-prose my-6 flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="/docs/webhooks">Webhooks</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/integrations">Integrations</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources/api">Full API Reference</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
