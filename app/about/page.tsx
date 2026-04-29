"use client"

import Image from "next/image"
import { useState } from "react"

const photos = [
  // Row 1
  { src: "/images/about-1.jpg",  left: "0%",   top: "2%",  width: "21%", rotate: "-4deg" },
  { src: "/images/about-2.jpg",  left: "20%",  top: "0%",  width: "20%", rotate: "3deg"  },
  { src: "/images/about-3.JPG",  left: "40%",  top: "3%",  width: "21%", rotate: "-6deg" },
  { src: "/images/about-4.jpg",  left: "61%",  top: "0%",  width: "20%", rotate: "5deg"  },
  { src: "/images/about-5.JPG",  left: "80%",  top: "2%",  width: "20%", rotate: "-3deg" },
  // Row 2
  { src: "/images/about-6.png",  left: "0%",   top: "33%", width: "20%", rotate: "4deg"  },
  { src: "/images/about-7.JPG",  left: "20%",  top: "31%", width: "21%", rotate: "-5deg" },
  { src: "/images/about-8.jpg",  left: "40%",  top: "34%", width: "20%", rotate: "3deg"  },
  { src: "/images/about-9.jpg",  left: "60%",  top: "32%", width: "21%", rotate: "-4deg" },
  { src: "/images/about-10.jpg", left: "80%",  top: "33%", width: "20%", rotate: "6deg"  },
  // Row 3
  { src: "/images/about-11.jpg", left: "10%",  top: "64%", width: "21%", rotate: "-3deg" },
  { src: "/images/about-12.JPG", left: "31%",  top: "62%", width: "20%", rotate: "5deg"  },
  { src: "/images/about-13.jpg", left: "52%",  top: "65%", width: "21%", rotate: "-5deg" },
]

export default function About() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* Text */}
      <div className="w-[90%] md:w-[70%] mx-auto pt-28 pb-32 flex-shrink-0">
        <div className="max-w-xl">
          <h1 className="text-2xl font-semibold mb-5">About</h1>
          <div className="text-[15px] leading-relaxed space-y-3 text-foreground/80">
            <p>
              I&apos;m a creative designer with critical humanistic thinking.
              I pursue education in both arts and sciences, and have developed
              a deep interest in addressing humanistic issues in a creative digital manner.
            </p>
            <p>
              My favorite projects focus on human experience and encourage meditation on life.
              I work across interactive experience, UX design, data visualization, wearable technology, and more.
            </p>
          </div>
          <div className="mt-6 text-sm">
            <a
              href="https://www.linkedin.com/in/peiyao-winny-wang/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Collage */}
      <div className="w-[90%] md:w-[70%] mx-auto" style={{ position: "relative", height: "720px", marginBottom: "40px" }}>
        {photos.map((photo, i) => {
          const isHovered = hovered === i
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: photo.left,
                top: photo.top,
                width: photo.width,
                transform: isHovered
                  ? `scale(1.4) rotate(${photo.rotate})`
                  : `rotate(${photo.rotate})`,
                zIndex: isHovered ? 100 : i + 1,
                background: "white",
                padding: "8px 8px 22px",
                boxShadow: isHovered
                  ? "0 16px 48px rgba(0,0,0,0.22)"
                  : "0 3px 14px rgba(0,0,0,0.13)",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: "2px" }}>
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="22vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
