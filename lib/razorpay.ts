import Razorpay from "razorpay"

function requiredEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing required env var: ${name}`)
  return v
}

export function getRazorpayClient() {
  const key_id = requiredEnv("RAZORPAY_KEY_ID")
  const key_secret = requiredEnv("RAZORPAY_KEY_SECRET")

  return new Razorpay({
    key_id,
    key_secret,
  })
}

export function getRazorpayPublicKeyId() {
  return requiredEnv("RAZORPAY_KEY_ID")
}

