import AnimatedSection from "@/components/AnimatedSection"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-12 pt-[100px] md:pt-[120px] pb-16 md:pb-20">
        <AnimatedSection>
          <p className="text-[24px] md:text-[36px] leading-[38px] md:leading-[52px] w-[80%]">
            <span className="block">Hi, I&apos;m Winny ✨</span>
            <span className="block">I&apos;m a product designer with an interest in making complex data workflows feel intuitive 🌸</span>
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px] md:text-[20px]">
              <span className="text-[18px] md:text-[22px]">👩🏻‍💻</span>
              {"  "}Currently designing @ Athenic Ai
            </p>
            <p className="text-[16px] md:text-[20px]">
              <span className="text-[18px] md:text-[22px]">📍 </span>San Francisco, California
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Project Grid */}
      <section id="work" className="w-[90%] md:w-[70%] mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-16">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.07}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-foreground/40 pb-12">
        <p>© {new Date().getFullYear()} Winny Wang</p>
      </footer>
    </>
  )
}
