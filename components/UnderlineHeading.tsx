"use client"

import { useEffect, useRef, useState } from "react"

export default function UnderlineHeading({ text }: { text: string }) {
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
    <span ref={ref} style={{ position: "relative", display: "inline" }}>
      {text}
      <span
        style={{
          position: "absolute",
          bottom: "-3px",
          left: 0,
          height: "2px",
          width: drawn ? "100%" : "0%",
          background: "#ff4d6d",
          borderRadius: "2px",
          transition: drawn ? "width 0.7s cubic-bezier(0.4,0,0.2,1)" : "none",
          display: "block",
        }}
      />
    </span>
  )
}
