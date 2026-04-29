"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

type Props = {
  src: string
  alt: string
  sizes: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

export default function LightboxImage({ src, alt, sizes, objectFit }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open])

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes={sizes}
        style={{ width: "100%", height: objectFit ? "100%" : "auto", objectFit: objectFit ?? "cover", display: "block", cursor: "zoom-in" }}
        onClick={() => setOpen(true)}
      />

      {open && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/85 backdrop-blur-sm p-6 md:p-12"
          onClick={() => setOpen(false)}
        >
          <div className="relative" style={{ maxWidth: "min(92vw, 1400px)", maxHeight: "92vh" }} onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{ width: "auto", height: "auto", maxWidth: "min(92vw, 1400px)", maxHeight: "92vh", display: "block", borderRadius: "12px", objectFit: "contain" }}
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white text-[22px] leading-none bg-black/40 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
