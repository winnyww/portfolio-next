"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Work" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-5 transition-colors duration-300 ${open ? "" : "backdrop-blur-[5px]"}`}>
      <div className="w-[90%] md:w-[70%] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-50" onClick={() => setOpen(false)}>
          <Image src="/images/winny_logo.png" alt="Winny Wang" width={61} height={32} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-[50px] text-[16px]">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-full bg-foreground transition-transform duration-300 origin-center ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-full bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-full bg-foreground transition-transform duration-300 origin-center ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 flex flex-col transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)" }}
      >
        {/* Links near top */}
        <nav className="flex flex-col items-center gap-6 pt-28 text-[24px] font-semibold w-full">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`transition-all duration-200 active:scale-95 ${
                pathname === href
                  ? "text-foreground"
                  : "text-foreground/30 hover:text-foreground/70"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
