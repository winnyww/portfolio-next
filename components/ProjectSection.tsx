import LightboxImage from "@/components/LightboxImage"

type Props = {
  id?: string
  label?: string
  showLabel?: boolean
  heading: string
  children?: React.ReactNode
  images?: string[]
  imageCaptions?: string[]
  imageLayout?: "stack" | "grid-2" | "grid-3" | "grid-1-2" | "grid-2-1"
  imageMaxWidth?: string
  imageHeight?: string
  content?: string
  sectionVideo?: string
  videos?: string[]
  videoMaxWidth?: string
}

function renderBoldText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function renderContent(text: string): React.ReactNode[] {
  const blocks = text.split(/\n\n+/)
  return blocks.map((block, blockIdx) => {
    const lines = block.split("\n").filter((l) => l.trim() !== "")

    if (lines.length === 1 && lines[0].startsWith("#### ")) {
      return (
        <h4 key={blockIdx} className="font-semibold text-[17px] mt-8 mb-3">
          {lines[0].slice(5)}
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
function renderWithVideos(content: string, videos: string[], videoMaxWidth = "78%"): React.ReactNode[] {
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
          <h4 className="text-[22px] font-bold mb-4 max-w-3xl">{heading}</h4>
          {rest && <div className="space-y-3 max-w-3xl">{renderContent(rest)}</div>}
          {video && (
            <div className="mt-10 flex justify-center">
              <video
                src={video}
                className="rounded-[12px]"
                style={{ width: `min(100%, ${videoMaxWidth})` }}
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

function ImageGrid({ images, imageCaptions, imageLayout, imageMaxWidth, imageHeight }: {
  images: string[]
  imageCaptions?: string[]
  imageLayout: "stack" | "grid-2" | "grid-3" | "grid-1-2" | "grid-2-1"
  imageMaxWidth?: string
  imageHeight?: string
}) {
  const gridClass = imageLayout === "grid-2"
    ? "grid grid-cols-1 md:grid-cols-2 gap-4"
    : imageLayout === "grid-1-2"
    ? "grid grid-cols-1 md:[grid-template-columns:0.9123fr_1.9584fr] md:items-center md:w-[70%] md:mx-auto gap-4"
    : imageLayout === "grid-2-1"
    ? "grid grid-cols-1 md:[grid-template-columns:1.134fr_0.95fr] md:items-center gap-4"
    : imageLayout === "grid-3"
    ? "grid grid-cols-1 md:grid-cols-3 gap-4"
    : "space-y-6 flex flex-col items-center"

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
  heading,
  children,
  images,
  imageCaptions,
  imageLayout = "stack",
  imageMaxWidth,
  content,
  sectionVideo,
  videos,
  videoMaxWidth,
}: Props) {
  const hasVideos = videos && videos.length > 0

  return (
    <section id={id} className={`w-full py-12 scroll-mt-28 ${showLabel ? "border-t border-foreground/10" : "pt-6"}`}>
      {/* Label eyebrow — only on first section of each group */}
      {showLabel && label && (
        <p className="text-[11px] uppercase tracking-widest text-foreground/40 mb-3">{label}</p>
      )}
      {/* Heading — full width, standalone */}
      {heading && <h3 className="text-[22px] md:text-[26px] font-bold mb-5 leading-snug">{heading}</h3>}

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

      {/* Single video (only when no videos array) */}
      {!hasVideos && sectionVideo && (
        <div className="mt-6 flex justify-center">
          <video
            src={sectionVideo}
            className="rounded-[12px]"
            style={{ width: "min(100%, 760px)" }}
            controls
            playsInline
          />
        </div>
      )}

      {/* Images */}
      {images && images.length > 0 && (
        <div className={content || children ? "" : "mt-0"}>
          <ImageGrid images={images} imageCaptions={imageCaptions} imageLayout={imageLayout} imageMaxWidth={imageMaxWidth} />
        </div>
      )}
    </section>
  )
}
