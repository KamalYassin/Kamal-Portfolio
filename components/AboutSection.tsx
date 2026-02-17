import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "C/C++" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "PyTorch" },
  { skill: "TensorFlow" },
  { skill: "NumPy" },
  { skill: "Pandas" },
  { skill: "SQL" },
  { skill: "Linux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* LEFT SIDE – TEXT */}
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>

            <p>
              Hi, my name is Kamal and I am a{" "}
              <span className="font-bold">fourth-year </span>
              computer science student at
              <span className="font-bold"> Carleton University</span> with a
              strong interest in AI, Machine Learning, and developing software
              that creates real value.
            </p>
            <br />
            <p>
              Originally from Jordan and now based in Ottawa, I’m constantly
              exploring new ideas and building projects that help me grow as
              both a learner and an engineer.
            </p>
            <br />
            <p>
              Outside of academics and tech, I’m very active and competitive. I
              love playing padel, soccer, and staying consistent in the gym. I’m
              also someone who enjoys learning beyond computer science,
              especially history and culture.
            </p>
            <br />
            <p>
              I'm driven by{" "}
              <span className="font-bold text-teal-500">curiosity</span> and the
              desire to keep improving. Whether it’s trying a new project or
              learning, I enjoy pushing myself forward. I’m excited to continue
              developing my skills in AI and software engineering, and I’m
              always open to opportunities that help me grow personally and
              professionally.
            </p>
          </div>

          {/* RIGHT SIDE – SKILLS + IMAGE */}
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>

            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 mr-2 mt-2 text-gray-700 dark:text-gray-200 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>

            <div className="mt-8 md:mt-20 md:ml-8">
              <Image
                src="/coding_pic.svg"
                alt="Developer Illustration"
                width={380}
                height={380}
                className="w-full h-auto max-w-sm mx-auto md:mx-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
