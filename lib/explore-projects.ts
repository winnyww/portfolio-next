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
          "Bondie is a haptic baby care product designed for parents who are physically away from their children. As parents return to work and daily routines, existing solutions like baby cameras only address the visual sense — leaving out the warmth, touch, and presence that define true connection. Bondie recreates those sensations __through soft robotics and two-way haptic communication between a parent's blanket and a child's toy.__",
      },
      {
        label: "Problem",
        heading: "The Challenge of Remote Parenting",
        content:
          "As the world returns to normal and parents move out for work and other chores, __leaving their children alone or without undivided attention has become a major problem for parents.__ Current solutions in the market, be it baby cameras or any other technological intervention, caters to only the visual senses.\n\n**How might we make the interaction between parent and kids more intimate and natural when the parent is physically away from their kids?**",
        images: ["/images/bondie-1.png"],
        imageLayout: "stack",
      },
      {
        label: "Research",
        heading: "Research 01: Competitor Analysis",
        content:
          "After defining the scope of the problem, our team developed competitive analysis on existing baby care products to **understand the market need, use of technology and find opportunity for a new product.**",
        images: ["/images/bondie-2.png"],
        imageLayout: "stack",
      },
      {
        label: "Research",
        heading: "Research 02: User Interviews",
        content:
          "In order to empathize with the parent users, our team conducted **7 in-depth interviews** with potential parent users. We identified who the users are, understood their journey, analyzed their attitude towards existing products and captured the __need for a more intimate, emotional connection with their children remotely.__",
        images: ["/images/bondie-3.png", "/images/bondie-4.jpg"],
        imageLayout: "stack",
      },
      {
        label: "Synthesis",
        heading: "Empathizing with Parents",
        content:
          "With the information we gathered from interviews, we **synthesized our findings** and created persona profiles, user journeys and a 2×2 synthesis graph. Afterwards, we brainstormed 100 ideas for how we could solve the problem.",
        images: ["/images/bondie-5.png", "/images/bondie-6.png"],
        imageLayout: "stack",
      },
      {
        label: "Ideation",
        heading: "Ideate 01: Brainstorm",
        content:
          "After understanding who the users are, what the users need, we start the brainstorming process with 100 ideas. In a one-hour brainstorm session, we wrote down all the ideas, no matter how crazy they sound.",
        images: ["/images/bondie-7.jpg"],
        imageLayout: "stack",
      },
      {
        label: "Ideation",
        heading: "Ideate 02: Concept",
        content:
          "Among our ideas, we selected one that stood out: __haptic communication through objects,__ a blanket for parent to provide warmth and comfort, a toy for child to offer attention and playful moments. We mapped out the haptic sensations as **breathing, warmth, grasp and touch**, with different frequency patterns.",
        images: ["/images/bondie-8.jpg"],
        imageLayout: "stack",
      },
      {
        label: "Prototype",
        heading: "Prototype 01: Material Experiment",
        content:
          "In order to **simulate human skin-to-skin and touching movement**, we experimented with pumping air into different soft materials including plastics, vinyl sheet and silicon. __We documented the change in shape, form and volume, and we tested on users to see whether it does simulate close contact.__ We got the inspiration from aeroMorph, an MIT Media Lab project of making origami structure with inflatables.",
        images: ["/images/bondie-aeromorph.gif", "/images/bondie-9.png", "/images/bondie-10.png"],
        imageMaxWidth: "480px",
        imageLayout: "stack",
      },
      {
        label: "Prototype",
        heading: "Prototype 02: Assemble Air Pumping System with Electronics",
        content:
          "We chose vinyl and used a sewing machine to seal parts of the double layered structure based on the principles of origami. This not only gave us flexibility to build complex geometries but also sped up the fabrication process. We completed **installation of electrical components into a blanket for assembly**.",
        images: ["/images/bondie-11.png", "/images/bondie-12.png"],
        imageLayout: "stack",
      },
      {
        label: "Design process",
        heading: "Interaction Design",
        content:
          "The final interaction design included two-way WIFI communication between the blanket for parent and toy for kid. **Each side has its own inputs and outputs**, and there is a __mobile app__ for the parent to oversee the whole interaction in case of special situation.",
        images: ["/images/bondie-13.png", "/images/bondie-14.png", "/images/bondie-15.png", "/images/bondie-16.png"],
        imageLayout: "stack",
      },
      {
        label: "Outcome",
        heading: "Final Design",
        content:
          "Together, Bondie creates **intimate connection for parent and kid** through haptic, sensory interactions remotely. __The parent can feel child's heartbeat from the warmth in blanket, and the child can feel parent's presence from vibration, sound and warmth.__\n\nBondie demonstrates the future of and beyond parent-child relationship, but rather all kinds of relationships that can enjoy **richer connection over distance** with haptic experiences and emerging technologies. We aim to use human-centered design and technologies to re-create more and more valuable experiences.",
        images: ["/images/bondie-17.png", "/images/bondie-18.png"],
        imageLayout: "stack",
        sectionVideo: "https://www.youtube.com/embed/3GhhCljFGQ4?si=Xq4GPZLJxnpmC_MA",
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
          "Humanities Research Lab is a multi-campus NYU project researching the significance of New York City immigrants. The lab had no web portal to integrate project creation and showcasing, making further development difficult. Our team set out to __build an original data visualization portal from scratch__ — designed for the professors and students who would use it for academic teaching and learning.",
      },
      {
        label: "Problem",
        heading: "No Existing Portal for the Research Lab",
        content:
          "The lab and project were started in 2020, however, __there isn't a web portal integrating the project creating and showcasing, which increases the difficulty of further development.__\n\nTherefore, our team aimed to **build an original data visualization portal from scratch**, based on the need of main user: the professors and students who will **use the portal for academic teaching and learning.**",
        images: ["/images/dataportal-1.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "User Research",
        heading: "Understanding Professors & Students",
        content:
          "My team focused on our main target users — professors and students — and conducted interviews to __understand how they teach and learn with data.__\n\nThe main user will be students who take a history class and use the data portal to complete assignments. The secondary user will be professors who add the portal as a tool in the syllabus. After interviewing future student users, we identified **the user journey as 5 steps**: from getting to know the data in class to using the visualization tool and developing data insights independently.\n\nWe aim to build a data portal that serves two needs:\n\n1. **Visualizing data** to supplement teaching outside the classroom\n2. **Assisting students** to learn data and build their own narrative",
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
        images: ["/images/dataportal-2.png", "/images/dataportal-5.png"],
        imageLayout: "stack",
        imageMaxWidth: "50%",
      },
      {
        label: "Data Research",
        heading: "Deep Dive into the Dataset",
        content:
          "To build a data visualization portal, our team conducted in-depth research into the dataset used. __We studied the meaning behind the data, the academic potentials and limitations in order to create a user-friendly portal__ that fulfills the vision of the curriculum.\n\nWe studied graph types — histogram, box plot, correlation matrix, scatter plot, bar graph and line graph — and chose **Plotly** as our visualization library. It is a powerful library that enables many customizable functions, and we selected a list of universal features to employ across all graphs to increase functionality.",
        images: ["/images/dataportal-7.gif"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Data Research",
        heading: "Functional Features",
        content: "We selected a list of universal functions to employ in all the graphs in our portal in order to increase the functionality and interactivity.",
        images: ["/images/dataportal-6.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Competitor Research",
        heading: "Competitor Analysis",
        content:
          "After knowing the user and the data, the team jumped into a quick competitor analysis process where we looked into similar projects from other universities. We summarized **the style, content, user flow** in these websites, and helped ourselves to better imagine what our project could look like.",
        images: ["/images/mit-feature.png", "/images/mit-web.gif"],
        imageCaptions: ["", "Reference 01: MIT"],
        imageLayout: "grid-1-2",
        imageHeight: "320px",
      },
      {
        label: "Competitor Research",
        heading: "",
        content: "",
        images: ["/images/yale-feature.png", "/images/yale-web.gif"],
        imageCaptions: ["", "Reference 02: Yale"],
        imageLayout: "grid-1-2",
        imageHeight: "320px",
      },
      {
        label: "Competitor Research",
        heading: "",
        content: "",
        images: ["/images/stanford-feature.png", "/images/stanford-web.gif"],
        imageCaptions: ["", "Reference 03: Stanford"],
        imageLayout: "grid-1-2",
        imageHeight: "320px",
      },
      {
        label: "Ideate & test process",
        heading: "Ideate 01: Compare Graphs at the Same Time",
        content:
          "**The first design focused on the functionality.** One major task for students to accomplish is to compare and summarize different graph types. We created a multi-panel visualization wireframe, empathizing on the prominent functionality and data visualization logic.",
        images: ["/images/dataportal-11.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Ideate & test process",
        heading: "Test 01: Clickable Wireframe",
        content: "We created a clickable wireframe of this design on Marvelapp.com and we conducted **7 in-depth user tests** where users will __think out loud__ as they go through the wireframe. We documented their reactions and confusion, and concluded that this design seemed to be over-complicated, which also added difficulty to the back-end workload.",
        images: ["/images/dataportal-12.gif", "/images/dataportal-12b.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Ideate & test process",
        heading: "Ideate 02: Simplified Workflow",
        content:
          "**The second design focused on smooth workflow.** We eliminated unnecessary windows and tabs, centering only one active graph on the screen. This design contains a side-by-side panel with __clear distinction between data input and output.__",
        images: ["/images/dataportal-13.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Ideate & test process",
        heading: "Test 02: Clickable Wireframe & Slide Walkthrough",
        content: "Similarly, we first observed users to go through the clickable wireframes and documented their feedback. Then we quickly made adjustments based on the feedback and conducted the third round of user tests __with the same users through a slide deck walkthrough__ for immediate responses.",
        images: ["/images/dataportal-13b.gif", "/images/dataportal-14.png", "/images/dataportal-15.png"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Design",
        heading: "Final Design",
        content:
          "The team synthesized the research and user test findings, designed the final wireframe for a neat and smooth workflow. We utilized the use of shapes, chose a soft background color to stand out high contrast visualizations. Last but not the least, we **developed prototype with functional front and back end.**\n\nThe interactive data portal is an on-going project that aims to host on the NYU network server for first-year core curriculum. Our work of user research, data analysis, UX design and development serve as the foundation for further iteration and updates.",
        images: ["/images/dataportal-16.png", "/images/dataportal-17.png"],
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
          "Mirroring Loss is an interactive installation that recreates memorial ceremony rituals — designing an empathic experience around death due to Covid-19. Using a Kinect depth camera and Three.js particle system, it transforms the viewer's own silhouette into a living memorial, where each particle represents a life lost. __The work invites reflection on collective loss at a time when the world fears closeness.__",
      },
      {
        label: "Context",
        heading: "The Chaos of 2020",
        content:
          "The memories for 2020 are full of chaos: contagious disease, the shutdown of schools and shops, people losing jobs, etc. It is hard to imagine how much **terror, anxiety, prejudice** has emerged directly proportional to the confirmed cases of Covid-19 worldwide. The word \"Chinese virus\" has boosted shockingly from 2% to 61% in two weeks, from Jan 12 to Jan 25 (trends.google.com).\n\nWe are sometimes buried in such chaos, distress and anger, while forgetting that **the year 2020 signifies the sudden loss of lives**, those who could have more time. When the overall society fears closeness because of the contiguous disease, people might lose the basic practices to interact, communicate with each other, and to feel other people's sorrow or joy. That's why __a retrace of empathic experience becomes necessary.__\n\n**How to build empathy of lost lives due to Covid-19 through an interactive digital experience?**",
        images: ["/images/mirroring-2.png"],
        imageLayout: "stack",
      },
      {
        label: "Research & Analysis",
        heading: "Literature Review",
        content:
          "I started my research by looking into __relevant literature on 'empathy',__ from philosophical writings to psychology theories to news articles. In order to design an interactive experience, I then conducted research on __user experience design strategies__ and data analysis.",
        images: ["/images/mirroring-3.png"],
        imageLayout: "stack",
      },
      {
        label: "Research & Analysis",
        heading: "Related Art & Practice",
        content:
          "Then I researched relevant art projects and practices, either they're serving a similar purpose like contextualization and reflection, or their method is inspirational on __how to create such a reflective experience, for example, by looking into a mirror.__",
        quote: "a person or group of people can suffer real damage, real distortion if the people or society around them mirror back to them a confining or demeaning or contemptible picture of themselves",
        quoteAttribution: "Charles Taylor. (1992). p25\n\"Multiculturalism and 'the politics of recognition'\"",
        images: ["/images/related art.jpg"],
        imageCaptions: ["Sarah Howorka. (2015). \"average face mirror\""],
        imageLayout: "stack",
      },
      {
        label: "Concept",
        heading: "Design an Interactive Art Experience",
        content:
          "Mirroring Loss recreates the **memorial ceremony rituals and environments**, passing along the feeling of loss and honoring death. It designs a sophisticated process to emerge this awareness step by step by focusing on the inquiry: how to build a reflective, empathetic experience on death due to covid-19? More specifically, __how to engage users in reflecting about death by linking the data of lost lives with the users themselves?__",
        images: ["/images/mirroring-4.png"],
        imageLayout: "stack",
        imageMaxWidth: "50%",
      },
      {
        label: "Concept",
        heading: "",
        content: "",
        images: ["/images/mirroring-5.png"],
        imageLayout: "stack",
      },
      {
        label: "Concept",
        heading: "",
        content: "",
        images: ["/images/mirroring-6.png"],
        imageLayout: "stack",
        imageMaxWidth: "50%",
      },
      {
        label: "Development",
        heading: "Build a Real-Time Depth Tracking Particle System",
        content:
          "To simulate a smooth process of looking inside the mirror, I used a **Kinect depth tracking system** to __receive information about the user's gestures and body image, making an intuitive and spontaneous process.__ The depth camera sends real-time coordination information to T**hree.js environment** and it generates an immediate self-reflection in the screen.",
        images: ["/images/mirroring-7.png"],
        imageLayout: "stack",
        imageMaxWidth: "50%",
      },
      {
        label: "Outcome",
        heading: "Final Outcome",
        content:
          "Mirroring Loss helps us become consciously aware of the large number of deaths caused by Covid-19, and at the same time **to reflect on the collective human loss**. In a way, a visual representation of the user will experience death in the process under the larger background of the covid-19 pandemic.\n\nIt directly conveys that everyone is waiting for this crisis to end, preparing for a collective moment to honor death. The artwork becomes not only a place to mourn, but also **to celebrate life, affection, and empathy.**",
        sectionVideo: "https://player.vimeo.com/video/796183457",
      },
      {
        label: "Exhibition",
        heading: "Exhibition & Recognition",
        content:
          "**June - July 2021**\nNeo-Imaginaria: A Collection of Gen-Z New Media Poetics, M50 Shanghai Contemporary Art District\n\n**Oct - Nov 2021**\nNew Youth: 16th Shanghai Youth Art Exhibition, Liu Haisu Art Museum\n(selected out of 1800 artists and 4800 submitted projects)\n\n**Nov - Dec 2021**\nWhat's Next, Art & Design Education FutureLab",
        images: ["/images/mirroring-cap23.jpg", "/images/mirroring-cap21.jpg"],
        imageLayout: "stack",
        imageMaxWidth: "70%",
      },
      {
        label: "Exhibition",
        heading: "",
        content: "",
        images: [
          "/images/mirroring-cap8.jpg",
          "/images/mirroring-cap7.jpg",
          "/images/mirroring-cap6.jpg",
          "/images/mirroring-cap5.jpg",
          "/images/mirroring-cap4.jpg",
          "/images/mirroring-cap3.jpg",
          "/images/mirroring-cap9.jpg",
          "/images/mirroring-cap10.jpg",
          "/images/mirroring-cap11.jpg",
          "/images/mirroring-cap12.jpg",
        ],
        imageLayout: "gallery",
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
      { role: "UX Research & Design", description: "user interview; literature research; design interactions" },
      { role: "Prototype & Test", description: "experiment the haptic gloves for prototyping; conduct user tests and document feedback" },
      { role: "Branding", description: "design visual content, presentation" },
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
        sectionVideo: "https://player.vimeo.com/video/796490297",
      },
      {
        label: "Vision",
        heading: "Inclusive Design & Future",
        content:
          "Our product is designed for individuals of all abilities. For those with visual impairments, Haptic Vision is an essential tool that can assist in understanding and navigating their environment. For those without visual impairments, it offers a unique, empathetic experience.\n\nWe envision Haptic Vision as a pioneering solution for the future of navigation — a glimpse into the next 5-10 years, where innovative technologies will revolutionize how people with visual impairments interact with the world around them.",
        sectionVideo: "https://www.youtube.com/embed/4b5lR5_ubpw?si=qcrd1E7a10TKI7wv",
      },
    ],
  },
]
