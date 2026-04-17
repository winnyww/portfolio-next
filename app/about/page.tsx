import AnimatedSection from "@/components/AnimatedSection"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen flex items-center py-24">
      <div className="w-[90%] md:w-[70%] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        {/* Text — always on top when stacked */}
        <AnimatedSection className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-8">About</h1>
          <div className="text-lg leading-relaxed space-y-5 text-foreground/80">
            <p>
              I&apos;m a creative designer with critical humanistic thinking.
              I pursue education in both arts and sciences, and have developed
              a deep interest in addressing humanistic issues in a creative
              digital manner.
            </p>
            <p>
              My favorite projects are the ones that focus on human experience
              and encourage meditation on life. I work across interactive
              experience, UX design, data visualization, wearable technology,
              and more.
            </p>
          </div>

          <div className="mt-10 flex gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/peiyao-winny-wang/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </AnimatedSection>

        {/* Portrait — below text on small screens */}
        <AnimatedSection delay={0.15} className="w-full md:w-1/2">
          <div className="relative w-full rounded-[16px] overflow-hidden" style={{ height: "min(60vh, 400px)" }}>
            <Image
              src="/images/me.jpg"
              alt="Winny Wang"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
