"use client";
import { useEffect, useState } from "react";
import { Reveal } from "./components/Reveal";
import { Counter } from "./components/Counter";
import { EducationTimeline } from "./components/EducationTimeline";
import { ProgressReveal } from "./components/ProgressReveal";
import { useInView } from "./hooks/useInView";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Server,
  ShoppingBag,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const skills = [
  { name: "HTML", type: "Frontend", icon: "</>" },
  { name: "CSS", type: "Frontend", icon: "#" },
  { name: "JavaScript", type: "Frontend", icon: "JS" },
  { name: "React", type: "Frontend", icon: "R" },
  { name: "Next.js", type: "Frontend", icon: "N" },
  { name: "TypeScript", type: "Frontend", icon: "TS" },
  { name: "Tailwind CSS", type: "Frontend", icon: "TW" },
  { name: "Node.js", type: "Backend", icon: "N" },
  { name: "REST APIs", type: "Backend", icon: "API" },
  { name: "MongoDB", type: "Database", icon: "M" },
  { name: "Git", type: "Tools & Services", icon: "git" },
  { name: "GitHub", type: "Tools & Services", icon: "GH" },
  { name: "Cloudinary", type: "Tools & Services", icon: "C" },
  { name: "Generative AI", type: "AI & Generative AI", icon: "AI" },
  { name: "Large Language Models (LLMs)", type: "AI & Generative AI", icon: "LLM" },
  { name: "RAG", type: "AI & Generative AI", icon: "RAG" },
  { name: "Prompt Engineering", type: "AI & Generative AI", icon: "P" },
  { name: "AI Agents", type: "AI & Generative AI", icon: "AG" },
  { name: "Embeddings", type: "AI & Generative AI", icon: "EM" },
  { name: "Vector Databases", type: "AI & Generative AI", icon: "DB" },
  { name: "MCP (Model Context Protocol)", type: "AI & Generative AI", icon: "MCP" },
  { name: "Python", type: "Backend & APIs", icon: "Py" },
  { name: "Gmail API", type: "Backend & APIs", icon: "G" },
  { name: "API Integration", type: "Backend & APIs", icon: "API" },
  { name: "React.js", type: "Frontend", icon: "R" },
  { name: "HTML5", type: "Frontend", icon: "H5" },
  { name: "CSS3", type: "Frontend", icon: "C3" },
  { name: "Supabase SQL", type: "Databases", icon: "S" },
  { name: "SQLite", type: "Databases", icon: "SQ" },
  { name: "Cloud Deployment", type: "Cloud & Development", icon: "CD" },
  { name: "CI/CD", type: "Cloud & Development", icon: "CI" },
];

const services = [
  [
    "Website Development",
    "Modern, responsive websites built around your business needs.",
    Globe2,
    "/mazhai-boutique/homepage.png",
  ],
  [
    "Full Stack Web Development",
    "Complete web applications with frontend, backend and database integration.",
    Layers3,
    "/mazhai-boutique/project-cover.svg",
  ],
  [
    "E-commerce Development",
    "Online stores with thoughtful product browsing and shopping functionality.",
    ShoppingBag,
    "/mazhai-boutique/collections.png",
  ],
  [
    "React & Next.js Development",
    "Fast, scalable applications built with modern React architecture.",
    Code2,
    "/mazhai-boutique/saree-editorial.svg",
  ],
  [
    "Responsive Web Design",
    "Interfaces that work smoothly across mobile, tablet and desktop.",
    MonitorSmartphone,
    "/mazhai-boutique/homepage.png",
  ],
  [
    "Website Maintenance",
    "Bug fixes, improvements, updates and ongoing website support.",
    Zap,
    "/mazhai-boutique/project-cover.svg",
  ],
  [
    "API Integration",
    "Connect applications with APIs and external services.",
    Server,
    "/mazhai-boutique/collections.png",
  ],
  [
    "Performance Optimization",
    "Improve speed, responsiveness and the overall user experience.",
    Sparkles,
    "/mazhai-boutique/saree-editorial.svg",
  ],
  [
    "AI & RAG Solutions",
    "Build intelligent applications using LLMs, RAG pipelines, embeddings, vector databases, and custom knowledge bases.",
    Sparkles,
    "/mazhai-boutique/project-cover.svg",
  ],
  [
    "AI Assistant Development",
    "Create custom AI assistants that understand natural-language requests and connect with business systems and APIs.",
    Code2,
    "/mazhai-boutique/homepage.png",
  ],
  [
    "MCP Integration",
    "Build MCP servers and integrations that allow AI assistants to securely interact with external tools and services.",
    Layers3,
    "/mazhai-boutique/collections.png",
  ],
  [
    "LLM & AI Application Development",
    "Develop practical AI-powered applications for automation, customer support, business workflows, and productivity.",
    Zap,
    "/mazhai-boutique/saree-editorial.svg",
  ],
  [
    "API & Third-Party Integrations",
    "Connect applications with services such as Gmail, WhatsApp, payment systems, databases, and other third-party APIs.",
    Server,
    "/mazhai-boutique/project-cover.svg",
  ],
];

const approach = [
  "Responsive and mobile-first development",
  "Clean and maintainable code",
  "Modern technologies",
  "Performance-focused development",
  "User-friendly interfaces",
  "Attention to detail",
  "Custom solutions",
  "Clear communication",
  "Reliable project delivery",
];
const gallery = [
  "Homepage",
  "Product listing",
  "Product details",
  "Shopping cart",
  "Mobile responsive view",
];
const mazhaiImageUrl = "/mazhai-boutique/mazhai-boutique-overview.png";
const mazhaiCollectionsUrl = "/mazhai-boutique/mazhai-boutique-overview.png";
const aiFeatures = [
  "AI shopping assistant for product questions",
  "Natural-language saree and occasion discovery",
  "Personalized recommendations based on preferences",
  "Smart style guidance and size assistance",
];
const aiProjects = [
  {
    title: "SASPAL RAG-Based AI Chatbot",
    category: "AI / Generative AI",
    description:
      "Built a Retrieval-Augmented Generation (RAG) chatbot for the SASPAL website that retrieves relevant company information from a knowledge base and uses an LLM to generate accurate, context-aware responses for website visitors.",
    technologies: [
      "Python",
      "RAG",
      "LLM",
      "Embeddings",
      "Vector Database",
      "OpenRouter",
      "React",
      "FastAPI",
    ],
    features: [
      "Knowledge-base powered responses",
      "Semantic search using embeddings",
      "RAG pipeline for contextual answers",
      "LLM-powered response generation",
      "SASPAL company and service information integration",
      "Website chatbot interface",
    ],
    icon: Sparkles,
    website: "https://www.saspal.com/",
    previewImage: "/saspal-rag-chatbot.jpg",
  },
  {
    title: "SASPAL Email AI Assistant",
    category: "AI / MCP / Automation",
    description:
      "Developed an AI-powered email assistant using Model Context Protocol (MCP) to connect with Gmail. The assistant allows users to interact with their emails using natural-language commands, retrieve relevant messages, summarize emails, and prepare and send emails through a controlled workflow.",
    technologies: [
      "Python",
      "MCP",
      "Gmail API",
      "LLM",
      "AI Agents",
      "REST APIs",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    features: [
      "Gmail integration through MCP",
      "Natural-language email search",
      "Email summarization",
      "AI-powered email assistance",
      "Email sending workflow with confirmation",
      "Secure handling of sensitive email information",
      "MCP-based tool integration",
    ],
    icon: Server,
    previewImage: "/saspal-gmail-ai-assistant.png",
  },
];
const educationProjects = [
  [
    "Medication Reminder System",
    "A user-focused reminder application for prescribed medication schedules, with database-driven notifications, customizable reminders, intuitive UI, error handling and secure patient data storage.",
  ],
  [
    "Logic Card Game",
    "A real-time multiplayer card game supporting more than five players, with synchronized gameplay, private card handling, turn-based rules, victory conditions, scoring and a Boost feature.",
  ],
  [
    "File Transfer Protocol",
    "A project implementing FTP to move files between a client and server, providing an easy way to access and manage files without cables or additional software.",
  ],
];
const education = [
  [
    "B.Tech - Artificial Intelligence and Data Science",
    "K. Ramakrishnan College of Engineering",
    "2025 / 2028",
  ],
  [
    "Diploma in Computer Engineering",
    "Dhanalakshmi Srinivasan Polytechnic College",
    "2022 / 2025",
  ],
  ["10th", "Sri Vivekananda Matriculation School", "2018 / 2019"],
];

function PlaceholderVisual({
  label = "Project preview",
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2px] border border-ink/10 bg-[#dce9df] ${compact ? "h-52" : "min-h-[350px] sm:aspect-[4/3]"}`}
    >
      <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full border-[28px] border-coral/30" />
      <div className="absolute bottom-[-70px] left-[-20px] h-56 w-56 rounded-full bg-[#f4c9a5]/60" />
      <div
        className={`group/visual absolute left-[5%] top-[6%] w-[90%] overflow-hidden rounded-sm border border-ink/10 shadow-2xl shadow-ink/10 ${compact ? "bg-paper" : "bg-paper/90"}`}
      >
        {!compact ? (
          <>
            <img
              src={mazhaiImageUrl}
              alt="Mazhai Boutique home page"
              className="block h-auto w-full scale-100 bg-paper object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover/visual:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-start bg-gradient-to-t from-ink/70 via-ink/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover/visual:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-paper/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink">
                View project <ArrowUpRight size={14} />
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-7 items-center gap-1.5 border-b border-ink/10 px-3">
              <i className="h-1.5 w-1.5 rounded-full bg-coral" />
              <i className="h-1.5 w-1.5 rounded-full bg-ink/20" />
              <i className="h-1.5 w-1.5 rounded-full bg-ink/20" />
              <span className="ml-auto h-2 w-16 rounded-full bg-ink/10" />
            </div>
            <div className="grid grid-cols-[1.1fr_.9fr] gap-3 p-4">
              <div>
                <div className="mb-3 h-2 w-16 rounded bg-coral" />
                <div className="h-7 w-4/5 bg-ink/90" />
                <div className="mt-1 h-7 w-3/5 bg-ink/90" />
                <div className="mt-4 h-5 w-20 rounded-full bg-ink" />
              </div>
              <div className="h-36 rounded-sm bg-[#c7d9c8]" />
            </div>
            <div className="grid grid-cols-3 gap-2 px-4 pb-4">
              <div className="h-12 bg-[#ead5bd]" />
              <div className="h-12 bg-[#b9d0c6]" />
              <div className="h-12 bg-[#edb99f]" />
            </div>
          </>
        )}
      </div>
      <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[.2em] text-ink/55">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const projectVisualReveal = useInView<HTMLButtonElement>();
  const projectDetailReveal = useInView<HTMLDivElement>();
  const nav = [
    ["About", "about"],
    ["Education", "education"],
    ["Services", "services"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...nav.map(([, id]) => id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="relative z-10">
      <header
        className={`fixed left-0 right-0 top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_30px_-20px_rgba(23,37,44,0.35)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight"
          >
            VISVAESWARAIYA <span className="text-coral">J</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[.14em] text-ink/65 md:flex">
            {nav.map(([label, id]) => (
              <a
                className={`relative pb-1 transition-colors hover:text-coral ${
                  activeId === id ? "text-coral" : ""
                }`}
                key={id}
                href={`#${id}`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-coral transition-all duration-300 ${
                    activeId === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-paper transition-transform hover:-translate-y-0.5 md:flex"
          >
            Start a project <ArrowUpRight size={14} />
          </a>
          <button
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-ink/15 p-2 transition-transform hover:-translate-y-0.5 md:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        <nav
          className={`overflow-hidden border-t border-ink/10 bg-paper px-5 transition-all duration-300 ease-out md:hidden ${
            menuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          {nav.map(([label, id]) => (
            <a
              onClick={() => setMenuOpen(false)}
              className="block border-b border-ink/10 py-3 text-sm font-bold uppercase tracking-wider transition-colors hover:text-coral"
              key={id}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="top"
        className="grid-paper relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-44"
      >
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <div className="reveal">
            <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[.22em] text-coral">
              <span className="h-px w-8 bg-coral" /> Available for freelance
              projects
            </p>
            <h1 className="max-w-3xl font-display text-[clamp(3.2rem,8vw,7rem)] font-medium leading-[.91] tracking-[-.06em]">
              <span className="hero-line">
                <span className="hero-word">Building digital</span>
              </span>
              <span className="hero-line">
                <span className="hero-word hero-word-delay-1 text-coral">
                  with intent.
                </span>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink/65 md:text-lg">
              I am Visvaeswaraiya Jayakumar, a Full Stack Developer | AI
              Engineer | RAG &amp; LLM Developer building modern, responsive
              web experiences and practical AI applications.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-coral px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:shadow-coral/30"
              >
                View my work{" "}
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-[-45deg]"
                />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-ink/20 px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-ink hover:bg-white/50"
              >
                Let's work together{" "}
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
            <div className="mt-14 flex items-center gap-5 text-ink/55">
              <span className="font-mono text-[10px] uppercase tracking-widest">
                Find me online
              </span>
              <a
                href="#contact"
                aria-label="GitHub placeholder"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                <Github size={18} />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn placeholder"
                className="transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#contact"
                aria-label="Fiverr placeholder"
                className="font-bold transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                fi.
              </a>
            </div>
          </div>
          <div className="reveal delay-2 relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-4 top-8 h-16 w-16 animate-float border-l border-t border-coral" />
            <div className="absolute -bottom-4 right-0 h-24 w-24 rounded-full border border-ink/20" />
            <div className="relative rotate-2 bg-ink p-3 shadow-2xl shadow-ink/20 transition-transform duration-500 hover:rotate-0">
              <div className="flex items-center justify-between border-b border-white/15 px-3 py-3 text-[10px] font-mono uppercase tracking-widest text-paper/50">
                <span>Selected work / 01</span>
                <span>Full stack</span>
              </div>
              <div className="p-3">
                <PlaceholderVisual label="Mazhai Boutique / editable preview" />
              </div>
            </div>
            <div className="absolute -bottom-7 -left-4 animate-float rotate-[-8deg] bg-[#f4c9a5] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-widest">
              Design + build
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-ink/10 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.45fr_1fr]">
          <div>
            <Reveal>
              <p className="section-label">01 / About</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-4xl tracking-[-.04em] md:text-5xl">
                Ideas into
                <br />
                useful things.
              </h2>
            </Reveal>
          </div>
          <div className="max-w-3xl">
            <Reveal delay={80}>
              <p className="text-2xl leading-tight tracking-[-.03em] md:text-4xl">
                I build modern full-stack websites and AI-powered applications,
                combining thoughtful interfaces with practical RAG and LLM
                solutions.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl leading-7 text-ink/60">
                I enjoy turning ideas into practical digital experiences, with
                a strong focus on clean interfaces, performance and usability.
              </p>
              <p className="mt-4 max-w-xl font-mono text-xs leading-6 text-ink/55 md:text-sm">
                React • Node.js • Python • AI • LLM • RAG • MCP • APIs •
                Supabase • Cloud
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-6 text-sm text-ink/60 md:grid-cols-3">
              <Reveal delay={0}>
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <strong className="block font-display text-2xl text-ink">
                    <Counter value={1} format={(n) => String(n).padStart(2, "0")} />
                  </strong>
                  Featured project
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <strong className="block font-display text-2xl text-ink">
                    <Counter value={skills.length} format={(n) => String(n).padStart(2, "0")} />
                  </strong>
                  Core technologies
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <strong className="block font-display text-2xl text-ink">
                    IN
                  </strong>
                  Based in India
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="border-t border-ink/10 bg-[#ead5bd]/35 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.45fr_1fr]">
            <div>
              <p className="section-label">02 / Education</p>
              <h2 className="mt-4 font-display text-4xl tracking-[-.04em] md:text-5xl">
                Curious,
                <br />
                adaptable,
                <br />
                building forward.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-8 text-ink/75">
                Seeking innovative and challenging opportunities in a growing
                organization where I can use my skills and knowledge while
                continuing to grow.
              </p>
              <div className="mt-12 border-t border-ink/15 pt-6">
                <p className="section-label">Education</p>
                <EducationTimeline items={education} />
              </div>
              <div className="mt-12 border-t border-ink/15 pt-6">
                <p className="section-label">Strengths</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "Good communication",
                    "Quick learner",
                    "Easily adaptable",
                  ].map((item) => (
                    <span
                      className="rounded-full border border-ink/20 px-4 py-2 text-sm"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">College-level projects</p>
          <h3 className="mt-3 font-display text-3xl tracking-[-.04em]">
            Academic builds, thoughtfully made.
          </h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {educationProjects.map(([title, description], index) => (
              <Reveal key={title} delay={index * 120}>
                <article className="h-full border border-ink/15 bg-white/35 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_18px_40px_-24px_rgba(23,37,44,0.35)]">
                  <span className="font-mono text-xs text-coral">
                    0{index + 2}
                  </span>
                  <h4 className="mt-8 font-display text-2xl">{title}</h4>
                  <p className="mt-4 text-sm leading-6 text-ink/60">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-ink/10 bg-[#ead5bd]/45 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="section-label">02 / Services</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl tracking-[-.04em] md:text-6xl">
              Good work starts
              <br />
              with <span className="text-coral">clarity.</span>
            </h2>
            <p className="max-w-xs text-sm leading-6 text-ink/60">
              Focused development support for ideas that deserve a thoughtful
              digital home.
            </p>
          </div>
          <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc, Icon], index) => {
              const ServiceIcon = Icon as typeof Globe2;
              return (
                <Reveal key={title as string} delay={(index % 4) * 90}>
                  <div className="group relative h-full border-b border-r border-ink/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_18px_40px_-24px_rgba(23,37,44,0.35)]">
                    <span
                      className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-coral/40"
                      aria-hidden="true"
                    />
                    <ServiceIcon
                      size={20}
                      className="text-coral transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="mt-10 font-display text-xl transition-colors duration-300 group-hover:text-coral">
                      {title as string}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink/60">
                      {desc as string}
                    </p>
                    <ChevronRight
                      size={17}
                      className="mt-8 text-ink/35 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-coral"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-ink px-5 py-20 text-paper lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-label text-coral">03 / Toolkit</p>
              <h2 className="mt-4 font-display text-4xl tracking-[-.04em] md:text-5xl">
                Built on a solid
                <br />
                technical foundation.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-paper/55">
              The tools I use to shape clear, reliable and maintainable web
              experiences.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 border-l border-t border-paper/15 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={(index % 5) * 80}>
                <div className="skill-card group border-b border-r border-paper/15 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:bg-paper hover:text-ink hover:shadow-[0_20px_45px_-28px_rgba(239,118,86,0.55)] md:p-5">
                  <span
                    className="skill-icon-float font-mono text-[11px] text-coral transition-transform duration-300 group-hover:scale-125"
                    style={{ animationDelay: `${(index % 5) * 0.3}s` }}
                  >
                    {skill.icon}
                  </span>
                  <h3 className="mt-8 text-sm font-bold transition-transform duration-300 group-hover:translate-x-0.5">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-[10px] uppercase tracking-widest text-paper/40 transition-colors duration-300 group-hover:text-ink/60">
                    {skill.type}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">04 / Selected work</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl tracking-[-.04em] md:text-6xl">
              Selected work,
              <br />
              <span className="text-coral">carefully made.</span>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-ink/60">
              A closer look at full-stack and AI-powered work, including
              practical solutions for e-commerce, knowledge search and
              automation.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <button
              ref={projectVisualReveal.ref}
              onClick={() => setLightbox("Mazhai Boutique")}
              className={`group reveal-up ${projectVisualReveal.inView ? "is-visible" : ""} text-left transition-transform duration-300 hover:-translate-y-1`}
            >
              <PlaceholderVisual label="Click to open gallery" />
            </button>
            <div
              ref={projectDetailReveal.ref}
              className={`reveal-up ${projectDetailReveal.inView ? "is-visible" : ""} flex flex-col justify-between border-t border-ink/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8`}
              style={{ transitionDelay: projectDetailReveal.inView ? "120ms" : "0ms" }}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink/50">
                  <span>E-commerce website</span>
                  <span>01 / 03</span>
                </div>
                <h3 className="mt-10 font-display text-4xl tracking-[-.04em]">
                  Mazhai Boutique
                </h3>
                <p className="mt-5 leading-7 text-ink/65">
                  Designed and developed a modern, responsive e-commerce website
                  focused on a smooth browsing and shopping experience across
                  desktop and mobile devices.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "MongoDB",
                    "Cloudinary",
                  ].map((item) => (
                    <span
                      className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:text-coral"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 border-t border-ink/10 pt-6">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-ink/45">
                  Implemented features
                </p>
                <div className="grid grid-cols-2 gap-y-3 text-sm text-ink/65">
                  {[
                    "Responsive design",
                    "Product browsing",
                    "Product details",
                    "Shopping cart",
                    "Image management",
                    "API integration",
                  ].map((item) => (
                    <span className="flex items-center gap-2" key={item}>
                      <Check size={14} className="text-coral" />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.mazhaiboutique.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm font-bold text-coral transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Live demo{" "}
                    <ExternalLink
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </a>
                  <a
                    href="#contact"
                    className="group flex items-center gap-2 text-sm font-bold transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View project{" "}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-12">
            {aiProjects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <div
                  key={project.title}
                  className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]"
                >
                  <Reveal delay={index * 100}>
                    <div className="group overflow-hidden rounded-[2px] border border-ink/10 bg-white/50 transition-transform duration-300 hover:-translate-y-1">
                      {project.previewImage && (
                        <img
                          src={project.previewImage}
                          alt={`${project.title} project preview`}
                          className="aspect-[4/3] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      )}
                    </div>
                  </Reveal>
                  <Reveal delay={index * 100 + 120}>
                    <div className="flex flex-col justify-between border-t border-ink/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8">
                      <div>
                        <div className="flex items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-ink/50">
                          <span className="flex items-center gap-2">
                            <ProjectIcon size={15} className="text-coral" />
                            {project.category}
                          </span>
                          <span>0{index + 2} / 03</span>
                        </div>
                        <h3 className="mt-8 font-display text-3xl tracking-[-.04em] sm:text-4xl">
                          {project.title}
                        </h3>
                        <p className="mt-5 text-sm leading-7 text-ink/65">
                          {project.description}
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:text-coral"
                              key={technology}
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 border-t border-ink/10 pt-6">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-ink/45">
                          Project features
                        </p>
                        <div className="grid gap-y-3 text-sm text-ink/65 sm:grid-cols-2 sm:gap-x-4">
                          {project.features.map((feature) => (
                            <span
                              className="flex items-start gap-2"
                              key={feature}
                            >
                              <Check
                                size={14}
                                className="mt-0.5 shrink-0 text-coral"
                              />
                              {feature}
                            </span>
                          ))}
                        </div>
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-coral transition-transform duration-300 hover:-translate-y-0.5"
                          >
                            Visit SASPAL website
                            <ExternalLink
                              size={15}
                              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-ink/10 bg-[#ead5bd]/45 px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="section-label">02 / Services</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="font-display text-4xl tracking-[-.04em] md:text-6xl">
              Good work starts
              <br />
              with <span className="text-coral">clarity.</span>
            </h2>
            <p className="max-w-xs text-sm leading-6 text-ink/60">
              Focused development support for ideas that deserve a thoughtful
              digital home.
            </p>
          </div>
          <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, desc, Icon], index) => {
              const ServiceIcon = Icon as typeof Globe2;
              return (
                <Reveal key={title as string} delay={(index % 4) * 90}>
                  <div className="group relative h-full border-b border-r border-ink/15 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_18px_40px_-24px_rgba(23,37,44,0.35)]">
                    <span
                      className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-coral/40"
                      aria-hidden="true"
                    />
                    <ServiceIcon
                      size={20}
                      className="text-coral transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="mt-10 font-display text-xl transition-colors duration-300 group-hover:text-coral">
                      {title as string}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink/60">
                      {desc as string}
                    </p>
                    <ChevronRight
                      size={17}
                      className="mt-8 text-ink/35 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-coral"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.45fr_1fr]">
          <div>
            <Reveal>
              <p className="section-label">05 / Approach</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 font-display text-4xl tracking-[-.04em] md:text-5xl">
                Thoughtful by
                <br />
                default.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-0 border-t border-ink/15 sm:grid-cols-2">
            {approach.map((item, i) => (
              <Reveal key={item} delay={(i % 6) * 70}>
                <div className="flex items-center gap-4 border-b border-ink/15 py-4 text-sm text-ink/70 transition-transform duration-300 hover:translate-x-1">
                  <span className="font-mono text-[10px] text-coral">
                    0{i + 1}
                  </span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mint px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">06 / Experience</p>
          </Reveal>
          <div className="mt-10 border-t border-ink/15">
            <ProgressReveal>
              <div className="grid gap-8 md:grid-cols-[.3fr_1fr_auto]">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                  Project-based
                </div>
                <div>
                  <h3 className="font-display text-3xl">
                    Full Stack Developer | AI Engineer
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-coral">
                    Mazhai Boutique
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-ink/65">
                    Designed and developed a modern e-commerce website with a
                    responsive interface, product browsing, shopping functionality
                    and supporting full stack integrations.
                  </p>
                </div>
                <div className="text-sm text-ink/50">Freelance / Project</div>
              </div>
            </ProgressReveal>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-ink px-5 py-20 text-paper lg:px-8 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-float rounded-full bg-coral/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-paper/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label text-coral">07 / Contact</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 max-w-lg font-display text-5xl leading-[.95] tracking-[-.05em] md:text-7xl">
              Let's build something <span className="text-coral">great</span>{" "}
              together.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-md leading-7 text-paper/55">
              Have a project in mind? Share a few details and I will have a look.
              I am available by email, phone, WhatsApp, or LinkedIn.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-4 text-sm text-paper/60">
              <a
                href="mailto:visvaeswaraiyajayakumar@gmail.com"
                aria-label="Email Visvaeswaraiya Jayakumar"
                className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                <Mail size={16} className="transition-transform duration-300 group-hover:scale-110" /> Email
              </a>
              <a
                href="tel:+918754731787"
                aria-label="Call Visvaeswaraiya Jayakumar"
                className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                <Phone size={16} className="transition-transform duration-300 group-hover:scale-110" /> Phone
              </a>
              <a
                href="https://wa.me/918754731787"
                target="_blank"
                rel="noreferrer"
                aria-label="Message on WhatsApp"
                className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                <MessageCircle size={16} className="transition-transform duration-300 group-hover:scale-110" /> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/visvaeswaraiya-jayakumar-405b0942b"
                target="_blank"
                rel="noreferrer"
                aria-label="Visvaeswaraiya Jayakumar on LinkedIn"
                className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
              >
                <Linkedin size={16} className="transition-transform duration-300 group-hover:scale-110" /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink px-5 pb-8 text-paper lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-end">
          <div>
            <a href="#top" className="font-display text-2xl font-bold">
              VJ<span className="text-coral">.</span>
            </a>
            <p className="mt-2 text-xs text-paper/45">
              Visvaeswaraiya Jayakumar / Full Stack Developer | AI Engineer
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-paper/55">
            {nav.map(([label, id]) => (
              <a className="hover:text-coral" href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-paper/35">
            © {new Date().getFullYear()} Visvaeswaraiya Jayakumar
          </p>
        </div>
      </footer>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project gallery"
          className="reveal-up is-visible fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-5"
          style={{ transitionDuration: "300ms" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between text-paper">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-coral">
                  Mazhai Boutique
                </p>
                <h2 className="mt-1 font-display text-3xl">Project gallery</h2>
              </div>
              <button
                aria-label="Close gallery"
                onClick={() => setLightbox(null)}
                className="rounded-full border border-paper/30 p-2 transition-all duration-300 hover:rotate-90 hover:border-coral hover:text-coral"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-hidden rounded-[2px] border border-paper/20 bg-paper">
              <img
                key={lightbox}
                src={mazhaiCollectionsUrl}
                alt="Mazhai Boutique collections page"
                className="reveal-up is-visible max-h-[62vh] w-full object-contain"
                style={{ transitionDuration: "500ms" }}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {gallery.map((item) => (
                <button
                  key={item}
                  onClick={() => setLightbox(item)}
                  className="group border border-paper/20 p-3 text-left text-[10px] uppercase tracking-wider text-paper/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:text-paper"
                >
                  <span className="mb-6 block h-14 bg-paper/10 transition-transform duration-300 group-hover:scale-[1.03]" />
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <section
        aria-label="Contact details"
        className="border-t border-ink/10 bg-paper px-5 py-8 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/65">
          <span className="font-display text-xl font-bold text-ink">
            Let's connect
          </span>
          <a
            href="mailto:visvaeswaraiyajayakumar@gmail.com"
            aria-label="Email Visvaeswaraiya Jayakumar"
            className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
          >
            <Mail size={17} className="text-coral transition-transform duration-300 group-hover:scale-110" />{" "}
            visvaeswaraiyajayakumar@gmail.com
          </a>
          <a
            href="tel:+918754731787"
            aria-label="Call Visvaeswaraiya Jayakumar"
            className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
          >
            <Phone size={17} className="text-coral transition-transform duration-300 group-hover:scale-110" /> +91 87547 31787
          </a>
          <a
            href="https://wa.me/918754731787"
            target="_blank"
            rel="noreferrer"
            aria-label="Message on WhatsApp"
            className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
          >
            <MessageCircle size={17} className="text-coral transition-transform duration-300 group-hover:scale-110" /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/visvaeswaraiya-jayakumar-405b0942b"
            target="_blank"
            rel="noreferrer"
            aria-label="Visvaesraiya Jayakumar on LinkedIn"
            className="group flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-coral"
          >
            <Linkedin size={17} className="text-coral transition-transform duration-300 group-hover:scale-110" /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
