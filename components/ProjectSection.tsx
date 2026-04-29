import LightboxImage from "@/components/LightboxImage"
import AnimatedUnderline from "@/components/AnimatedUnderline"
import ImageCarousel from "@/components/ImageCarousel"

type Props = {
  id?: string
  label?: string
  showLabel?: boolean
  hideBorder?: boolean
  heading: string
  children?: React.ReactNode
  images?: string[]
  imageCaptions?: string[]
  imageLayout?: "stack" | "grid-2" | "grid-3" | "grid-1-2" | "grid-2-1" | "carousel" | "gallery"
  imageMaxWidth?: string
  imageHeight?: string
  imageAlign?: "left" | "center" | "right"
  content?: string
  figmaEmbed?: string
  sectionVideo?: string
  videos?: string[]
  videoMaxWidth?: string
  quote?: string
  quoteAttribution?: string
}

function renderBoldText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith("__") && part.endsWith("__")) {
      return <AnimatedUnderline key={i}>{part.slice(2, -2)}</AnimatedUnderline>
    }
    return part
  })
}

function renderContent(text: string): React.ReactNode[] {
  const blocks = text.split(/\n\n+/)
  return blocks.map((block, blockIdx) => {
    const lines = block.split("\n").filter((l) => l.trim() !== "")

    if (lines.length === 1 && lines[0].startsWith("#### ")) {
      const text = lines[0].slice(5)
      const isPink = /^#\d/.test(text)
      return (
        <h4 key={blockIdx} className="font-semibold text-[16px] mt-8 mb-3" style={isPink ? { color: "#ff4d6d" } : undefined}>
          {text}
        </h4>
      )
    }

    if (lines.every((l) => l.startsWith("- "))) {
      return (
        <ul key={blockIdx} className="list-disc list-inside space-y-2">
          {lines.map((l, i) => (
            <li key={i}>{renderBoldText(l.slice(2))}</li>
          ))}
        </ul>
      )
    }

    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      return (
        <ol key={blockIdx} className="list-decimal list-inside space-y-2">
          {lines.map((l, i) => (
            <li key={i}>{renderBoldText(l.replace(/^\d+\.\s/, ""))}</li>
          ))}
        </ol>
      )
    }

    return <p key={blockIdx}>{renderBoldText(block)}</p>
  })
}

// Renders content with #### subheadings interleaved with videos from the videos array
function renderWithVideos(content: string, videos: string[], videoMaxWidth = "760px"): React.ReactNode[] {
  const parts = content.split(/\n(?=#### )/)
  let videoIndex = 0
  const nodes: React.ReactNode[] = []

  parts.forEach((part, i) => {
    const trimmed = part.trim()
    if (!trimmed) return

    if (trimmed.startsWith("#### ")) {
      const newlineIdx = trimmed.indexOf("\n")
      const heading = newlineIdx === -1 ? trimmed.slice(5) : trimmed.slice(5, newlineIdx)
      const rest = newlineIdx === -1 ? "" : trimmed.slice(newlineIdx + 1).trim()
      const video = videos[videoIndex++]

      nodes.push(
        <div key={i} className="mt-16">
          <h4 className="text-[18px] font-semibold mb-4 max-w-3xl" style={/^#\d/.test(heading) ? { color: "#ff4d6d" } : undefined}>{heading}</h4>
          {rest && <div className="space-y-3 max-w-3xl">{renderContent(rest)}</div>}
          {video && (
            <div className="mt-8 flex justify-center">
              <video
                src={video}
                className="rounded-[12px]"
                style={{ width: `min(100%, ${videoMaxWidth})`, flexShrink: 0 }}
                controls
                playsInline
              />
            </div>
          )}
        </div>
      )
    } else {
      nodes.push(
        <div key={i} className="space-y-5">
          {renderContent(trimmed)}
        </div>
      )
    }
  })

  return nodes
}

function ImageGallery({ images, imageCaptions }: { images: string[]; imageCaptions?: string[] }) {
  const left = images.filter((_, i) => i % 2 === 0)
  const right = images.filter((_, i) => i % 2 === 1)
  const leftCaptions = imageCaptions?.filter((_, i) => i % 2 === 0)
  const rightCaptions = imageCaptions?.filter((_, i) => i % 2 === 1)

  const renderCol = (srcs: string[], captions?: string[]) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
      {srcs.map((src, i) => (
        <div key={i}>
          <div className="rounded-[12px] overflow-hidden">
            <LightboxImage src={src} alt={captions?.[i] || ""} sizes="40vw" />
          </div>
          {captions?.[i] && (
            <p className="text-[13px] text-foreground/40 mt-2 text-center">{captions[i]}</p>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
      {renderCol(left, leftCaptions)}
      {renderCol(right, rightCaptions)}
    </div>
  )
}

function ImageGrid({ images, imageCaptions, imageLayout, imageMaxWidth, imageHeight, imageAlign = "center" }: {
  images: string[]
  imageCaptions?: string[]
  imageLayout: "stack" | "grid-2" | "grid-3" | "grid-1-2" | "grid-2-1" | "gallery"
  imageMaxWidth?: string
  imageHeight?: string
  imageAlign?: "left" | "center" | "right"
}) {
  const gridClass = imageLayout === "grid-2"
    ? "grid grid-cols-1 md:grid-cols-2 gap-4"
    : imageLayout === "grid-1-2"
    ? "grid [grid-template-columns:0.5fr_2fr] items-center gap-4"
    : imageLayout === "grid-2-1"
    ? "grid grid-cols-1 md:[grid-template-columns:1.134fr_0.95fr] md:items-center gap-4"
    : imageLayout === "grid-3"
    ? "grid grid-cols-1 md:grid-cols-3 gap-4"
    : `space-y-6 flex flex-col ${imageAlign === "right" ? "items-end" : imageAlign === "left" ? "items-start" : "items-center"}`

  const sizes = imageLayout === "stack"
    ? "(max-width: 768px) 100vw, 70vw"
    : "(max-width: 768px) 100vw, 50vw"

  return (
    <div className={gridClass}>
      {images.map((src, i) => (
        <div key={i} style={{ width: imageLayout === "stack" ? `min(100%, ${imageMaxWidth ?? "760px"})` : "100%" }}>
          <div className="rounded-[12px] overflow-hidden" style={imageHeight ? { height: `min(${imageHeight}, 60vw)` } : undefined}>
            <LightboxImage src={src} alt={imageCaptions?.[i] || ""} sizes={sizes} objectFit={imageHeight ? "contain" : undefined} />
          </div>
          {imageCaptions?.[i] && (
            <p className="text-[13px] text-foreground/40 mt-2 text-center">{imageCaptions[i]}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ProjectSection({
  id,
  label,
  showLabel,
  hideBorder,
  heading,
  children,
  images,
  imageCaptions,
  imageLayout = "stack",
  imageMaxWidth,
  imageAlign = "center",
  content,
  figmaEmbed,
  sectionVideo,
  videos,
  videoMaxWidth,
  quote,
  quoteAttribution,
}: Props) {
  const hasVideos = videos && videos.length > 0

  return (
    <section id={id} className={`w-full py-12 scroll-mt-28 ${showLabel && !hideBorder ? "border-t border-foreground/10" : ""}`}>
      {/* Label eyebrow — only on first section of each group */}
      {showLabel && label && (
        <p className="text-[11px] uppercase tracking-widest text-foreground/40 mb-3">{label}</p>
      )}
      {/* Heading — full width, standalone */}
      {heading && <h3 className="text-[20px] font-semibold mb-5 leading-snug">{heading}</h3>}

      {/* Content */}
      {(content || children) && (
        hasVideos && content ? (
          <div className="text-[16px] leading-[1.9] text-foreground/70 mb-8">
            {renderWithVideos(content, videos, videoMaxWidth)}
          </div>
        ) : (
          <div className="text-[16px] leading-[1.9] text-foreground/70 space-y-5 max-w-3xl mb-8">
            {content ? renderContent(content) : children}
          </div>
        )
      )}

      {/* Figma prototype embed */}
      {figmaEmbed && (
        <div className="mb-8 rounded-[16px] overflow-hidden border border-foreground/8" style={{ height: "600px" }}>
          <iframe
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaEmbed)}`}
            width="100%"
            height="100%"
            allowFullScreen
            style={{ border: "none", display: "block" }}
          />
        </div>
      )}

      {/* Single video (only when no videos array) */}
      {!hasVideos && sectionVideo && (
        <div className="mt-6 flex justify-center">
          {sectionVideo.startsWith("http") ? (
            <iframe
              src={sectionVideo}
              className="rounded-[12px]"
              style={{ width: "min(100%, 960px)", height: "540px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={sectionVideo}
              className="rounded-[12px]"
              style={{ width: "min(100%, 760px)" }}
              controls
              playsInline
            />
          )}
        </div>
      )}

      {/* Quote + Image side by side */}
      {quote && images && images.length > 0 && (
        <div className="mt-8 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="flex-1 min-w-0 flex flex-col items-center text-center">
            <p className="text-[18px] leading-[1.9] text-foreground/70 italic">"{quote}"</p>
            {quoteAttribution && (
              <p className="text-[13px] text-foreground/40 mt-4 whitespace-pre-line">{quoteAttribution}</p>
            )}
          </div>
          <div className="flex-1 min-w-0 flex flex-col items-center">
            {images.map((src, i) => (
              <div key={i} className="text-center">
                <div className="rounded-[12px] overflow-hidden">
                  <LightboxImage src={src} alt={imageCaptions?.[i] || ""} sizes="50vw" />
                </div>
                {imageCaptions?.[i] && (
                  <p className="text-[13px] text-foreground/40 mt-2">{imageCaptions[i]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Images */}
      {!quote && images && images.length > 0 && (
        <div className={content || children ? "mt-6" : "mt-0"}>
          {imageLayout === "carousel"
            ? <ImageCarousel images={images} captions={imageCaptions} />
            : imageLayout === "gallery"
            ? <ImageGallery images={images} imageCaptions={imageCaptions} />
            : <ImageGrid images={images} imageCaptions={imageCaptions} imageLayout={imageLayout} imageMaxWidth={imageMaxWidth} imageAlign={imageAlign} />
          }
        </div>
      )}
    </section>
  )
}
