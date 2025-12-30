"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { contactFormSchema, type ContactFormData, type LeadPayload } from "@/lib/forms/schemas"
import { V0PreviewAdapter } from "@/lib/forms/adapters"
import { CheckCircle2, Loader2 } from "lucide-react"

interface ContactFormProps {
  formId?: string
  onSuccess?: () => void
}

export function ContactForm({ formId = "contact-page", onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      source: undefined,
      message: "",
      marketing_consent: false,
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    const payload: LeadPayload = {
      ...data,
      submitted_at: new Date().toISOString(),
      form_id: formId,
    }

    try {
      const response = await V0PreviewAdapter.submitLead(payload)

      if (response.success) {
        setIsSuccess(true)
        form.reset()
        onSuccess?.()
      } else {
        setErrorMessage(response.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div
        className="flex flex-col items-center justify-center rounded-lg p-8 text-center"
        style={{ backgroundColor: "#F3F4F6" }}
      >
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: "#E8EAF6" }}
        >
          <CheckCircle2 className="h-8 w-8" style={{ color: "#3F51B5" }} />
        </div>
        <h3 className="mb-2 text-xl font-semibold" style={{ color: "#1E2A4A" }}>
          Thank you for reaching out!
        </h3>
        <p className="mb-6" style={{ color: "#232323" }}>
          We&apos;ll be in touch within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          style={{ borderColor: "#E5E7EB", color: "#232323" }}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: "#1E2A4A" }}>Full Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Smith"
                    {...field}
                    className="focus:ring-2"
                    style={{ borderColor: "#E5E7EB", "--tw-ring-color": "#9CA3AF" } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: "#1E2A4A" }}>Company *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    {...field}
                    className="focus:ring-2"
                    style={{ borderColor: "#E5E7EB", "--tw-ring-color": "#9CA3AF" } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: "#1E2A4A" }}>Work Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="jane@acme.com"
                    {...field}
                    className="focus:ring-2"
                    style={{ borderColor: "#E5E7EB", "--tw-ring-color": "#9CA3AF" } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: "#1E2A4A" }}>Phone (optional)</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...field}
                    className="focus:ring-2"
                    style={{ borderColor: "#E5E7EB", "--tw-ring-color": "#9CA3AF" } as React.CSSProperties}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel style={{ color: "#1E2A4A" }}>How did you hear about us? *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="focus:ring-2"
                    style={{ borderColor: "#E5E7EB", "--tw-ring-color": "#9CA3AF" } as React.CSSProperties}
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="event">Event / Conference</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel style={{ color: "#1E2A4A" }}>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your needs..."
                  rows={4}
                  {...field}
                  className="resize-none focus:ring-2"
                  style={{ borderColor: "#E5E7EB", "--tw-ring-color": "#9CA3AF" } as React.CSSProperties}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="marketing_consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="data-[state=checked]:bg-[#3F51B5] data-[state=checked]:border-[#3F51B5]"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal" style={{ color: "#232323" }}>
                  I agree to receive marketing communications from IntegrateWise. You can unsubscribe at any time.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        {errorMessage && (
          <div className="rounded-md p-3 text-sm" style={{ backgroundColor: "#FEE2E2", color: "#991B1B" }}>
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-semibold transition-colors focus:outline-none focus:ring-2"
          style={
            {
              backgroundColor: "#3F51B5",
              color: "#FFFFFF",
              "--tw-ring-color": "#9CA3AF",
            } as React.CSSProperties
          }
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  )
}
