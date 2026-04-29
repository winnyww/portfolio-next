import type { Project } from "./projects"

export const workProjects: Project[] = [
  {
    slug: "chat-redesign",
    title: "AI Analyst Chat Redesign",
    subtitle: "Founding Product Designer @ Athenic AI",
    description:
      "Athenic is an AI platform for enterprise data analyst teams. As the user base grew to 500+ power users, failed queries became a trust problem. I redesigned the AI chat experience to close the gap between how users talk and how the AI interprets their dataset.",
    tags: ["Product Design", "AI", "B2B", "Chat UX"],
    coverImage: "/images/chat-redesign-cover.png",
    timeline: "21 months",
    projectType: "Product Design",
    tools: "Figma",
    team: [
      "1 manager",
      "3 engineers",
      "3 marketers",
      "1 designer (me)",
    ],
    contribution: [
      {
        role: "Founding Product Designer",
        description:
          "End-to-end ownership of the AI chat redesign — from problem framing and user research to shipped features across four milestones.",
      },
    ],
    sections: [
      {
        label: "Overview",
        heading: "Context & Key Metrics",
        content:
          "**500+ power users** on an enterprise AI analytics platform.\n\n**4–5× average session time growth** over 21 months.\n\n**8 design features shipped** across 4 milestones.\n\nAthenic's AI chat lets data analysts query business data in plain language. As the product scaled, a pattern emerged: users' domain-specific language didn't map cleanly onto the AI's understanding of the dataset — leading to failed queries, confusion, and eroded trust.",
        images: ["/images/chat-metrics.svg"],
        imageMaxWidth: "700px",
      },
      {
        label: "Problem",
        heading: "The Gap Between Human Language and AI Understanding",
        content:
          "There is a gap between human domain-specific language and AI understanding from the dataset — caused by ambiguity, casual phrasing, and human error.\n\nThis leads to:\n- **Failed queries** — the AI returns wrong or empty results\n- **Wasted time** — users iterate blindly without knowing why something failed\n- **Lost trust** — repeated failures make users doubt the platform",
        images: ["/images/athenic-old-homepage.png"],
        imageCaptions: ["The old homepage: empty state with no guidance, no context, no starting point"],
        imageMaxWidth: "700px",
      },
      {
        label: "Solution",
        heading: "Four Pillars for Supportive Question Asking",
        content:
          "The north star: build a supportive tool for question asking that increases data language matching and reduces errors.\n\n#### #1: Key Terms\n\nColor-coded domain terms — positive, negative, informational — shown alongside the chat. Users can see which words the AI recognizes and how it categorizes them before running a query.\n\n#### #2: Suggested Questions\n\nPre-seeded example queries help users start without guessing. Especially useful for new projects or unfamiliar datasets.\n\n#### #3: Default Filter\n\nA pre-filled context clause in the input bar narrows the query scope automatically, reducing ambiguity before the user types a word.\n\n#### #4: Clean Error Feedback\n\nWhen a query fails, the response includes a plain-language explanation and the underlying SQL — so users understand what the AI did and how to improve the question.",
        images: [
          "/images/chat-annotated.png",
          "/images/chat-key-terms-setup.png",
          "/images/chat-suggested-q.png",
          "/images/chat-sql-explanation.png",
        ],
        imageCaptions: [
          "Redesigned chat: Key Terms panel, Suggested Questions, and Default Filter all visible at a glance",
          "AI Setup — adding Key Terms with positive / negative / informational color codes",
          "AI Setup — adding Suggested Questions to seed the project",
          "SQL explanation shown alongside the AI's answer for transparency",
        ],
        imageLayout: "grid-2",
      },
      {
        label: "Impact",
        heading: "Adoption & Outcomes",
        content:
          "Users adopted Key Terms across projects. The same question that previously failed now returned the correct answer — because users could see and use the right terminology before asking.\n\n- Fewer errors\n- More in-depth questions asked\n- Increased trust in AI responses\n\n**\"I like that I can take a look at the key terms when I was phrasing a question in my mind… I also like how the color codes and animation link them together.\"**\n\n— Andrew Cho, Lead Data Scientist at BMW",
      },
    ],
  },
]
