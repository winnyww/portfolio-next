"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedUnderline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setDrawn(true); observer.disconnect() } },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      style={{
        textDecoration: "underline",
        textDecorationColor: drawn ? "#ff4d6d" : "transparent",
        textDecorationThickness: "2px",
        textUnderlineOffset: "3px",
        transition: drawn ? "text-decoration-color 0.7s cubic-bezier(0.4,0,0.2,1)" : "none",
      }}
    >
      {children}
    </span>
  )
}
