import { Suspense } from "react"
import ContactForm from "./contact-form"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
      <Footer />
    </div>
  )
}
