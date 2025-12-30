import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ContactForm } from "@/components/forms/ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"
import { TrustStrip } from "@/components/infographics/TrustStrip"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#FFFFFF" }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F3F4F6" }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style={{ color: "#1E2A4A" }}>
                Get in Touch
              </h1>
              <p className="text-lg" style={{ color: "#232323" }}>
                Ready to transform your productivity? Let&apos;s talk about how IntegrateWise can help your team work
                smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Form + Contact Info */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Form Column */}
              <div>
                <h2 className="mb-2 text-2xl font-semibold" style={{ color: "#1E2A4A" }}>
                  Send us a message
                </h2>
                <p className="mb-8" style={{ color: "#232323" }}>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm formId="contact-page" />
              </div>

              {/* Contact Info Column */}
              <div className="lg:pl-8">
                <h2 className="mb-8 text-2xl font-semibold" style={{ color: "#1E2A4A" }}>
                  Other ways to reach us
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#E8EAF6" }}
                    >
                      <Mail className="h-5 w-5" style={{ color: "#3F51B5" }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "#1E2A4A" }}>
                        Email
                      </h3>
                      <a
                        href="mailto:hello@integratewise.io"
                        className="transition-colors hover:underline"
                        style={{ color: "#3F51B5" }}
                      >
                        hello@integratewise.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#E8EAF6" }}
                    >
                      <Phone className="h-5 w-5" style={{ color: "#3F51B5" }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "#1E2A4A" }}>
                        Phone
                      </h3>
                      <a
                        href="tel:+1-555-123-4567"
                        className="transition-colors hover:underline"
                        style={{ color: "#3F51B5" }}
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#E8EAF6" }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: "#3F51B5" }} />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "#1E2A4A" }}>
                        Office
                      </h3>
                      <p style={{ color: "#232323" }}>
                        San Francisco, CA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Badge */}
                <div
                  className="mt-8 rounded-lg border p-4"
                  style={{ borderColor: "#E5E7EB", backgroundColor: "#FAFAFA" }}
                >
                  <p className="text-sm" style={{ color: "#232323" }}>
                    <span className="font-semibold" style={{ color: "#1E2A4A" }}>
                      Average response time:
                    </span>{" "}
                    Under 4 hours during business hours (9am-6pm PT, Mon-Fri)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Logo Grid */}
        <section className="border-t py-16" style={{ borderColor: "#E5E7EB", backgroundColor: "#FAFAFA" }}>
          <div className="mx-auto max-w-7xl px-6">
            <TrustStrip />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
