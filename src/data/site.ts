// Edit your content here. Components read from this file.
export const site = {
  name: "Aviv Assayag",
  first: "Aviv",
  last: "Assayag",
  handle: "assayag",
  status: "Open to work",
  lede: "Backend Software Engineer building high-scale distributed systems: microservices, DevOps pipelines, and AI powered tooling.",
  cvHref: "/AvivCV.pdf",
  aboutText: `I'm a backend software engineer with 4 years of expereince building high-scale C4I systems, microservices, and automated DevOps pipelines.
              I started at Rafael, then moved to the Israeli Navy, where I grew from software engineer to tech leader in an R&D team.
              I like simplifying complex systems, whether that means cutting infrastructure costs, removing technical debt,
              or finding thousand of redundent I/O operations.
              I'm also exploring how AI can make software smarter. Including leading a research into on-premises LLM deployment.
              Looking forward for a place to keep growing myself, and share my abilities to watch the project grows with me.`,
  aboutTimeline: "2022 Rafael, software engineer | 2023 Israeli Navy, software engineer | 2024-2026 Israeli Navy, tech leader",
  aboutChips: ["Java", "Kafka", "Kubernetes", "TypeScript", "Docker"],
  contactLine: "Open to backend and distributed-systems roles. Send me an email and I'll get back to you quickly.",
  builtWith: "Astro",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Travel", href: "#travel" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects = [{
  title: "Assayag.dev portfolio builder for personals",
  summary: "An Astro project that gives developers a template for their career and personal life, so they can advertise themeselves.",
  tags: ["[Astro]", "[TypeScript]", "[NPM]", "[Node.js]"],
  href: "https://github.com/Assaviv",
  image: "assayag.dev"
},{
  title: "BypassLogic: premium code that isn't in the build",
  summary: "A Gradle plugin that strips annotated methods from compiled bytecode, so paid features can't be unlocked on customer machines.",
  tags: ["[Java]", "[Gradle]", "[ASM]", "[Bytecode]", "[Open Source]"],
  href: "https://github.com/Assaviv/BypassLogic",
  image: "BypassLogic"
}, {
  title: "SaveApp: memories becomes into insights",
  summary: "A social media that analyzes user's memories, collections and saved posts and directs them into data and insights.",
  tags: ["[Microservices]", "Aspire .[NET]", "[Angular]", "[LLM]", "[In Progress]"],
  href: "https://github.com/Assaviv/CollectionsProject",
  image: "SaveApp"
}];

export const posts = [{
  date: "2026-10-22",
  title: "🚘 What does Tesla has to do with my open-source project?",
  read: "5 min read",
  href: "https://lnkd.in/p/drFVaQ4X",
}];

export const trips = ["Featured trip photo", "Photo", "Photo", "Photo", "Photo", "Photo"];

export const socials = [{
    label: "Github",
    href: "https://github.com/Assaviv"
  }, {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aviv-assayag"
  }, {
    label: "Email",
    href: "mailTo:2004aviv@gmail.com"
  }, {
    label: "RSS",
    href: "#",
  }
]
