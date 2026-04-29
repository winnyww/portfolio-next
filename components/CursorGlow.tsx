"use client"

import { useEffect, useRef } from "react"

export default function CursorGlow() {
  const sparkleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let mouseX = window.innerWidth * 0.75
    let mouseY = window.innerHeight * 0.15
    let sparkX = mouseX
    let sparkY = mouseY

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      sparkX += (mouseX - sparkX) * 0.08
      sparkY += (mouseY - sparkY) * 0.08
      if (sparkleRef.current) {
        sparkleRef.current.style.transform = `translate(${sparkX - 10}px, ${sparkY - 10}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Background blob — fixed top-right, morphing color+shape */}
      <div
        style={{
          position: "fixed",
          top: "-80px",
          right: "-80px",
          width: "480px",
          height: "480px",
          pointerEvents: "none",
          zIndex: 0,
          animation: "blobMorph 18s ease-in-out infinite",
        }}
      />

      {/* Sparkle dot */}
      <div
        ref={sparkleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,77,109,0.45) 0%, rgba(255,150,180,0.2) 60%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          filter: "blur(5px)",
        }}
      />
    </>
  )
}
