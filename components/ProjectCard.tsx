import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  const card = (
    <>
      {/* Card — image fills edge to edge */}
      <div className="relative w-full rounded-[20px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${project.comingSoon ? "" : "group-hover:scale-[1.03]"}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Badge */}
        {project.comingSoon ? (
          <div className="absolute bottom-4 left-4">
            <div className="bg-foreground text-background text-[13px] font-medium px-3 py-1 rounded-full shadow-sm">
              Coming Soon
            </div>
          </div>
        ) : project.tags[0] && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[13px] font-medium px-3 py-1 rounded-full text-foreground/70 shadow-sm">
            {project.tags[0]}
          </div>
        )}
      </div>
      {/* Info below card */}
      <div className="pt-4 pb-2">
        <h2 className="text-[19px] font-semibold leading-snug">{project.title}</h2>
        <p className="text-[15px] text-foreground/50 mt-1 leading-snug line-clamp-2">{project.subtitle}</p>
        <p className="text-[14px] mt-2 text-foreground/40 group-hover:text-foreground/70 transition-colors">
          View case study →
        </p>
      </div>
    </>
  )

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {card}
    </Link>
  )
}
