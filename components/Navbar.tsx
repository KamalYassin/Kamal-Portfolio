"use client"

import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" }
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600 shadow">
      
      {/* MAIN NAV CONTAINER */}
      <div className="flex items-center justify-between py-4">
        
        {/* LEFT SIDE — NAME */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer"
        >
          <h2 className="text-2xl font-bold">Kamal Yassin</h2>
        </Link>

        {/* RIGHT SIDE — NAV LINKS + THEME BUTTON */}
        <div className="hidden md:flex items-center space-x-7">

          {/* NAV ITEMS */}
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}

          {/* THEME TOGGLE */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}

        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden p-2 text-gray-700 rounded-md"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {navbar && (
        <div className="md:hidden pb-4 space-y-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setNavbar(false)}
              className="block text-neutral-900 dark:text-neutral-100 text-lg"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

    </header>
  )
}
