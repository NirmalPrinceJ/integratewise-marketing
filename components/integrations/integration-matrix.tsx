import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Check, X, AlertTriangle } from "lucide-react"

const integrations = [
  {
    source: "Slack",
    mode: "Full / Webhook",
    auth: "OAuth2 (User/Bot)",
    entities: "Messages, Channels, Users",
    sync: "Event-driven",
    rateLimits: "Tier 2 (20 req/m)",
    piiSafe: true,
  },
  {
    source: "Gmail",
    mode: "Full / Render Only",
    auth: "OAuth2",
    entities: "Messages, Threads, Labels",
    sync: "Polling + History API",
    rateLimits: "1M quota/day",
    piiSafe: "partial",
  },
  {
    source: "HubSpot",
    mode: "Full",
    auth: "OAuth2 / Private App",
    entities: "Deals, Contacts, Companies",
    sync: "Batch Sync (15m)",
    rateLimits: "100 req/10s",
    piiSafe: true,
  },
  {
    source: "Stripe",
    mode: "Render Only",
    auth: "API Key",
    entities: "Charges, Customers, Subs",
    sync: "Webhook (Events)",
    rateLimits: "100 req/s",
    piiSafe: false,
  },
  {
    source: "Notion",
    mode: "Full",
    auth: "OAuth2",
    entities: "Pages, Databases, Blocks",
    sync: "Polling (5m)",
    rateLimits: "3 req/s",
    piiSafe: true,
  },
  {
    source: "Google Calendar",
    mode: "Full",
    auth: "OAuth2",
    entities: "Events, Calendars",
    sync: "Polling + Watch",
    rateLimits: "500 req/day",
    piiSafe: true,
  },
]

export function IntegrationMatrix() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Source</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Auth</TableHead>
            <TableHead>Entities</TableHead>
            <TableHead>Sync Strategy</TableHead>
            <TableHead>Rate Limits</TableHead>
            <TableHead className="text-right">PII-Safe</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {integrations.map((item) => (
            <TableRow key={item.source}>
              <TableCell className="font-medium">{item.source}</TableCell>
              <TableCell>
                <Badge variant="outline">{item.mode}</Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.auth}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.entities}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.sync}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{item.rateLimits}</TableCell>
              <TableCell className="text-right">
                {item.piiSafe === true ? (
                  <div className="flex justify-end items-center gap-1 text-green-600">
                    <Check className="h-4 w-4" />
                    <span className="text-xs">Yes</span>
                  </div>
                ) : item.piiSafe === "partial" ? (
                  <div className="flex justify-end items-center gap-1 text-amber-600">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-xs">Encrypted</span>
                  </div>
                ) : (
                  <div className="flex justify-end items-center gap-1 text-red-600">
                    <X className="h-4 w-4" />
                    <span className="text-xs">Redacted</span>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
