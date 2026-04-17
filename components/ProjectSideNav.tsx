"use client"

import { useEffect, useState } from "react"

type Section = { id: string; label: string }

export default function ProjectSideNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-30% 0px -60% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  return (
    <nav className="hidden md:block w-[160px] shrink-0">
      <div className="sticky top-28 space-y-1">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }}
            className={`block text-[13px] leading-snug py-1.5 transition-colors ${
              active === id
                ? "text-foreground font-semibold"
                : "text-foreground/35 hover:text-foreground/60"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
