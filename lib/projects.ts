export type ProjectSection = {
  label: string       // Left column: category — "Problem", "Research", "Design", "Solution", "Reflection"
  heading: string     // Right column: specific heading — can be "" to omit the heading
  content: string     // supports **bold**, - bullets, #### subheadings via renderContent()
  images?: string[]
  imageCaptions?: string[] // parallel array to images
  imageLayout?: "stack" | "grid-2" | "grid-3" | "grid-1-2" | "grid-2-1" | "carousel" | "gallery" // default: stack
  figmaEmbed?: string      // Figma prototype embed URL
  sectionVideo?: string    // single video path e.g. /videos/gem-demo-1.mp4
  videos?: string[]        // multiple videos interleaved with #### subheadings in content
  videoMaxWidth?: string   // max-width for interleaved videos e.g. "400px"
  imageMaxWidth?: string   // max-width for stack images e.g. "500px"
  imageHeight?: string     // fixed height for grid images e.g. "280px"
  imageAlign?: "left" | "center" | "right"
  quote?: string           // quote text for side-by-side quote+image layout
  quoteAttribution?: string // attribution for quote
}

export type Project = {
  slug: string
  title: string
  comingSoon?: boolean
  minimalLayout?: boolean
  subtitle: string
  description: string
  tags: string[]
  coverImage: string
  videoUrl?: string
  timeline: string
  projectType?: string
  collaborationType?: string
  tools: string
  team?: string[]
  contribution: { role: string; description?: string }[]
  sections: ProjectSection[]
  contactNote?: string
}

export const projects: Project[] = [
  {
    slug: "gem",
    title: "G.EM",
    subtitle: "AI virtual mentor for UX researchers",
    description:
      "G.EM (Gen-AI for Empathy Building) is an emotion-aware intelligent system, envisioning an AI virtual mentor for user interviews. With the real-time emotion analysis and AI-powered insight generation, G.EM aims to help UX researchers increase the quality of qualitative research.",
    tags: ["UX Research", "Figma", "Emotion AI", "Usability Test"],
    coverImage: "/images/gem-cover.png",
    timeline: "Sep - Dec 2023 (3 months)",
    projectType: "MDes Thesis Project",
    tools: "Google Docs/Sheets, Figma, Hume.ai (Emotion AI), Otter.ai (Meeting Gen-AI), Visual Studio Code, Adobe Suite",
    contribution: [
      { role: "User/Technology Research", description: "I identified needs for UX researchers and explored the potentials of utilizing AI technology to solve the problem" },
      { role: "UX/UI Design", description: "based on research findings, I designed and prototyped G.EM as a platform to empower qualitative user interviews" },
      { role: "Prototyping" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "What is G.EM?",
        content:
          "G.EM (Gen-AI for Empathy Building) is my MDes thesis project exploring how AI can support UX researchers during qualitative interviews. User interviews are a cornerstone of UX research, yet they are also one of the most demanding tasks — requiring researchers to actively listen, probe, take notes, and manage rapport simultaneously. G.EM envisions an AI-powered system that helps researchers focus on the conversation by handling capture, analysis, and suggestions in real time.",
      },
      {
        label: "Problem",
        heading: "Challenges in User Interviews",
        content:
          "__User interviews, a common practice for every UX researcher, can be very challenging.__ In a short amount of time, researchers capture qualitative data through conversations, trying to understand their potential users' behaviors, preferences or lifestyle. The researchers need to master multiple skills to excel a user interview, which requires the most workload in the least time.",
        images: [
          "/images/gem-problem-1.jpg",
          "/images/gem-problem-2.jpg",
          "/images/gem-problem-3.jpg",
          "/images/gem-problem-4.jpg",
        ],
      },
      {
        label: "Research",
        heading: "Exploring Emotion AI Technology",
        content:
          "I conducted research into Emotion AI technology to determine the potentials of utilizing it for user research. Emotion AI technology can detect, categorize and analyze expressional emotions from language used, speech prosody, facial expression, etc. __The emotion data of user interviews can be very valuable for researchers to understand how to improve the research process.__",
        images: ["/images/gem-research-1.jpg", "/images/gem-research-2.jpg"],
      },
      {
        label: "Design",
        heading: "Designing with Gen-AI",
        content:
          "Taking emotions into consideration, I explored a design which uses Gen-AI to determine the quality of user interview conversation, and generate suggestions to improve the quality.",
        images: ["/images/gem-design-1.png", "/images/gem-design-2.jpg"],
      },
      {
        label: "Solution",
        heading: "G.EM in Action",
        content:
          "With the insights I gathered from research, I built a Figma prototype of G.EM's features, from capturing to analysis to customization.\n\n#### #1: Capture\n\n1. Automatically **take meeting notes** during the interview, make it easy to rewatch the conversation details\n2. **Real-time capture the emotional data** from voice burst, language use and prosody for analysis\n\n#### #2: Suggest\n\n1. Push easy-to-read tooltip on your chosen device to **provide instant assistance** during your meeting\n2. Just enough to help you out when you're stuck **without getting in the way of your conversations**\n\n#### #3: Insights\n\n1. **In-depth analysis** after an interview session for reflecting and learning\n2. Gives **emotion-aware suggestions** how you can improve this interview which is powered by Gen-AI\n\n#### #4: Collect\n\n1. **Evaluate** the suggestions with your own judgement, give feedback to AI model\n2. **Collect useful suggestions** to Performance page for further practices, or **fine-tuning AI model**",
        videos: [
          "/videos/gem-demo-1.mp4",
          "/videos/gem-demo-2.mp4",
          "/videos/gem-demo-3.mp4",
          "/videos/gem-demo-4.mp4",
        ],
        videoMaxWidth: "760px",
      },
    ],
  },
  {
    slug: "sf-picnic",
    title: "SF Picnic Rental",
    subtitle: "Redesigning an outdated picnic booking website for SF residents",
    description:
      "The San Francisco Recreation and Park Department offers picnic rental services on their official website to the general picnic. However, the website isn't very intuitive to use. In my Product Design class, we were instructed to redesign the website in mobile format.",
    tags: ["User Flow", "Figma", "Interaction Design", "Mobile Design"],
    coverImage: "/images/sfpicnic-cover.jpg",
    timeline: "Sep - Oct 2023 (4 weeks)",
    projectType: "Individual Class Project",
    tools: "Google Docs, Figma",
    team: ["Jamie Reffell (Instructor)"],
    contribution: [
      {
        role: "UX Analysis",
        description:
          "Conducted a comprehensive analysis of the product, focusing on its features, functionality, user experience, and performance.",
      },
      {
        role: "UX/UI Design",
        description:
          "Informed by research findings, prototyped new design concepts aimed at achieving the established design goals.",
      },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Redesigning an Outdated Booking Site",
        content:
          "This is a class project from my Product Design course at CCA, where I redesigned the San Francisco Recreation and Park Department's picnic rental website. The existing site is outdated, visually overwhelming, and difficult to navigate — making it hard for users to find, evaluate, and book picnic spots. __My goal was to redesign the experience in mobile format, focusing on clarity, usability, and conversion.__",
      },
      {
        label: "Problem",
        heading: "Unintuitive Design",
        content:
          "The existing SF picnic rental website's design is outdated and overloaded with information, lacking a clear information architecture. This makes it difficult for users to locate call-to-action buttons or access detailed information about each picnic spot, significantly burdening those looking to make reservations.",
        images: ["/images/sfpicnic-design-1.png", "/images/sfpicnic-problem-2.png"],
        imageCaptions: ["Mobile Design Interface", "Website Design Interface"],
      },
      {
        label: "Analysis",
        heading: "User Flow Walkthrough",
        content:
          "To assess the current user flow, I established specific redesign objectives, taking into account several key aspects of SF picnic rental services:\n\n- **Target Users:** Focus on San Francisco residents who rely on public transportation.\n- **User Goals:** Enable users to select spots based on location and various filters.\n- **Business Goals:** Increase the number of users completing reservations.",
        images: ["/images/sfpicnic-research-1.png"],
        imageCaptions: ["User Flow Evaluation & Analysis"],
      },
      {
        label: "Ideation",
        heading: "Brainstorm & Competitor Analysis",
        content:
          "After identifying frictions and challenges in the current design, I initiated the brainstorming process with quick sketches and drew inspiration from other apps with similar functionalities.",
        images: ["/images/sfpicnic-problem-1.webp", "/images/sfpicnic-design-2.png"],
      },
      {
        label: "Solution",
        heading: "User-friendly Redesign",
        content:
          "Based on research and analysis aimed at enhancing the user experience, I developed Figma prototypes focused on several key design concepts:\n\n- **Simplicity:** Eliminating unnecessary steps and tabs to streamline the process.\n- **Interactivity:** Introducing interactive pins on the map for more engaging navigation.\n- **Aesthetics:** Enhancing visibility through cleaner visual design.\n- **Usability:** Incorporating smart filters to simplify the search process.\n\n#### #1: Interactive Map\n\nLocation plays a crucial role in users' selection of picnic rental spots. To address this, I designed an interactive map component, enabling users to access detailed information by clicking on map pins.\n\n#### #2: Smart Filters\n\nIn addition to location, numerous factors influence users' decision-making. To accommodate this, I developed a filtering panel, allowing users to refine their options by applying specific filters.\n\n#### #3: Streamlined Booking\n\nWhen ready to make a reservation, users will find all necessary details on the reservation page. Additionally, a pop-up window will prompt them to create an account, enhancing their chances of securing their booking successfully.",
        videos: [
          "/videos/sfpicnic-demo-1.mp4",
          "/videos/sfpicnic-demo-2.mp4",
          "/videos/sfpicnic-demo-3.mp4",
        ],
        videoMaxWidth: "360px",
      },
      {
        label: "Reflection",
        heading: "Opportunities in Public Design",
        content:
          "Even though this was a class project, I realized that there are many opportunities to practice redesigning products, like this official website of San Francisco picnic rental services. There are many official websites that are outdated and neglected by people as well. They can be good opportunities for UX designers like us to practice more.",
      },
    ],
  },
  {
    slug: "sustainable-design",
    title: "Sustainable Design x Electrolux",
    subtitle: "Minimizing plastic waste in refrigerator design",
    description:
      "During a semester-long partnership with Electrolux, the Swedish multinational home appliance manufacturer, I worked alongside a cross-functional team to explore avenues for enhancing refrigerator sustainability. Our focus was on understanding and influencing customer behaviors and examining sustainable materials.",
    tags: ["UX Research", "Figma", "Quantitative Data", "Material Research"],
    coverImage: "/images/electrolux-cover.png",
    timeline: "Aug - Dec 2022 (3 months)",
    collaborationType: "Academic Internship",
    tools: "Google Suite, Figma, Adobe Suite, Zoom, Qualtrics",
    team: [
      "Barry Waddilove (Head of Design)",
      "Renee Paris (Sustainability Manager)",
      "Jan Veicht (Product Manager)",
      "Stella Disselkamp (Customer Research)",
      "Ming Xian Toh (Material Research)",
    ],
    contribution: [
      {
        role: "Quantitive Research",
        description: "I crafted and executed a detailed customer survey via Qualtrics to collect essential quantitative data",
      },
      {
        role: "UX Design",
        description: "I utilized survey results to conceptualize and prototype a sustainable refrigerator design in Figma, focusing on user experience and environmental friendliness",
      },
      {
        role: "Client Liaison",
        description: "I acted as the primary point of contact for Electrolux, leading weekly meetings and handling email communications to ensure project alignment and success",
      },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Partnership with Electrolux",
        content:
          "This semester-long academic partnership with Electrolux gave our cross-functional team a unique opportunity to tackle refrigerator sustainability at scale. Electrolux, a global home appliance manufacturer, is committed to reducing the environmental footprint of its products. Our team explored two angles: sustainable materials as alternatives to plastic, and ways to __empower customers to make more eco-conscious purchasing decisions.__",
      },
      {
        label: "Problem",
        heading: "Enormous Plastic Waste",
        content:
          "Electrolux is committed to environmental protection and reducing the carbon footprint of its products. Refrigerators, ubiquitous in households, contribute significantly to plastic waste, posing a substantial challenge due to their size, complex disposal process, and hazardous materials. Consequently, Electrolux approached us to __identify the most effective strategies for minimizing plastic usage,__ considering both material selection and consumer behavior.",
        images: ["/images/electrolux-problem-1.jpg", "/images/electrolux-problem-2.jpg"],
      },
      {
        label: "Research",
        heading: "Expert Interviews on Sustainable Materials",
        content:
          "__In the initial phase of our research, we concentrated on evaluating the sustainability of various materials used in refrigerator construction.__ To mitigate plastic waste, we explored the feasibility of substituting plastic with more eco-friendly alternatives such as aluminum, steel, or glass. We conducted expert interviews with recycling professionals, partnering with Recology.",
        images: [
          "/images/electrolux-materials-1.jpg",
          "/images/electrolux-materials-2.jpg",
          "/images/electrolux-materials-3.jpg",
          "/images/electrolux-materials-4.jpg",
        ],
        imageCaptions: ["Expert Interview with Recology", "", "", ""],
      },
      {
        label: "Survey",
        heading: "Customer Behavior Study",
        content:
          "Having gained a thorough understanding of the materials, we shifted our focus to the consumer perspective, recognizing that purchasing power ultimately resides with the customers. We questioned which materials customers would prefer, what factors they consider when purchasing a refrigerator, and their interpretation of sustainability. __To delve into their preferences and how these influence their purchasing decisions, we crafted a survey using Qualtrics to gather data.__\n\nSurvey Structure: a combination of yes/no, open questions, ranking, rating exercises",
        images: [
          "/images/electrolux-survey-1.jpg",
          "/images/electrolux-survey-2.png",
          "/images/electrolux-survey-3.jpg",
          "/images/electrolux-survey-4.jpg",
          "/images/electrolux-survey-5.jpg",
          "/images/electrolux-survey-6.jpg",
        ],
      },
      {
        label: "Concept",
        heading: "DIY Sustainability Refrigerator",
        content:
          "Drawing inspiration from a Samsung initiative, we developed a prototype for a \"DIY Your Own Refrigerator\" concept aimed at empowering Electrolux customers to enhance the sustainability of their refrigerators. __This interactive design allows customers to understand the environmental impact of each choice they make.__ They are provided with a sustainability score based on their selections, including the model, materials, add-on services, and more, encouraging more environmentally conscious decisions.",
        images: [
          "/images/electrolux-design-1.jpg",
          "/images/electrolux-design-2.png",
          "/images/electrolux-design-3.jpg",
        ],
        imageCaptions: ["", "Documentation of Semester-long Research", "Final Presentation & Handoff to Client"],
        sectionVideo: "/videos/electrolux-demo.mp4",
      },
      {
        label: "Reflection",
        heading: "Designing for Real Impact",
        content:
          "This project presented a significant opportunity to focus on sustainability in collaboration with a company capable of effecting real change. Designing under these conditions proved challenging, as considerations extended beyond customer preferences to encompass broader environmental implications. Consequently, our design was informed by extensive research into materials and recycling processes, ensuring that every decision contributed positively to both user satisfaction and ecological sustainability.",
      },
    ],
  },
]
