// Edit your content here. Components read from this file.
export const site = {
  name: "Aviv Assayag",
  first: "Aviv",
  last: "Assayag",
  handle: "aviv",
  status: "Open to work",
  lede: "[One sentence: what you build and who you build it for.]",
  cvHref: "#",
  aboutText: "[Two or three short paragraphs: who you are, what you care about building, what you want next.]",
  aboutTimeline: "Timeline: [role / study / milestone, with dates]",
  contactLine: "[One line: what you’re looking for and how fast you reply.]",
  builtWith: "Astro",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Travel", href: "#travel" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects = [1, 2, 3].map(() => ({
  title: "[Case study title]",
  summary: "[Problem and result in one line.]",
  tags: ["[tech]", "[tech]"],
  href: "#",
}));

export const posts = [1, 2, 3].map(() => ({
  date: "YYYY-MM-DD",
  title: "[Post title]",
  read: "5 min read",
  href: "#",
}));

export const trips = ["Featured trip photo", "Photo", "Photo", "Photo", "Photo", "Photo"];

export const socials = ["GitHub", "LinkedIn", "Email", "RSS"].map((label) => ({ label, href: "#" }));
