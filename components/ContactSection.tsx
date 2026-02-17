"use client"

import React, { useState } from "react"
import { FiMail, FiPhone } from "react-icons/fi"

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="mt-56 mb-24 scroll-mt-24" // extra space from Projects + good scroll offset
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 animate-fadeIn animation-delay-2">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold">
          Get in Touch
        </h2>

        {/* Tagline – one line on larger screens */}
        <p className="mt-4 text-center text-sm text-gray-500 md:text-lg md:whitespace-nowrap dark:text-gray-400">
          Whether you want to collaborate, ask a question, or just say hi, here&apos;s how you can reach me.
        </p>

        {/* Two-column layout */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Left card – email / phone */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/40">
                <FiMail size={20} />
              </div>
              <h3 className="text-xl font-semibold">Email Me Directly</h3>
            </div>

            <p className="mt-8 text-sm text-gray-600 dark:text-gray-300 md:text-base">
              Prefer email or a quick call? Reach out anytime, I usually reply within 24 hours.
            </p>

            <div className="mt-8 space-y-8 text-sm md:text-base">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Email
                </span>
                <a
                  href="mailto:kamalr_yassin@hotmail.com"
                  className="mt-1 inline-flex items-center text-teal-600 underline-offset-2 hover:underline dark:text-teal-400"
                >
                  kamalr_yassin@hotmail.com
                </a>
              </div>

              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Phone
                </span>
                <div className="mt-1 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <FiPhone className="text-teal-600 dark:text-teal-400" />
                  <span>613-297-4737</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right card – contact form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-900">
            <h3 className="text-xl font-semibold">Send a Message</h3>

            {status === "success" ? (
              <div className="mt-6 flex flex-col items-center justify-center py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/40 mb-4">
                  <svg className="h-7 w-7 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Message sent successfully!
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Kamal Yassin"
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-stone-600 dark:bg-stone-950 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-stone-600 dark:bg-stone-950 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me a bit about what you have in mind..."
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 dark:border-stone-600 dark:bg-stone-950 dark:text-gray-100"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:ring-offset-stone-900"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
