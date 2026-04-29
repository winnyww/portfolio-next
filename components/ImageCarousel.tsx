"use client"

import { useRef, useState, useCallback } from "react"
import LightboxImage from "@/components/LightboxImage"

type Props = {
  images: string[]
  captions?: string[]
}

export default function ImageCarousel({ images, captions }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const visible = 2
  const canPrev = index > 0
  const canNext = index + visible < images.length

  const scrollTo = useCallback((newIndex: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[newIndex] as HTMLElement
    if (!card) return
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" })
    setIndex(newIndex)
  }, [])

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: `calc(${100 / visible}% - ${(24 * (visible - 1)) / visible}px)`, scrollSnapAlign: "start" }}
          >
            <div className="rounded-[12px] overflow-hidden border border-foreground/8">
              <LightboxImage src={src} alt={captions?.[i] || ""} sizes="50vw" />
            </div>
            {captions?.[i] && (
              <p className="text-[13px] text-foreground/40 mt-2 text-center">{captions[i]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bottom-left controls */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => scrollTo(Math.max(index - 1, 0))}
          disabled={!canPrev}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-opacity"
          style={{ background: "rgba(0,0,0,0.35)", opacity: canPrev ? 1 : 0.3 }}
          aria-label="Prev"
        >
          ←
        </button>
        <button
          onClick={() => scrollTo(Math.min(index + 1, images.length - visible))}
          disabled={!canNext}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-opacity"
          style={{ background: "rgba(0,0,0,0.35)", opacity: canNext ? 1 : 0.3 }}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  )
}
