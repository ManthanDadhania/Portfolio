import {
  Atom,
  BookOpen,
  Boxes,
  BrainCircuit,
  Braces,
  Brackets,
  Cloud,
  CloudCog,
  Code2,
  Coffee,
  Cog,
  Cpu,
  Database,
  GitBranch,
  Infinity,
  Layers,
  Leaf,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Server,
  ShieldCheck,
  Ship,
  Sparkles,
  Square,
  SquarePlus,
  Triangle,
  Trophy,
  Users,
  Wind,
  Workflow,
} from "lucide-react";
import { type ReactNode } from "react";

export const personalDetails = {
  name: "Manthan Dadhania",
  program: "B.Tech in Computer Engineering",
  institution: "Pandit Deendayal Energy University",
  tagline: "Learning Beyond Boundaries – Innovate, Integrate, Inspire.",
  location: "Gandhinagar, India",
  email: "manthandadhania777@gmail.com",
  phone: "+91 90168 68159",
  github: "https://github.com/ManthanDadhania",
  linkedin: "https://www.linkedin.com/in/manthan-dadhania",
  resumeFileName: "Manthan_Resume.pdf",
};

export const tableOfContents = [
  { label: "Introduction & Learning Philosophy", shortLabel: "Introduction", id: "introduction" },
  { label: "Resume / CV", shortLabel: "Resume", id: "resume" },
  { label: "Interdisciplinary Projects & Research", shortLabel: "Projects", id: "projects" },
  { label: "Advanced Skill Development & Mastery", shortLabel: "Skills", id: "skills" },
  { label: "Collaborative & Leadership Experiences", shortLabel: "Collaboration", id: "collaboration" },
  { label: "Global Awareness & Ethical Considerations", shortLabel: "Global", id: "global" },
  { label: "Future Aspirations & Professional Development", shortLabel: "Future", id: "future" },
  { label: "Conclusion & Self-Assessment", shortLabel: "Conclusion", id: "conclusion" },
  { label: "Testimonials", shortLabel: "Testimonials", id: "testimonials" },
];

export const resumeSnapshot = {
  education: [
    {
      program: "B.Tech Computer Engineering",
      institution: "Pandit Deendayal Energy University",
      duration: "2023 – 2027",
      detail: "CGPA: 9.7 / 10",
    },
    {
      program: "HSC (12th Grade)",
      institution: "St. Mary's School, Naroda, Ahmedabad",
      duration: "2023",
      detail: "Percentage: 98.18%",
    },
    {
      program: "SSC (10th Grade)",
      institution: "St. Mary's School, Naroda, Ahmedabad",
      duration: "2021",
      detail: "Percentage: 95%",
    },
  ],
  experience: [
    {
      role: "Core Committee Member",
      organization: "Encode – The Coding Club of PDEU",
      duration: "Aug 2022 – Present",
      highlights: [
        "Led flagship hackathons, coding bootcamps, and peer-led workshops that onboarded new members into competitive programming and full-stack development.",
        "Architected engaging event experiences, marketing campaigns, and peer mentorship programs that grew the community’s active participation.",
        "Fostered a growth-first culture by curating resources, mentoring junior developers, and enabling collaborative learning squads.",
      ],
    },
  ],
  interests: [
    "Full-Stack Development and scalable web architectures",
    "Applied AI/ML for decision intelligence",
    "Blockchain security and transparency tooling",
  ],
  softSkills: [
    "Leadership & facilitation",
    "Creative problem-solving",
    "Team collaboration",
    "Adaptive communication",
  ],
  certifications: [
    "Smart India Hackathon 2025 Finalist – LLVM Obfuscator Tool",
    "HackOut'25 Finalist – Trustchain Subsidy Management System",
    "Ideathon PDEU Winner – Concept Pitch for Subsidy Innovation",
  ],
  awards: [
    "Recognized for architecting robust subsidy tracking workflows in Trustchain.",
    "Acknowledged by SIH evaluators for delivering LLVM tool safeguards for object files.",
    "Awarded best final pitch for visionary subsidy management concept at PDEU Ideathon.",
  ],
  volunteer: [
    "Encode – The Coding Club of PDEU: Mentoring peers, driving hackathons, and managing cross-functional club operations.",
    "Campus ambassador for coding initiatives, connecting industry mentors with student developer cohorts.",
  ],
  hobbies: [
    "Building experimental UI concepts and motion prototypes.",
    "Writing reflective tech blogs on sustainable innovation.",
    "Exploring indie music and strategy board games.",
  ],
};

export const projects = [
  {
    title: "Trustchain – Subsidy Management System",
    badge: "Green Hydrogen Focus",
    overview:
      "Built a proof-of-concept blockchain-backed platform that digitizes subsidy requests and approvals for emerging green hydrogen programs.",
    methodology: [
      "Implemented Next.js for responsive dashboards and verifiable credential views.",
      "Prototyped smart contract interactions to secure subsidy disbursal flows.",
      "Integrated analytics tiles to highlight approvals, fund routing, and bottlenecks.",
    ],
    outcome:
      "Delivered an auditable workflow that cuts manual review time, increases transparency, and produces uniform beneficiary insights.",
    challenges:
      "Navigated compliance-driven data sharing rules; solved by abstracting document fingerprints rather than storing raw files, keeping the ledger lean yet verifiable.",
  },
  {
    title: "SIH – LLVM Object File Obfuscator",
    badge: "Smart India Hackathon Finalist",
    overview:
      "Engineered an LLVM toolchain extension to scramble symbol metadata and hinder reverse engineering of compiled binaries.",
    methodology: [
      "Crafted transformation passes to redact symbol signatures without breaking runtime linkage.",
      "Automated entropy scoring to measure obfuscation strength after each build.",
      "Collaborated with domain mentors to align with IP protection guidelines.",
    ],
    outcome:
      "Shipped a drop-in build step that boosts IP resilience for partner organizations and raised finalist recognition at SIH 2025.",
    challenges:
      "Balancing performance overhead with obfuscation depth; tuned passes using compiler benchmarks to keep slowdowns under 5%.",
  },
];

type SkillShowcase = {
  label: string;
  description: string;
  evidence: string;
  icon: ReactNode;
};

export type SkillItem = {
  name: string;
  tone: "indigo" | "sky" | "emerald" | "rose" | "amber" | "violet" | "slate";
  icon: ReactNode;
};

export const skillsShowcase: SkillShowcase[] = [
  {
    label: "Technical Mastery",
    description:
      "Iterated on production-grade Next.js stacks with modular design systems, resilient APIs, and telemetry for insights.",
    evidence:
      "Trustchain dashboards, Blog platform, and SIH LLVM tooling demonstrate fluency across front-end, back-end, and tooling layers.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    label: "Leadership & Facilitation",
    description:
      "Steered Encode’s club roadmap, pairing peer mentorship with industry speaker series to nurture campus-wide innovation.",
    evidence:
      "Coordinated 200+ participant hackathons, orchestrated volunteer pods, and mentored first-year developers into project contributors.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Creative Experience Design",
    description:
      "Blend storytelling, micro-interactions, and data visualization to ship engaging, user-centric solutions.",
    evidence:
      "Designed dynamic narratives for the academic portfolio, event branding for Encode, and interactive subsidy intelligence widgets.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    label: "Ethical Innovation",
    description:
      "Factor privacy, accessibility, and sustainability lenses into every build—from blockchain-ledger design to ML experimentation.",
    evidence:
      "Privacy-preserving Trustchain architecture and responsible AI workshop content for Encode cohorts.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export const collaborativeHighlights = [
  {
    role: "Hackathon Team Lead",
    responsibilities:
      "Framed the product vision, delegated modules, and ensured rapid feedback cycles for Trustchain during HackOut'25.",
    dynamics:
      "Maintained clear decision logs, set sprint rituals, and leveraged individual strengths across UI, blockchain, and data research.",
    outcome:
      "Secured finalist position with judges noting clarity of implementation roadmap and user-centric design.",
  },
  {
    role: "Encode Club Core Member",
    responsibilities:
      "Designed event charters, onboarded mentors, and managed full-stack workshops targeted at beginner developers.",
    dynamics:
      "Encouraged collaborative debugging, instituted code review pods, and promoted psychological safety within the club.",
    outcome:
      "Achieved sustained member retention and cross-year collaboration on open-source and campus initiatives.",
  },
];

export const globalEthicsSpotlight = {
  topic: "Responsible AI & Data Privacy in Citizen Technology",
  reflection:
    "Working on Trustchain highlighted the importance of handling sensitive subsidy data responsibly. I adopted anonymization patterns, granular access control, and ledger transparency to ensure beneficiaries retained dignity and control over their information.",
  impact:
    "By combining privacy-preserving design with open audit trails, the platform nurtures trust among citizens and regulators—a vital step toward inclusive tech ecosystems.",
};

export const futureRoadmap = {
  vision:
    "Build intelligent, human-centered platforms that elevate public services and secure digital ecosystems.",
  focusAreas: [
    "Advance full-stack specialization with streaming architectures and edge deployments.",
    "Deepen AI/ML expertise to craft personalization layers grounded in ethical safeguards.",
    "Explore blockchain interoperability that scales sustainability initiatives.",
  ],
  commitments: [
    "Pursue Appwrite and cloud-native certifications to strengthen deployment readiness.",
    "Lead more community-driven open-source initiatives within Encode and beyond.",
    "Document learning transparently through blogs, talks, and mentorship.",
  ],
};

export const conclusionInsights = {
  keyLearnings: [
    "Systems thinking transforms isolated features into cohesive product journeys.",
    "Mentorship unlocks community growth and reinforces personal mastery.",
    "Ethical foresight is essential when engineering solutions for public impact.",
  ],
  growthAreas: [
    "Scaling production pipelines with observability and automated QA.",
    "Navigating cross-border compliance nuances for data-heavy applications.",
    "Sharpening design documentation for faster stakeholder alignment.",
  ],
  swot: {
    strengths: [
      "Full-stack versatility across Web, DevOps, and compiler tooling.",
      "High ownership mindset with a bias for collaborative execution.",
      "Storytelling ability that aligns vision with actionable roadmaps.",
    ],
    weaknesses: [
      "Balancing deep work with rapid context switching during high-volume events.",
      "Need for structured research habits when exploring new AI frameworks.",
    ],
    opportunities: [
      "Expanding Trustchain into pilot-ready MVP with government partners.",
      "Partnering with interdisciplinary researchers on responsible AI projects.",
      "Leveraging Appwrite and Vercel for fast, scalable deployments.",
    ],
    threats: [
      "Evolving regulations around citizen data requiring constant vigilance.",
      "Acceleration of AI tooling necessitating continuous upskilling.",
    ],
  },
  reflection:
    "I have evolved academically and personally by staying curious, persevering through ambiguity, and championing collaboration as a catalyst for innovation.",
};

export const testimonials = [
  {
    quote:
      "A dedicated learner and innovative thinker who consistently delivers high-quality work.",
    author: "Dr. Ashutosh Tripathi",
    role: "Faculty Mentor, PDEU",
  },
  {
    quote:
      "Exhibits strong teamwork and leadership skills, with an eye for detail.",
    author: "Dr. Debabrata Swain",
    role: "Program Lead, Encode – The Coding Club of PDEU",
  },
];

export const proudHighlights: Array<{ title: string; description: string; icon: ReactNode }> = [
  {
    title: "HackOut'25 Finalist",
    description:
      "Crafted actionable solutions for subsidy transparency, delivering a polished MVP and implementation plan.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
  {
    title: "SIH 2025 Finalist",
    description:
      "Co-developed a security-focused LLVM tool that protects intellectual property for partner organizations.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Ideathon Winner",
    description:
      "Won PDEU Ideathon for articulating a bold vision of tech-enabled subsidy management for sustainability.",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

export const dayInLife = [
  { label: "Coding & Personal Projects", value: 4 },
  { label: "Academics & Studies", value: 3 },
  { label: "Club Activities & Networking", value: 2 },
  { label: "Sleep and Rest", value: 8 },
  { label: "Personal Time & Hobbies", value: 3 },
];

export type TechnicalSkillGroup = {
  title: string;
  icon: ReactNode;
  skills: SkillItem[];
  spotlight: string;
};

export const technicalSkillGroups: TechnicalSkillGroup[] = [
  {
    title: "Development & Frameworks",
    icon: <MonitorSmartphone className="h-5 w-5" />,
    skills: [
      { name: "Next.js", tone: "indigo", icon: <Layers className="h-5 w-5" /> },
      { name: "React.js", tone: "sky", icon: <Atom className="h-5 w-5" /> },
      { name: "MERN Stack", tone: "emerald", icon: <Boxes className="h-5 w-5" /> },
      { name: "Tailwind CSS", tone: "violet", icon: <Wind className="h-5 w-5" /> },
      { name: "Express.js", tone: "slate", icon: <Server className="h-5 w-5" /> },
    ],
    spotlight:
      "Build immersive, performant web experiences with component-driven design systems and SSR/ISR pipelines.",
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "TypeScript", tone: "indigo", icon: <Braces className="h-5 w-5" /> },
      { name: "JavaScript", tone: "amber", icon: <Code2 className="h-5 w-5" /> },
      { name: "C++", tone: "slate", icon: <SquarePlus className="h-5 w-5" /> },
      { name: "Java", tone: "rose", icon: <Coffee className="h-5 w-5" /> },
      { name: "Python", tone: "emerald", icon: <Infinity className="h-5 w-5" /> },
      { name: "C", tone: "sky", icon: <Square className="h-5 w-5" /> },
    ],
    spotlight:
      "Apply language strengths where they shine—from systems programming to typed front-end architectures.",
  },
  {
    title: "Data & Problem Solving",
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: [
      { name: "Data Structures & Algorithms", tone: "indigo", icon: <Brackets className="h-5 w-5" /> },
      { name: "Competitive Programming", tone: "violet", icon: <Trophy className="h-5 w-5" /> },
      { name: "MongoDB", tone: "emerald", icon: <Leaf className="h-5 w-5" /> },
      { name: "SQL", tone: "sky", icon: <Database className="h-5 w-5" /> },
    ],
    spotlight:
      "Model resilient data flows and reason about algorithmic trade-offs to ship robust, scalable systems.",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "Appwrite", tone: "rose", icon: <CloudCog className="h-5 w-5" /> },
      { name: "Vercel", tone: "indigo", icon: <Triangle className="h-5 w-5" /> },
      { name: "Docker", tone: "sky", icon: <Ship className="h-5 w-5" /> },
      { name: "Git & GitHub", tone: "slate", icon: <GitBranch className="h-5 w-5" /> },
      { name: "CI/CD", tone: "emerald", icon: <Workflow className="h-5 w-5" /> },
    ],
    spotlight:
      "Automate deployments and observability to accelerate iteration while keeping releases reliable.",
  },
  {
    title: "Tooling & Platforms",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "LLVM Tooling", tone: "violet", icon: <Cog className="h-5 w-5" /> },
      { name: "Trustchain", tone: "emerald", icon: <ShieldCheck className="h-5 w-5" /> },
      { name: "Node.js Utilities", tone: "sky", icon: <Cpu className="h-5 w-5" /> },
      { name: "REST APIs", tone: "indigo", icon: <Network className="h-5 w-5" /> },
    ],
    spotlight:
      "Craft bespoke tooling that bridges compiler internals, blockchain transparency, and developer productivity.",
  },
];


