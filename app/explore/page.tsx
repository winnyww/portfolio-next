import Link from "next/link"
import Image from "next/image"
import AnimatedSection from "@/components/AnimatedSection"
import { exploreProjects } from "@/lib/explore-projects"

export default function ExplorePage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="w-[90%] md:w-[70%] mx-auto">
        <AnimatedSection>
          <div className="pt-10 pb-16">
            <h1 className="text-2xl font-semibold mb-2">Explore More</h1>
            <p className="text-base text-foreground/50">Projects &amp; Experiments</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-16">
          {exploreProjects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.07}>
              <Link href={`/explore/${project.slug}`} className="group block">
                {/* Card — image fills edge to edge */}
                <div className="relative w-full rounded-[20px] overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-foreground/8" />
                  )}
                  {/* Badge */}
                  {project.tags[0] && (
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
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
