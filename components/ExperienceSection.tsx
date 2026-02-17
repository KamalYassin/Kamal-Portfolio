import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"

const experiences = [
  {
    role: "AI Engineer",
    company: "Taskd.ai",
    date: "2026 — Present",
    logo: "/taskdai_logo.png",
    url: "https://taskd.ai/",
    summary:
      "Built structured reasoning systems for a neuro-symbolic AI platform and prototyped LLM function-calling workflows translating natural language into business logic.",
    tech: ["Python", "TypeScript", "LLMs", "Neuro-Symbolic AI"],
  },
  {
    role: "Database Administrator",
    company: "Al Bayanat",
    date: "2024",
    logo: "/albayanat-logo.png",
    url: "https://al-bayanat.com/",
    summary:
      "Optimized Oracle SQL systems and supported production database performance, security improvements, and large-scale reporting pipelines.",
    tech: ["Oracle", "SQL", "Database Security"],
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-6 md:pt-16">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <SlideUp key={idx} offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-neutral-200/60 dark:border-neutral-700/40 backdrop-blur-sm">

                {/* LOGO */}
                <Link
                  href={exp.url}
                  target="_blank"
                  className="flex-shrink-0 self-center md:self-start hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={100}
                    height={100}
                    className="rounded-2xl object-contain"
                  />
                </Link>

                {/* DETAILS */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {exp.role}{" "}
                    <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                      @ {exp.company}
                    </span>
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {exp.date}
                  </p>

                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mt-3">
                    {exp.summary}
                  </p>

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-700/50 text-neutral-700 dark:text-neutral-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
