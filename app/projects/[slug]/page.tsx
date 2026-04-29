import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"
import ProjectSection from "@/components/ProjectSection"
import AnimatedSection from "@/components/AnimatedSection"
import ProjectSideNav from "@/components/ProjectSideNav"
import CircleHeading from "@/components/CircleHeading"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const seenLabels = new Set<string>()
  const navSections = project.sections.reduce<{ id: string; label: string }[]>((acc, s, i) => {
    if (!seenLabels.has(s.label)) {
      seenLabels.add(s.label)
      acc.push({ id: `section-${i}`, label: s.label })
    }
    return acc
  }, [])

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="w-[90%] md:w-[70%] mx-auto flex gap-12 md:gap-16">

        {/* Sticky left nav */}
        {project.minimalLayout
          ? <div className="hidden md:block w-[160px] shrink-0" />
          : <ProjectSideNav sections={navSections} />
        }

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* Title + subtitle + description */}
          <AnimatedSection>
            <div className="pb-8">
              <h1 className="text-[36px] md:text-[52px] font-bold leading-[1.1] tracking-tight mb-3">
                {project.title}
              </h1>
              {project.tags && project.tags.length > 0 && (
                <p className="text-[15px] italic mb-4" style={{ color: "#ff4d6d" }}>
                  {project.tags.map(t => `#${t}`).join(" ")}
                </p>
              )}
              <p className="text-[16px] text-foreground/60 leading-[1.8] max-w-[80%]">{project.description}</p>
            </div>
          </AnimatedSection>

          {/* Cover image */}
          {project.coverImage && (
            <AnimatedSection>
              <div className="mb-12 rounded-[16px] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={0}
                  height={0}
                  sizes="80vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>
            </AnimatedSection>
          )}

          {/* Horizontal metadata row */}
          {!project.minimalLayout && !project.comingSoon && <AnimatedSection>
            <div className="py-6 mb-6 flex flex-col" style={{ gap: "24px" }}>
              {/* Row 1: Timeline | Project Type | My Role */}
              <div className="flex w-full" style={{ gap: "40px" }}>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Timeline</p>
                  <p className="text-[15px] leading-relaxed break-words">{project.timeline}</p>
                </div>
                {(project.projectType || project.collaborationType) && (
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">{project.projectType ? "Project Type" : "Type"}</p>
                    <p className="text-[15px] leading-relaxed break-words">{project.projectType ?? project.collaborationType}</p>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">My Role</p>
                  <p className="text-[15px] leading-relaxed break-words">{project.contribution.map(c => c.role).join(", ")}</p>
                </div>
              </div>
              {/* Row 2: Tools + Team */}
              <div className="flex w-full" style={{ gap: "40px" }}>
                <div className="flex-1 min-w-0" style={{ maxWidth: "340px" }}>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Tools</p>
                  <p className="text-[15px] leading-relaxed break-words">{project.tools}</p>
                </div>
                {project.team && project.team.length > 0 && (
                  <div className="flex-1 min-w-0" style={{ maxWidth: "340px" }}>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Team</p>
                    <p className="text-[15px] leading-relaxed break-words">{project.team.join(", ")}</p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>}

          {/* My Contribution */}
          {!project.minimalLayout && !project.comingSoon && project.contribution.some(c => c.description) && (
            <AnimatedSection>
              <div className="py-10 border-t border-foreground/10">
                <h3 className="text-[18px] font-semibold mb-6">
                  <CircleHeading text="My Contribution" />
                </h3>
                <div className="text-[15px] leading-[1.9] text-foreground/70 space-y-4 max-w-2xl">
                  {project.contribution.map((c, i) => c.description && (
                    <p key={i}>
                      <strong className="text-foreground font-semibold">{c.role}:</strong> {c.description}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Video embed */}
          {!project.minimalLayout && project.videoUrl && (
            <AnimatedSection>
              <div className="mb-12">
                {project.videoUrl.startsWith("/videos/") ? (
                  <video src={project.videoUrl} className="rounded-[16px]" style={{ width: "100%", height: "auto", display: "block" }} controls playsInline />
                ) : (
                  <iframe src={project.videoUrl} className="w-full rounded-[12px]" style={{ height: "50vh" }} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                )}
              </div>
            </AnimatedSection>
          )}

          {/* Coming soon message */}
          {project.comingSoon && (
            <AnimatedSection>
              <div className="py-16">
                <p className="text-[13px] uppercase tracking-widest text-foreground/30 mb-3">Case Study</p>
                <p className="text-[22px] font-semibold mb-2">More coming soon</p>
                <p className="text-[15px] text-foreground/50 leading-relaxed">I'm currently documenting this project. Check back soon for the full case study.</p>
              </div>
            </AnimatedSection>
          )}

          {/* Case study sections */}
          {(() => {
            const seen = new Set<string>()
            return project.sections.map((section, i) => {
              const isFirst = !seen.has(section.label)
              if (isFirst) seen.add(section.label)
              return (
                <AnimatedSection key={i} delay={0.05}>
                  <ProjectSection
                    id={`section-${i}`}
                    label={section.label}
                    showLabel={isFirst}
                    hideBorder={project.minimalLayout}
                    heading={section.heading}
                    content={section.content}
                    images={section.images}
                    imageCaptions={section.imageCaptions}
                    imageLayout={section.imageLayout}
                    figmaEmbed={section.figmaEmbed}
                    sectionVideo={section.sectionVideo}
                    videos={section.videos}
                    videoMaxWidth={section.videoMaxWidth}
                    imageMaxWidth={section.imageMaxWidth}
                  />
                </AnimatedSection>
              )
            })
          })()}

          {/* Back link */}
          <div className={`mt-16 pt-8 ${!project.minimalLayout ? "border-t border-foreground/10" : ""}`}>
            <Link href="/" className="text-[13px] text-foreground/40 hover:text-foreground/70 transition-colors">
              ← Back to work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
