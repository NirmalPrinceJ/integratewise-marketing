import { z } from "zod"

// Contact form field schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  source: z.enum(["website", "referral", "linkedin", "google", "event", "other"], {
    required_error: "Please select how you heard about us",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  marketing_consent: z.boolean().default(false),
})

// Type inference from schema
export type ContactFormData = z.infer<typeof contactFormSchema>

// Lead payload for adapter
export interface LeadPayload extends ContactFormData {
  submitted_at: string
  form_id: string
}

// Adapter response type
export interface AdapterResponse {
  success: boolean
  message: string
  lead_id?: string
  error?: string
}
