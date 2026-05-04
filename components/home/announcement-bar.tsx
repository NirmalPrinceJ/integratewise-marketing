import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-gold/10 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-2 text-sm">
        <span className="text-text-primary">
          IntegrateWise is in private beta.
        </span>
        <Link 
          href="/demo" 
          className="text-gold hover:text-gold-light font-medium flex items-center gap-1 transition-colors"
        >
          Book a demo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
