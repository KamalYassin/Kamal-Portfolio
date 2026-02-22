import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/KamalYassin",
    icon: BsGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kamal-yassin-7a5358269",
    icon: BsLinkedin,
  },
]

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>

      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between items-center gap-3">

        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © {new Date().getFullYear()} Kamal Yassin
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              rel="noreferrer"
              target="_blank"
              aria-label={social.name}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 hover:border-teal-500 hover:text-teal-600 hover:-translate-y-1 transition-all dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
