"use client"

import { useState, useEffect } from "react"
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

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="90vw"
              style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "90vh", display: "block", borderRadius: "12px" }}
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white text-[22px] leading-none bg-black/40 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
