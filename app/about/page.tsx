"use client"

import Image from "next/image"
import { useState } from "react"

// hOrigin: which horizontal edge to scale from (keeps image inside container left/right)
// vOrigin: which vertical edge to scale from (keeps image inside container top/bottom)
const photos = [
  // Row 1 — top edge
  { src: "/images/about-1.jpg",  left: "0%",   top: "2%",  width: "21%", rotate: "-4deg", hOrigin: "left",   vOrigin: "top"    },
  { src: "/images/about-2.jpg",  left: "20%",  top: "0%",  width: "20%", rotate: "3deg",  hOrigin: "center", vOrigin: "top"    },
  { src: "/images/about-3.JPG",  left: "40%",  top: "3%",  width: "21%", rotate: "-6deg", hOrigin: "center", vOrigin: "top"    },
  { src: "/images/about-4.jpg",  left: "61%",  top: "0%",  width: "20%", rotate: "5deg",  hOrigin: "center", vOrigin: "top"    },
  { src: "/images/about-5.JPG",  left: "80%",  top: "2%",  width: "20%", rotate: "-3deg", hOrigin: "right",  vOrigin: "top"    },
  // Row 2 — middle
  { src: "/images/about-6.png",  left: "0%",   top: "33%", width: "20%", rotate: "4deg",  hOrigin: "left",   vOrigin: "center" },
  { src: "/images/about-7.JPG",  left: "20%",  top: "31%", width: "21%", rotate: "-5deg", hOrigin: "center", vOrigin: "center" },
  { src: "/images/about-8.jpg",  left: "40%",  top: "34%", width: "20%", rotate: "3deg",  hOrigin: "center", vOrigin: "center" },
  { src: "/images/about-9.jpg",  left: "60%",  top: "32%", width: "21%", rotate: "-4deg", hOrigin: "center", vOrigin: "center" },
  { src: "/images/about-10.jpg", left: "80%",  top: "33%", width: "20%", rotate: "6deg",  hOrigin: "right",  vOrigin: "center" },
  // Row 3 — bottom edge
  { src: "/images/about-11.jpg", left: "10%",  top: "64%", width: "21%", rotate: "-3deg", hOrigin: "left",   vOrigin: "bottom" },
  { src: "/images/about-12.JPG", left: "31%",  top: "62%", width: "20%", rotate: "5deg",  hOrigin: "center", vOrigin: "bottom" },
  { src: "/images/about-13.jpg", left: "52%",  top: "65%", width: "21%", rotate: "-5deg", hOrigin: "center", vOrigin: "bottom" },
]

// Row height: image is 28vw wide, 4:3 ratio → ~21vw tall + 30px polaroid padding + 20px gap
const ROW_H = "calc(21vw + 50px)"
// Container needs 5 rows (0–4)
const MOBILE_H = "calc(5 * (21vw + 50px))"

// 3 columns at ~28% wide: left 2%, 36%, 70%
const mobilePhotos = [
  // Row 0 — top edge
  { src: "/images/about-1.jpg",  left: "2%",  topRow: 0, topOff: "2px", width: "28%", rotate: "-4deg", hOrigin: "left",   vOrigin: "top"    },
  { src: "/images/about-2.jpg",  left: "36%", topRow: 0, topOff: "0px", width: "28%", rotate: "3deg",  hOrigin: "center", vOrigin: "top"    },
  { src: "/images/about-3.JPG",  left: "70%", topRow: 0, topOff: "3px", width: "28%", rotate: "-6deg", hOrigin: "right",  vOrigin: "top"    },
  // Row 1 — middle
  { src: "/images/about-4.jpg",  left: "2%",  topRow: 1, topOff: "0px", width: "28%", rotate: "5deg",  hOrigin: "left",   vOrigin: "center" },
  { src: "/images/about-5.JPG",  left: "36%", topRow: 1, topOff: "4px", width: "28%", rotate: "-3deg", hOrigin: "center", vOrigin: "center" },
  { src: "/images/about-6.png",  left: "70%", topRow: 1, topOff: "2px", width: "28%", rotate: "4deg",  hOrigin: "right",  vOrigin: "center" },
  // Row 2 — middle
  { src: "/images/about-7.JPG",  left: "2%",  topRow: 2, topOff: "3px", width: "28%", rotate: "-5deg", hOrigin: "left",   vOrigin: "center" },
  { src: "/images/about-8.jpg",  left: "36%", topRow: 2, topOff: "0px", width: "28%", rotate: "3deg",  hOrigin: "center", vOrigin: "center" },
  { src: "/images/about-9.jpg",  left: "70%", topRow: 2, topOff: "4px", width: "28%", rotate: "-4deg", hOrigin: "right",  vOrigin: "center" },
  // Row 3 — middle
  { src: "/images/about-10.jpg", left: "2%",  topRow: 3, topOff: "0px", width: "28%", rotate: "6deg",  hOrigin: "left",   vOrigin: "center" },
  { src: "/images/about-11.jpg", left: "36%", topRow: 3, topOff: "2px", width: "28%", rotate: "-3deg", hOrigin: "center", vOrigin: "center" },
  { src: "/images/about-12.JPG", left: "70%", topRow: 3, topOff: "0px", width: "28%", rotate: "5deg",  hOrigin: "right",  vOrigin: "center" },
  // Row 4 — bottom edge, last image centered
  { src: "/images/about-13.jpg", left: "36%", topRow: 4, topOff: "0px", width: "28%", rotate: "-5deg", hOrigin: "center", vOrigin: "bottom" },
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

      {/* Collage — mobile */}
      <div
        className="md:hidden w-full px-2 mb-10"
        style={{ position: "relative", height: MOBILE_H, overflow: "hidden" }}
      >
        {mobilePhotos.map((photo, i) => {
          const isHovered = hovered === i
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: photo.left,
                top: `calc(${photo.topRow} * ${ROW_H} + ${photo.topOff})`,
                width: photo.width,
                transform: isHovered
                  ? `scale(1.4) rotate(${photo.rotate})`
                  : `rotate(${photo.rotate})`,
                transformOrigin: `${photo.hOrigin} ${photo.vOrigin}`,
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
                  sizes="44vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Collage — desktop */}
      <div
        className="hidden md:block w-[70%] mx-auto"
        style={{ position: "relative", height: "720px", marginBottom: "40px", overflow: "hidden" }}
      >
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
                transformOrigin: `${photo.hOrigin} ${photo.vOrigin}`,
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
