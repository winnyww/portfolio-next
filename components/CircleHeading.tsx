"use client"

import { useEffect, useRef, useState } from "react"

export default function CircleHeading({ text }: { text: string }) {
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
    <span ref={ref} style={{ position: "relative", display: "inline-block" }}>
      {text}
      <svg
        viewBox="0 0 220 52"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-10px",
          left: "-12px",
          width: "calc(100% + 24px)",
          height: "calc(100% + 20px)",
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        <ellipse
          cx="110"
          cy="26"
          rx="104"
          ry="22"
          fill="none"
          stroke="#ff4d6d"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{
            strokeDasharray: 660,
            strokeDashoffset: drawn ? 0 : 660,
            transition: drawn ? "stroke-dashoffset 0.9s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        />
      </svg>
    </span>
  )
}
