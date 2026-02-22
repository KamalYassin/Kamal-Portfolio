import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"

const projects = [
      {
    name: "Fireboy & Watergirl Multi-Agent RL",
    description:
      "Two agents trained with MAPPO to cooperatively solve grid-based puzzles using centralized training and decentralized execution.",
    image: "/firewater.png",
    github: "https://github.com/KamalYassin/firewater-multiagent-rl",
    tech: ["Python", "PyTorch", "MAPPO", "Reinforcement Learning"],
  },
  {
    name: "Insulin Pump Simulator",
    description:
      "A medical device simulator that models real insulin-pump behaviour, including CGM glucose trends, bolus delivery, and safety-critical alerts.",
    image: "/insulin_pump.png",
    github: "https://github.com/KamalYassin/Insulin_Pump",
    tech: ["Qt", "C++", "Linux"],
  },
  {
    name: "Digit Classification CNN",
    description:
      "A compact convolutional neural network designed to accurately classify handwritten digits.",
    image: "/ML_pic.png",
    github: "https://github.com/KamalYassin/ML_Project",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas"],
  },
  {
    name: "Event Management System",
    description:
      "A user-friendly tool for browsing, searching, and registering for sessions at the Carleton CS Connect conference.",
    image: "/Event_Management.png",
    github: "https://github.com/KamalYassin/Event_Management_System",
    tech: ["Python", "Tkinter", "SQL", "SQLite"],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">

                {/* IMAGE */}
                <div className="md:w-1/2 flex items-center justify-center">
                  <Link href={project.github} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl w-full h-auto object-contain hover:opacity-80 transition-opacity"
                    />
                  </Link>
                </div>

                {/* TEXT + ICONS */}
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">{project.name}</h1>

                  <p className="text-xl font-light font-sans leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>

                  {/* TECHNOLOGY BADGES */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-700 font-medium dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GITHUB LINK */}
                  <div className="flex flex-row align-bottom space-x-4 mt-2">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-teal-600 hover:text-white hover:border-teal-600 hover:-translate-y-1 transition cursor-pointer"
                    >
                      <BsGithub size={20} />
                      <span className="text-sm font-medium">Source Code</span>
                    </Link>
                  </div>
                </div>

              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
