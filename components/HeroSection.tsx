"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 mx-auto max-w-5xl py-24">
        {/* Left: Photo */}
        <div className="md:mt-2 md:w-1/3 flex justify-center">
          <div className="shadow-2xl rounded-xl overflow-hidden bg-transparent max-w-[260px]">
            <Image
              src="/Kamal.jpeg"
              alt="Kamal Yassin"
              width={350}
              height={350}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Text + Buttons */}
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Kamal!
          </h1>

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A{" "}
            <span className="font-semibold text-teal-600">
              CS Student{" "}
            </span>
            with a passion for AI and Machine Learning, building intelligent
            software that solves real problems.
          </p>

          {/* Primary buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>

            <a
              href="/Kamal's Resume.pdf"
              download="Kamal's Resume.pdf"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-16">
            <div className="flex flex-col items-start">
              {/* Title */}
              <span className="mb-4 text-sm md:text-base font-semibold tracking-wide text-neutral-700 dark:text-neutral-200 uppercase">
                Connect with me
              </span>

              {/* Small square icons */}
              <div className="flex gap-5">
                {/* GitHub */}
                <a
                  href="https://github.com/KamalYassin"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="flex h-16 w-16 items-center justify-center rounded-xl border border-neutral-300 bg-white/70 shadow-sm hover:bg-teal-600 hover:text-white hover:-translate-y-1 transition dark:bg-stone-900/70 dark:border-stone-700"
                >
                  <AiOutlineGithub size={24} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kamal-yassin-7a5358269"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="flex h-16 w-16 items-center justify-center rounded-xl border border-neutral-300 bg-white/70 shadow-sm hover:bg-teal-600 hover:text-white hover:-translate-y-1 transition dark:bg-stone-900/70 dark:border-stone-700"
                >
                  <AiOutlineLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down arrow */}
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
