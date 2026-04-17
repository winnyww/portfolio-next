import { type ProjectSection } from "./projects"

export type ExploreProject = {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  coverImage?: string
  timeline: string
  projectType?: string
  achievement?: string
  tools: string
  team?: string[]
  mentors?: string[]
  contribution: { role: string; description?: string }[]
  sections: ProjectSection[]
}

export const exploreProjects: ExploreProject[] = [
  {
    slug: "design-for-human-connection",
    title: "Bondie",
    subtitle: "Design for human connection",
    description:
      "A baby care product that reimagines the parent-child interaction when they are away from them. It creates different sensory experiences to strengthen the parent-child bond.",
    tags: ["IoT", "Figma", "Soft Robotics"],
    coverImage: "/images/bondie-cover.jpg",
    timeline: "Oct - Dec 2022 (2 months)",
    projectType: "Group Project",
    tools: "ESP32 Wifi, FSR Sensor, Pulse Sensor, Vibration Sensor, Heating Pad, Servo, Air Pump, Pipes",
    team: [
      "Yidie Ling (technologist)",
      "Samriddho Ghosh (prototyper)",
      "Nian Tong (prototyper)",
      "Yemoon Cho (designer)",
    ],
    contribution: [
      {
        role: "Product Managing",
        description: "direct and plan the project development; organize teams on specific tasks; communicate with team members",
      },
      {
        role: "Programming",
        description: "develop the interactive programming system; build electronic component of the prototype",
      },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Strengthening Parent-Child Bonds Remotely",
        content:
          "Bondie is a haptic baby care product designed for parents who are physically away from their children. As parents return to work and daily routines, existing solutions like baby cameras only address the visual sense — leaving out the warmth, touch, and presence that define true connection. Bondie recreates those sensations through soft robotics and two-way haptic communication between a parent's blanket and a child's toy.",
      },
      {
        label: "Problem",
        heading: "The Challenge of Remote Parenting",
        content:
          "As the world returns to normal and parents move out for work and other chores, leaving their children alone or without undivided attention has become a major problem for parents. Current solutions in the market, be it baby cameras or any other technological intervention, caters to only the visual senses.\n\n**How might we make the interaction between parent and kids more intimate and natural when the parent is physically away from their kids?**",
        images: ["/images/bondie-1.png", "/images/bondie-2.png", "/images/bondie-3.png"],
        imageLayout: "stack",
      },
      {
        label: "Research",
        heading: "Competitor Analysis & User Interviews",
        content:
          "After defining the scope of the problem, our team developed competitive analysis on existing baby care products to understand the market need, use of technology and find opportunity for a new product.\n\nIn order to empathize with the parent users, our team conducted 7 in-depth interviews with potential parent users. We identified who the users are, understood their journey, analyzed their attitude towards existing products and captured the need for a more intimate, emotional connection with their children remotely.",
        images: ["/images/bondie-4.jpg", "/images/bondie-5.png", "/images/bondie-6.png"],
        imageLayout: "stack",
      },
      {
        label: "Synthesis",
        heading: "Empathizing with Parents",
        content:
          "With the information we gathered from interviews, we synthesized our findings and created persona profiles, user journeys and a 2×2 synthesis graph. Afterwards, we brainstormed 100 ideas for how we could solve the problem.",
        images: ["/images/bondie-7.jpg", "/images/bondie-8.jpg"],
        imageLayout: "stack",
      },
      {
        label: "Ideation",
        heading: "From 100 Ideas to One Concept",
        content:
          "In a one-hour brainstorm session, we wrote down all the ideas, no matter how crazy they sound.\n\nAmong our ideas, we selected one that stood out: haptic communication through objects — a blanket for the parent to provide warmth and comfort, a toy for the child to offer attention and playful moments. We mapped out the haptic sensations as breathing, warmth, grasp and touch, with different frequency patterns.",
        images: ["/images/bondie-9.png", "/images/bondie-10.png", "/images/bondie-11.png", "/images/bondie-12.png"],
        imageLayout: "stack",
      },
      {
        label: "Prototype",
        heading: "Building the Haptic System",
        content:
          "In order to simulate human skin-to-skin and touching movement, we experimented with pumping air into different soft materials including plastics, vinyl sheet and silicon. We documented the change in shape, form and volume, and tested on users to see whether it simulates close contact. We got the inspiration from aeroMorph, an MIT Media Lab project of making origami structure with inflatables.\n\nWe chose vinyl and used a sewing machine to seal parts of the double layered structure based on the principles of origami. This not only gave us flexibility to build complex geometries but also sped up the fabrication process. We completed installation of electrical components into a blanket for assembly.",
        images: ["/images/bondie-13.png", "/images/bondie-14.png", "/images/bondie-aeromorph.gif", "/images/bondie-15.png", "/images/bondie-16.png"],
        imageLayout: "stack",
      },
      {
        label: "Final Design",
        heading: "Bondie — Haptic Connection",
        content:
          "The final interaction design included two-way WIFI communication between the blanket for parent and toy for kid. Each side has its own inputs and outputs, and there is a mobile app for the parent to oversee the whole interaction.\n\nTogether, Bondie creates intimate connection for parent and kid through haptic, sensory interactions remotely. The parent can feel the child's heartbeat from the warmth in the blanket, and the child can feel the parent's presence from vibration, sound and warmth.\n\nBondie demonstrates the future of and beyond parent-child relationship — but rather all kinds of relationships that can enjoy richer connection over distance with haptic experiences and emerging technologies.",
        images: ["/images/bondie-17.png", "/images/bondie-18.png"],
        imageLayout: "stack",
      },
    ],
  },
  {
    slug: "design-for-data-visualization",
    title: "Interactive Data Portal",
    subtitle: "Design for data visualization",
    description:
      "An interactive portal for flexible, real-time data visualization for historical research for Humanities Research Lab at NYU.",
    tags: ["React", "Figma", "User Research & Test"],
    coverImage: "/images/dataportal-cover.jpg",
    timeline: "2021 - 2022 (Weekly Meeting)",
    projectType: "Part-time Internship",
    tools: "Figma, Illustrator, Github, React, Tailwind, Next.js, MongoDB, Google slides, Excel sheet",
    team: [
      "Heather Ruth Lee (mentor)",
      "Sarah Tahir (front-end)",
      "Yufeng Zhao (full-stack developer)",
      "Yuchen Wang (back-end)",
      "Tim Wu (data analysis)",
    ],
    contribution: [
      {
        role: "UX Research, Design & Test",
        description: "user interview; user tests; design clickable wireframes; build UI components",
      },
      {
        role: "Development",
        description: "program the front-end framework, implement styling and functionality",
      },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "Building a Data Portal from Scratch",
        content:
          "Humanities Research Lab is a multi-campus NYU project researching the significance of New York City immigrants. The lab had no web portal to integrate project creation and showcasing, making further development difficult. Our team set out to build an original data visualization portal from scratch — designed for the professors and students who would use it for academic teaching and learning.",
      },
      {
        label: "Problem",
        heading: "No Existing Portal for the Research Lab",
        content:
          "The lab and project were started in 2020, however, there wasn't a web portal integrating the project creating and showcasing, which increased the difficulty of further development.\n\n**How might we create an interactive portal to help students reach the learning goal of developing original arguments through visualizing historical data?**",
        images: ["/images/dataportal-1.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Problem",
        heading: "",
        content: "",
        images: ["/images/dataportal-2.png"],
        imageLayout: "stack",
        imageMaxWidth: "50%",
      },
      {
        label: "User Research",
        heading: "Understanding Professors & Students",
        content:
          "My team focused on our main target users — professors and students — and conducted interviews to understand how they teach and learn with data.\n\nThe main user will be students who take a history class and use the data portal to complete assignments. The secondary user will be professors who add the portal as a tool in the syllabus. After interviewing future student users, we identified the user journey as 5 steps: from getting to know the data in class to using the visualization tool and developing data insights independently.\n\nWe aim to build a data portal that serves two needs:\n\n1. Visualizing data to supplement teaching outside the classroom\n2. Assisting students to learn data and build their own narrative",
        images: ["/images/dataportal-3.jpg"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "User Research",
        heading: "",
        content: "",
        images: ["/images/dataportal-4.png"],
        imageLayout: "stack",
        imageMaxWidth: "100%",
      },
      {
        label: "User Research",
        heading: "",
        content: "",
        images: ["/images/dataportal-5.png"],
        imageLayout: "stack",
        imageMaxWidth: "50%",
      },
      {
        label: "Data Research",
        heading: "Deep Dive into the Dataset",
        content:
          "To build a data visualization portal, our team conducted in-depth research into the dataset used. We studied the meaning behind the data, the academic potentials and limitations in order to create a user-friendly portal that fulfills the vision of the curriculum.\n\nWe studied graph types — histogram, box plot, correlation matrix, scatter plot, bar graph and line graph — and chose **Plotly** as our visualization library. It is a powerful library that enables many customizable functions, and we selected a list of universal features to employ across all graphs to increase functionality.",
        images: ["/images/dataportal-6.png", "/images/dataportal-7.gif"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Data Research",
        heading: "Functional Features",
        content: "We selected a list of universal functions to employ in all the graphs in our portal in order to increase the functionality and interactivity.",
      },
      {
        label: "Competitor Research",
        heading: "Competitor Analysis",
        content:
          "After knowing the user and the data, the team jumped into a quick competitor analysis process where we looked into similar projects from other universities. We summarized **the style, content, user flow** in these websites, and helped ourselves to better imagine what our project could look like.",
        images: ["/images/dataportal-8b.png", "/images/dataportal-8.gif"],
        imageCaptions: ["", "Reference 01: MIT"],
        imageLayout: "grid-1-2",
        imageHeight: "420px",
      },
      {
        label: "Competitor Research",
        heading: "",
        content: "",
        images: ["/images/dataportal-9b.png", "/images/dataportal-9.gif"],
        imageCaptions: ["", "Reference 02: Yale"],
        imageLayout: "grid-1-2",
        imageHeight: "420px",
      },
      {
        label: "Competitor Research",
        heading: "",
        content: "",
        images: ["/images/dataportal-10b.png", "/images/dataportal-10.gif"],
        imageCaptions: ["", "Reference 03: Stanford"],
        imageLayout: "grid-1-2",
        imageHeight: "420px",
      },
      {
        label: "Iteration 1",
        heading: "Multi-panel Comparison View",
        content:
          "**The first design focused on functionality.** One major task for students is to compare and summarize different graph types. We created a multi-panel visualization wireframe, emphasizing prominent functionality and data visualization logic.\n\nWe created a clickable wireframe on Marvelapp.com and conducted 7 in-depth user tests. Users thought out loud as they went through the wireframe. We concluded this design was over-complicated, which also added difficulty to the back-end workload.",
      },
      {
        label: "Iteration 1",
        heading: "User Testing",
        content: "We documented users' reactions and confusion. Users thought the design seemed over-complicated.",
        images: ["/images/dataportal-12.gif", "/images/dataportal-12b.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Iteration 2",
        heading: "Simplified Workflow",
        content:
          "**The second design focused on smooth workflow.** We eliminated unnecessary windows and tabs, centering only one active graph on the screen. This design contains a side-by-side panel with clear distinction between data input and output.\n\nSimilarly, we observed users go through clickable wireframes and documented their feedback. We then made quick adjustments and conducted a third round of user tests through a slide deck walkthrough for immediate responses.",
      },
      {
        label: "Iteration 2",
        heading: "User Testing",
        content: "We conducted a third round of user tests with the same users through a slide deck walkthrough for immediate responses.",
        images: ["/images/dataportal-13.png", "/images/dataportal-13b.gif"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Final Design",
        heading: "The Final Portal",
        content:
          "The team synthesized the research and user test findings and designed the final wireframe for a neat and smooth workflow. We utilized shapes, chose a soft background color to stand out high contrast visualizations, and developed a prototype with functional front and back end.\n\nThe interactive data portal is an on-going project that aims to host on the NYU network server for first-year core curriculum. Our work of user research, data analysis, UX design and development serve as the foundation for further iteration and updates.",
        images: ["/images/dataportal-14.png", "/images/dataportal-15.png"],
        imageLayout: "stack",
        imageMaxWidth: "80%",
      },
      {
        label: "Final Design",
        heading: "",
        content: "",
        images: ["/images/dataportal-16.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Final Design",
        heading: "",
        content: "",
        images: ["/images/dataportal-17.png"],
        imageLayout: "stack",
        imageMaxWidth: "80%",
      },
    ],
  },
  {
    slug: "design-for-interactive-art",
    title: "Mirroring Loss",
    subtitle: "Design for interactive art",
    description:
      "An artwork that serves as a meditative ritual to bid farewell to the people who lost their lives due to Covid-19. It aims to challenge the social prejudices and their dominance on mentality during the ongoing global crisis by designing a meaningful self-reflection experience.",
    tags: ["Interactive Art", "Motion Capture", "Three.js"],
    coverImage: "/images/mirroring-cover.jpg",
    timeline: "Two semesters",
    projectType: "Capstone Project",
    achievement: "Data Analysis & Visualization, Computational Vision, Real-time Interaction, Installation Exhibition",
    tools: "Figma, Illustrator, Github, React, Tailwind, Next.js, MongoDB, Google slides, Excel sheet",
    mentors: ["Junghyun Moon", "Yanyue Yuan"],
    contribution: [
      { role: "Concept & Research" },
      { role: "Interaction Design" },
      { role: "Development" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "A Memorial for Covid-19 Lives",
        content:
          "Mirroring Loss is an interactive installation that recreates memorial ceremony rituals — designing an empathic experience around death due to Covid-19. Using a Kinect depth camera and Three.js particle system, it transforms the viewer's own silhouette into a living memorial, where each particle represents a life lost. The work invites reflection on collective loss at a time when the world fears closeness.",
      },
      {
        label: "Context",
        heading: "The Chaos of 2020",
        content:
          "The memories of 2020 are full of chaos: contagious disease, the shutdown of schools and shops, people losing jobs. It is hard to imagine how much terror, anxiety and prejudice emerged directly proportional to confirmed Covid-19 cases worldwide. The phrase \"Chinese virus\" boosted shockingly from 2% to 61% in two weeks (trends.google.com).\n\nWe are sometimes buried in such chaos, distress and anger, while forgetting that 2020 signifies the sudden loss of lives. When the overall society fears closeness, people might lose the basic practices to interact and feel each other's sorrow or joy. A retrace of empathic experience becomes necessary.\n\n**How to build empathy of lost lives due to Covid-19 through an interactive digital experience?**",
        images: ["/images/mirroring-2.png", "/images/mirroring-3.png"],
        imageLayout: "stack",
      },
      {
        label: "Research",
        heading: "Literature & Related Art",
        content:
          "I started my research by looking into relevant literature on 'empathy', from philosophical writings to psychology theories to news articles. In order to design an interactive experience, I then conducted research on user experience design strategies and data analysis.\n\nI also researched relevant art projects and practices — either serving a similar purpose of contextualization and reflection, or inspirational in method for creating a reflective experience.\n\n\"a person or group of people can suffer real damage, real distortion if the people or society around them mirror back to them a confining or demeaning or contemptible picture of themselves\"\n— Charles Taylor. (1992). \"Multiculturalism and the politics of recognition\"\n\nRelated artwork: Sarah Howorka. (2015). \"average face mirror\"",
        images: ["/images/mirroring-4.png", "/images/mirroring-5.png", "/images/mirroring-mirror.jpg", "/images/mirroring-6.png"],
        imageLayout: "stack",
      },
      {
        label: "Concept",
        heading: "Designing an Empathic Experience",
        content:
          "Mirroring Loss recreates the memorial ceremony rituals and environments, passing along the feeling of loss and honoring death. It designs a sophisticated process to emerge this awareness step by step — focusing on the inquiry: how to engage users in reflecting about death by linking the data of lost lives with the users themselves?",
        images: ["/images/mirroring-7.png"],
      },
      {
        label: "Development",
        heading: "Real-Time Depth Tracking Particle System",
        content:
          "To simulate a smooth process of looking inside the mirror, I used a Kinect depth tracking system to receive information about the user's gestures and body image, making an intuitive and spontaneous process. The depth camera sends real-time coordination information to the Three.js environment and generates an immediate self-reflection on screen.",
        images: [
          "/images/mirroring-cap23.jpg",
          "/images/mirroring-cap21.jpg",
          "/images/mirroring-cap8.jpg",
          "/images/mirroring-cap7.jpg",
          "/images/mirroring-cap6.jpg",
          "/images/mirroring-cap5.jpg",
        ],
        imageLayout: "stack",
      },
      {
        label: "Outcome",
        heading: "The Final Artwork",
        content:
          "Mirroring Loss helps us become consciously aware of the large number of deaths caused by Covid-19, and at the same time reflect on the collective human loss. In a way, a visual representation of the user will experience death in the process under the larger background of the pandemic.\n\nIt directly conveys that everyone is waiting for this crisis to end, preparing for a collective moment to honor death. The artwork becomes not only a place to mourn, but also to celebrate life, affection, and empathy.",
        images: [
          "/images/mirroring-cap4.jpg",
          "/images/mirroring-cap3.jpg",
          "/images/mirroring-cap9.jpg",
          "/images/mirroring-cap10.jpg",
          "/images/mirroring-cap11.jpg",
          "/images/mirroring-cap12.jpg",
        ],
        imageLayout: "stack",
      },
      {
        label: "Exhibition",
        heading: "Exhibition & Recognition",
        content:
          "**June - July 2021**\nNeo-Imaginaria: A Collection of Gen-Z New Media Poetics, M50 Shanghai Contemporary Art District\n\n**Oct - Nov 2021**\nNew Youth: 16th Shanghai Youth Art Exhibition, Liu Haisu Art Museum\n(selected out of 1800 artists and 4800 submitted projects)\n\n**Nov - Dec 2021**\nWhat's Next, Art & Design Education FutureLab",
      },
    ],
  },
  {
    slug: "design-for-inclusive-xr",
    title: "Haptic Vision",
    subtitle: "Design for inclusive XR",
    description:
      "Haptic Vision is an inclusive technology that allows individuals to navigate their physical surroundings with greater ease and understanding.",
    tags: ["UX Design", "VR/AR", "Unity"],
    coverImage: "/images/haptic-cover.png",
    timeline: "Jan 13 - 15, 2023 (2.5 days)",
    projectType: "MIT Reality Hackathon, Semi-Finalist",
    tools: "Figma, Illustrator, Premiere Pro, HapTx Haptic Gloves, HTC Vive Pro Eye, Unity",
    team: [
      "Winny Wang (UX designer)",
      "Christine Saderr (UX designer)",
      "Kyle Diaz-Castro (UX designer)",
      "Leon Kipkoech (Developer)",
      "Malmon Powers (Developer)",
    ],
    contribution: [
      { role: "UX Research & Design" },
      { role: "Prototype & Test" },
      { role: "Branding" },
    ],
    sections: [
      {
        label: "Introduction",
        heading: "MIT Reality Hackathon — Semi-Finalist",
        content:
          "Over 2.5 days at the MIT Reality Hack, 350+ participants built VR/AR projects from scratch. Our team of 5 designed and prototyped Haptic Vision — an inclusive XR navigation tool for visually impaired individuals — earning Semi-Finalist status and feature coverage in organizational videos.",
        images: ["/images/haptic-1.png", "/images/haptic-2.png", "/images/haptic-3.png"],
        imageLayout: "stack",
      },
      {
        label: "Problem",
        heading: "Navigating as a Visually Impaired Person",
        content:
          "**How might we utilize XR technology and design a smart navigation tool for the visually impaired?**\n\nVisually impaired users have a difficult time navigating their environment confidently. Existing tools like white canes provide limited spatial awareness and no sense of distance or object detail.",
        images: ["/images/haptic-4.jpg"],
      },
      {
        label: "Research",
        heading: "Exploring XR Solutions",
        content:
          "We explored three solution directions: visual enhancements, audio-based systems, and haptic feedback. We conducted user research with visually impaired individuals to understand their pain points, how they perceive their environment, the tools they currently use, and what they desire from a new solution.",
        images: ["/images/haptic-5.jpg"],
      },
      {
        label: "Design",
        heading: "MVP: Haptic Feedback Navigation",
        content:
          "We selected the haptic feedback approach — detecting nearby objects and using haptics to let users feel how far each object is. The color palette was designed to be tritanopia color-blind friendly, ensuring the product is inclusive across multiple visual conditions.\n\nBy utilizing sound and haptic feedback, Haptic Vision is an extension of a traditional seeing cane, enabling users to sense the presence of nearby objects and furniture. The closer they get to an object, the stronger and more detailed the sensation becomes.",
      },
      {
        label: "Build",
        heading: "Technologies & Implementation",
        content:
          "- Unity 19.4.31f\n- HapTx 2.0.0 beta 8\n- HTC Vive Pro Eye with Lighthouses\n- HapTx haptic gloves\n\n**Physical Environment / Mixed Reality:** Created 3D environment model using SR Works\n\n**Hand Tracking:** Implemented via HapTx SDK\n\n**Object Detection:** SR Works AI identified common objects (chairs, tables)\n\n**Distance Approximation:** Unity ray casting determined hand-to-object distance\n\n**Haptics:** Frequency range 15-30 Hz based on distance",
      },
      {
        label: "Testing",
        heading: "Testing with Users",
        content:
          "The user wears the gloves and headset and uses their hands to sense the room from the haptic feedback. The closer they get to objects, the stronger the vibration.\n\nWe're the first group in history to make a haptic XR experience with these gloves.",
        images: ["/images/haptic-6.jpg", "/images/haptic-7.jpeg", "/images/haptic-8.jpeg", "/images/haptic-9.jpg"],
        imageLayout: "stack",
      },
      {
        label: "Vision",
        heading: "Inclusive Design & Future",
        content:
          "Our product is designed for individuals of all abilities. For those with visual impairments, Haptic Vision is an essential tool that can assist in understanding and navigating their environment. For those without visual impairments, it offers a unique, empathetic experience.\n\nWe envision Haptic Vision as a pioneering solution for the future of navigation — a glimpse into the next 5-10 years, where innovative technologies will revolutionize how people with visual impairments interact with the world around them.",
      },
    ],
  },
]
