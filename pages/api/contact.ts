import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." })
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "kamalryassin216@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error("Resend error:", error)
      return res.status(500).json({ error: "Failed to send message." })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error("Email send error:", err)
    return res.status(500).json({ error: "Failed to send message." })
  }
}
