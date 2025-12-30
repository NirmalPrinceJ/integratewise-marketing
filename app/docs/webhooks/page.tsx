import Link from "next/link"
import { Shield, Lock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function WebhooksPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Webhooks — Secure Real-Time Events & AI Chat Ingestion
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Stream events from your tools and AI conversations into IntegrateWise in real time.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold">What Webhooks do in IntegrateWise</h2>
            <p className="text-muted-foreground">Webhooks let IntegrateWise ingest events in real time from:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>your tools (Slack, CRMs, internal systems)</li>
              <li>your AI chat sources (ChatGPT, Claude, Gemini, etc.)</li>
              <li>custom systems (product usage, billing events, telemetry)</li>
            </ul>
            <p className="mt-4 text-muted-foreground">This powers:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Brainstorming → Second Brain ingestion</li>
              <li>real-time workflows</li>
              <li>agent triggers</li>
              <li>insights updates</li>
              <li>Render updates</li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold">Webhook Endpoint</h2>
            <div className="not-prose">
              <Card className="my-6 border-border bg-slate-950">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-slate-400">Base Endpoint</p>
                  <code className="mt-2 block text-sm text-slate-100">
                    POST https://api.integratewise.com/webhooks/v1/{"{workspace_id}"}/{"{source}"}
                  </code>
                  <p className="mt-4 text-sm text-slate-400">Example:</p>
                  <code className="mt-1 block text-sm text-slate-100">
                    POST https://api.integratewise.com/webhooks/v1/ws_123/chatgpt
                  </code>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Webhook Security (Required)</h2>
            <Card className="my-6 border-2 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="mt-1 h-6 w-6 text-secondary" />
                  <div>
                    <p className="font-medium">All webhook payloads must be:</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        signed
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        timestamped
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        idempotent
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="mt-8 text-xl font-bold">Signature (HMAC)</h3>
            <p className="text-muted-foreground">We recommend:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <strong>X-IW-Signature</strong> header = HMAC-SHA256 of payload using your workspace secret
              </li>
              <li>
                <strong>X-IW-Timestamp</strong> header = UNIX timestamp
              </li>
            </ul>

            <div className="not-prose">
              <Card className="my-6 border-border bg-slate-950">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-slate-400">Example headers</p>
                  <pre className="mt-2 text-sm text-slate-100">
                    {`X-IW-Signature: sha256=...
X-IW-Timestamp: 1735717342
X-IW-Idempotency-Key: <unique_key>`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Replay Protection</h2>
            <Card className="my-6 border-border bg-amber-950/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Lock className="mt-1 h-5 w-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Requests must be within a timestamp tolerance window:
                    </p>
                    <p className="mt-2 text-sm">
                      <strong>default: 5 minutes</strong>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">If outside tolerance:</p>
                    <p className="mt-1 text-sm">request is rejected: 401 invalid_timestamp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold">Idempotency (No duplicate events)</h2>
            <p className="text-muted-foreground">Each webhook event must include:</p>
            <code className="text-sm">X-IW-Idempotency-Key</code>
            <p className="mt-4 text-muted-foreground">
              IntegrateWise stores idempotency keys for a TTL window (default 7 days). Duplicate keys return the
              original response.
            </p>

            <h2 className="mt-12 text-2xl font-bold">Payload Schema (Generic)</h2>
            <div className="not-prose">
              <Card className="my-6 border-border bg-slate-950">
                <CardContent className="p-6">
                  <pre className="overflow-x-auto text-xs text-slate-100">
                    {`{
  "event_id": "evt_123",
  "source": "chatgpt",
  "type": "conversation.message",
  "workspace_id": "ws_123",
  "timestamp": "2025-12-31T12:34:56Z",
  "actor": {
    "id": "user_123",
    "email": "user@example.com"
  },
  "data": {
    "message_id": "msg_456",
    "thread_id": "th_789",
    "content": "Brainstorming text here...",
    "metadata": {
      "model": "gpt-5",
      "tags": ["idea", "plan"]
    }
  }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">AI Brainstorming Payload (Recommended)</h2>
            <p className="text-muted-foreground">Use this for AI chat ingestion:</p>
            <div className="not-prose">
              <Card className="my-6 border-border bg-slate-950">
                <CardContent className="p-6">
                  <pre className="overflow-x-auto text-xs text-slate-100">
                    {`{
  "event_id": "evt_123",
  "source": "chatgpt",
  "type": "brain.ingest",
  "workspace_id": "ws_123",
  "timestamp": "2025-12-31T12:34:56Z",
  "data": {
    "session_id": "session_001",
    "conversation_title": "Pricing page brainstorm",
    "messages": [
      {"role":"user","content":"Help me write pricing copy"},
      {"role":"assistant","content":"Here are tiers..."}
    ],
    "labels": ["brainstorming", "marketing"],
    "links": ["https://..."],
    "attachments": []
  }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Responses</h2>
            <div className="not-prose my-6 space-y-4">
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Success</p>
                      <code className="text-xs text-muted-foreground">200 OK</code>
                    </div>
                    <code className="text-xs">
                      {"{"}"status":"accepted","event_id":"evt_123"{"}"}
                    </code>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Duplicate (idempotent)</p>
                      <code className="text-xs text-muted-foreground">200 OK</code>
                    </div>
                    <code className="text-xs">
                      {"{"}"status":"duplicate","event_id":"evt_123"{"}"}
                    </code>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Invalid signature</p>
                      <code className="text-xs text-muted-foreground">401 Unauthorized</code>
                    </div>
                    <code className="text-xs">
                      {"{"}"error":"invalid_signature"{"}"}
                    </code>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Best Practices</h2>
            <div className="not-prose my-6">
              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>Always include event_id and idempotency_key</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>Keep payloads small; stream large content via references</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>Avoid sending PII unless required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>Use Render Only mode if compliance-first</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">Testing Your Webhook</h2>
            <p className="text-muted-foreground">We provide a test endpoint:</p>
            <code className="text-sm">POST /webhooks/v1/test</code>
            <p className="mt-4 text-muted-foreground">And a webhook log viewer:</p>
            <p className="text-sm">
              <strong>Settings → Webhooks → Logs</strong>
            </p>

            <div className="not-prose mt-12 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/docs/quickstart">Back to Quickstart</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs">Documentation Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
