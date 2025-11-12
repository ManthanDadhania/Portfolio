"use client";

import {
  ArrowDownToLine,
  ArrowUpRight,
  CalendarDays,
  CircuitBoard,
  Clock,
  FileText,
  Github,
  Languages,
  Sparkles,
  Linkedin,
  Mail,
  MapPin,
  Send,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fragment, type ReactNode } from "react";
import { HighlightCard } from "@/components/highlight-card";
import { Section } from "@/components/section";
import { BackgroundCanvas } from "@/components/background-canvas";
import { NavigationBar } from "@/components/navigation-bar";
import { ThemeToggle } from "@/components/theme-toggle"; // Not used in this version, using FloatingThemeToggle
import { getResumeDownloadUrl } from "@/lib/appwrite";
import {
  collaborativeHighlights,
  conclusionInsights,
  dayInLife,
  futureRoadmap,
  globalEthicsSpotlight,
  personalDetails,
  projects,
  proudHighlights,
  resumeSnapshot,
  technicalSkillGroups,
  skillsShowcase,
  tableOfContents,
  testimonials,
} from "@/data/portfolio";
import type { TechnicalSkillGroup } from "@/data/portfolio";

const gradientBlobs = [
  {
    className:
      "absolute -top-28 right-[-12rem] h-[28rem] w-[32rem] rounded-[40%] bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.18),transparent_65%)] blur-[120px]",
  },
  {
    className:
      "absolute bottom-[-14rem] left-[-10rem] h-[32rem] w-[36rem] rounded-[45%] bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.2),transparent_62%)] blur-[130px]",
  },
];

const learningPillars = [
  {
    title: "Curiosity as a compass",
    body: "Questions trigger experiments that transform into real-world impact.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Creativity with constraints",
    body: "Design-led thinking uncovers elegant, measurable solutions for complex challenges.",
    icon: <CircuitBoard className="h-5 w-5" />,
  },
  {
    title: "Collaboration as leverage",
    body: "Shared ownership lifts every project, nurturing peer learning and collective excellence.",
    icon: <UsersRound className="h-5 w-5" />,
  },
];

const quickStatsData = [
  {
    label: "Languages",
    value: "English · Gujarati · Hindi",
    icon: <Languages className="h-5 w-5" />,
  },
  {
    label: "Impact Areas",
    value: "Blockchain · AI/ML · Full-stack",
    icon: <CircuitBoard className="h-5 w-5" />,
  },
  {
    label: "Community",
    value: "Encode – Core Member",
    icon: <UsersRound className="h-5 w-5" />,
  },
];

export default function Home() {
  const resumeLink =
    getResumeDownloadUrl() ??
    process.env.NEXT_PUBLIC_RESUME_URL ??
    `/${personalDetails.resumeFileName ?? "resume.pdf"}`;
  const firstName = personalDetails.name.split(" ")[0] ?? personalDetails.name;
  const initials = personalDetails.name
    .split(/\s+/)
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase())
    .join("");
  const navSections = tableOfContents.map((entry) => ({
    id: entry.id,
    label: entry.label,
    shortLabel: entry.shortLabel ?? entry.label.split(":")[0].split("&")[0].trim(),
  }));

  return (
    <Fragment>
      {/* Structural Fix: Move fixed/global components out of the <main> scrolling area. */}
      <NavigationBar
        sections={navSections}
        resumeLink={resumeLink}
        name={firstName}
        tagline={personalDetails.program}
        badge="Portfolio"
        brand={initials}
      />
      <BackgroundCanvas />
      <FloatingThemeToggle />

      <main className="relative mx-auto flex min-h-screen w-full max-w-[min(1680px,100%)] flex-col gap-14 px-4 pb-28 pt-32 sm:px-8 lg:px-16">
        <HeroSection resumeLink={resumeLink} />
        <TableOfContents />
        <div className="flex flex-col gap-14 lg:gap-[5.5rem]">
          <Section
            id="introduction"
            eyebrow="Learning Mindset"
            title="Introduction & Learning Philosophy"
          >
            <p className="text-[color:var(--text-secondary)]">
              I believe in continuous learning through curiosity, creativity, and
              collaboration. My academic journey is driven by a desire to apply
              technology to solve real-world problems, blending analytical
              thinking with innovation. I value integrity, teamwork, and
              adaptability as core principles in both learning and life.
            </p>
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
              <div className="grid gap-4">
                {learningPillars.map((pillar) => (
                  <motion.div
                    key={`intro-${pillar.title}`}
                    className="group relative overflow-hidden rounded-[1.8rem] border border-[color:var(--border-subtle)]/80 bg-[color:var(--surface-primary)]/92 p-6 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]"
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_60%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_65%)]" />
                    </div>
                    <div className="relative flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-[color:var(--accent-primary)]/22 via-transparent to-[color:var(--accent-secondary)]/22 text-[color:var(--accent-primary)]">
                        {pillar.icon}
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-semibold text-[color:var(--text-primary)]">
                          {pillar.title}
                        </p>
                        <p className="text-sm leading-6 text-[color:var(--text-secondary)]">
                          {pillar.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-4">
                {quickStatsData.map((stat) => (
                  <motion.div
                    key={`intro-stat-${stat.label}`}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-[color:var(--border-subtle)]/80 bg-[color:var(--surface-secondary)]/90 p-5 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]"
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  >
                    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_75%)]" />
                    </div>
                    <div className="relative flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-[1rem] bg-[color:var(--surface-primary)]/70 text-[color:var(--text-accent)] shadow-[0_12px_30px_-20px_rgba(236,72,153,0.8)]">
                        {stat.icon}
                      </span>
                      <div>
                        <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[color:var(--text-primary)]">
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="resume" eyebrow="Snapshot" title="Resume / CV">
            <div className="grid gap-8 lg:grid-cols-2">
              <ResumeCard title="Education Timeline">
                <ul className="space-y-4">
                  {resumeSnapshot.education.map((item) => (
                    <li key={item.program}>
                      <p className="text-lg font-semibold text-[color:var(--text-primary)]">
                        {item.program}
                      </p>
                      <p className="text-base text-[color:var(--text-muted)]">
                        {item.institution} · {item.duration}
                      </p>
                      <p className="mt-1 text-base text-[color:var(--text-accent)]">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </ResumeCard>
              <ResumeCard title="Experience">
                {resumeSnapshot.experience.map((exp) => (
                  <div key={exp.role} className="space-y-3">
                    <div>
                      <p className="text-lg font-semibold text-[color:var(--text-primary)]">
                        {exp.role}
                      </p>
                      <p className="text-base text-[color:var(--text-muted)]">
                        {exp.organization} · {exp.duration}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="pl-5 text-base leading-7 text-[color:var(--text-secondary)]"
                        >
                          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-secondary)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ResumeCard>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <ResumeCard title="Areas of Interest">
                <ul className="space-y-2 text-sm leading-6">
                  {resumeSnapshot.interests.map((interest) => (
                    <li key={interest} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </ResumeCard>
              <ResumeCard title="Soft Skills">
                <SkillGrid items={resumeSnapshot.softSkills} />
              </ResumeCard>
              <div className="grid gap-6 lg:col-span-1">
                {technicalSkillGroups.slice(0, 2).map((group) => (
                  <CompactTechnicalSkillCard key={group.title} group={group} />
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {technicalSkillGroups.slice(2).map((group) => (
                <CompactTechnicalSkillCard key={group.title} group={group} />
              ))}
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <ResumeCard title="Certifications & Recognitions">
                <ul className="space-y-2 text-sm leading-6">
                  {resumeSnapshot.certifications.map((cert) => (
                    <li key={cert} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-secondary)]" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </ResumeCard>
              <ResumeCard title="Awards & Highlights">
                <ul className="space-y-2 text-sm leading-6">
                  {resumeSnapshot.awards.map((award) => (
                    <li key={award} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-secondary)]" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </ResumeCard>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <ResumeCard title="Volunteer & Co-curricular">
                <ul className="space-y-2 text-sm leading-6">
                  {resumeSnapshot.volunteer.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ResumeCard>
              <ResumeCard title="Hobbies & Interests">
                <ul className="space-y-2 text-sm leading-6">
                  {resumeSnapshot.hobbies.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ResumeCard>
            </div>
          </Section>

          <Section
            id="projects"
            eyebrow="Research & Engineering"
            title="Interdisciplinary Projects & Research"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <HighlightCard
                  key={project.title}
                  title={project.title}
                  subtitle={project.badge}
                  icon={<FileText className="h-5 w-5" />}
                >
                  <div className="space-y-3 text-base leading-7">
                    <p className="font-medium text-[color:var(--text-primary)]">
                      Overview
                    </p>
                    <p>{project.overview}</p>
                    <p className="font-medium text-[color:var(--text-primary)]">
                      Methodology
                    </p>
                    <ul className="space-y-2">
                      {project.methodology.map((step) => (
                        <li key={step} className="flex gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-medium text-[color:var(--text-primary)]">
                      Outcome
                    </p>
                    <p>{project.outcome}</p>
                    <p className="font-medium text-[color:var(--text-primary)]">
                      Challenges & Solutions
                    </p>
                    <p>{project.challenges}</p>
                  </div>
                </HighlightCard>
              ))}
            </div>
          </Section>

          <Section
            id="skills"
            eyebrow="Mastery Tracks"
            title="Advanced Skill Development & Mastery"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              {skillsShowcase.map((skill) => (
                <HighlightCard
                  key={skill.label}
                  title={skill.label}
                  subtitle={skill.evidence}
                  icon={skill.icon}
                >
                  <p className="text-base leading-7">{skill.description}</p>
                </HighlightCard>
              ))}
            </div>
          </Section>

          <Section
            id="collaboration"
            eyebrow="Team Impact"
            title="Collaborative & Leadership Experiences"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              {collaborativeHighlights.map((item) => (
                <motion.div
                  key={item.role}
                  className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-8 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)] transition-all hover:-translate-y-1 hover:border-[color:var(--border-strong)]"
                  whileHover={{ translateY: -8 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                >
                  <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
                    {item.role}
                  </h3>
                  <dl className="mt-5 space-y-5 text-base leading-7 text-[color:var(--text-secondary)]">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-accent)]">
                        Responsibilities
                      </dt>
                      <dd className="mt-1">{item.responsibilities}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-accent)]">
                        Team Dynamics
                      </dt>
                      <dd className="mt-1">{item.dynamics}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-accent)]">
                        Outcome
                      </dt>
                      <dd className="mt-1">{item.outcome}</dd>
                    </div>
                  </dl>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section
            id="global"
            eyebrow="Responsible Innovation"
            title="Global Awareness & Ethical Considerations"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-strong)] p-8 shadow-[var(--shadow-l)] backdrop-blur-[calc(var(--blur-strength)+6px)]">
                <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
                  {globalEthicsSpotlight.topic}
                </h3>
                <p className="mt-4 text-lg leading-8 text-[color:var(--text-secondary)]">
                  {globalEthicsSpotlight.reflection}
                </p>
                <p className="mt-4 rounded-[1.6rem] border border-[color:var(--border-strong)] bg-gradient-to-r from-[color:var(--accent-primary)]/15 via-transparent to-[color:var(--accent-secondary)]/15 px-5 py-4 text-base font-medium text-[color:var(--text-primary)]">
                  {globalEthicsSpotlight.impact}
                </p>
              </div>
              <div className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-8 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-[color:var(--text-primary)]">
                  <Clock className="h-5 w-5 text-[color:var(--accent-primary)]" />
                  A Day of My Life
                </h3>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[color:var(--text-secondary)]">
                  {dayInLife.map((slot) => (
                    <li key={slot.label}>
                      <div className="flex items-center justify-between text-[color:var(--text-muted)]">
                        <span>{slot.label}</span>
                        <span>{slot.value} hrs</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-[color:var(--surface-strong)]/55">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent-secondary)] to-[color:var(--accent-primary)]"
                          style={{ width: `${(slot.value / 8) * 100}%` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(slot.value / 8) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section
            id="future"
            eyebrow="Roadmap"
            title="Future Aspirations & Professional Development"
          >
            <div className="grid gap-8 lg:grid-cols-3">
              <HighlightCard
                title="Vision"
                icon={<Send className="h-5 w-5" />}
                subtitle=""
              >
                <p className="text-base leading-7">{futureRoadmap.vision}</p>
              </HighlightCard>
              <HighlightCard
                title="Focus Areas"
                icon={<ArrowUpRight className="h-5 w-5" />}
                subtitle=""
              >
                <ul className="space-y-3 text-base leading-7">
                  {futureRoadmap.focusAreas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </HighlightCard>
              <HighlightCard
                title="Commitments"
                icon={<CalendarDays className="h-5 w-5" />}
                subtitle=""
              >
                <ul className="space-y-3 text-base leading-7">
                  {futureRoadmap.commitments.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-secondary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </HighlightCard>
            </div>
          </Section>

          <Section
            id="conclusion"
            eyebrow="Reflection"
            title="Conclusion & Self-Assessment"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-8 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]">
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">
                  Key Learnings
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7">
                  {conclusionInsights.keyLearnings.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-6 text-xl font-semibold text-[color:var(--text-primary)]">
                  Growth Areas
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7">
                  {conclusionInsights.growthAreas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-secondary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-[color:var(--border-strong)] bg-[color:var(--surface-strong)] p-8 shadow-[var(--shadow-l)] backdrop-blur-[calc(var(--blur-strength)+4px)]">
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">
                  SWOT Analysis
                </h3>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <SwotColumn title="Strengths" items={conclusionInsights.swot.strengths} />
                  <SwotColumn title="Weaknesses" items={conclusionInsights.swot.weaknesses} />
                  <SwotColumn title="Opportunities" items={conclusionInsights.swot.opportunities} />
                  <SwotColumn title="Threats" items={conclusionInsights.swot.threats} />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
    </Fragment>
  );
}

function HeroSection({ resumeLink }: { resumeLink: string }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[3rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-primary)] px-6 py-14 shadow-[var(--shadow-l)] backdrop-blur-[calc(var(--blur-strength)+6px)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute -top-36 left-20 h-72 w-72 rounded-full bg-gradient-to-br from-[color:var(--accent-primary)]/25 via-transparent to-[color:var(--accent-secondary)]/20 blur-[85px]"
          animate={{ x: [0, 32, -18, 0], y: [0, -22, 12, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-12 h-80 w-80 rounded-full bg-gradient-to-tr from-[color:var(--accent-secondary)]/24 via-transparent to-[color:var(--accent-primary)]/22 blur-[95px]"
          animate={{ x: [0, -28, 16, 0], y: [0, 16, -12, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="relative z-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-gradient-to-r from-[color:var(--accent-primary)]/18 via-transparent to-[color:var(--accent-secondary)]/18 px-4 py-1 text-sm font-medium text-[color:var(--text-accent)]">
            Academic Portfolio · {personalDetails.program}
          </span>
          <motion.h1
            className="font-display text-balance text-4xl font-semibold leading-tight text-[color:var(--text-primary)] sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {personalDetails.name}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-xl leading-9 text-[color:var(--text-secondary)]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
          >
            {personalDetails.tagline}
          </motion.p>

          <div className="grid gap-4 text-base leading-7 text-[color:var(--text-secondary)] sm:grid-cols-2">
            <InfoRow icon={<MapPin className="h-4 w-4" />} label="Institution">
              {personalDetails.institution}
            </InfoRow>
            <InfoRow icon={<Mail className="h-4 w-4" />} label="Email">
              <a
                href={`mailto:${personalDetails.email}`}
                className="break-all hover:underline md:break-words"
              >
                {personalDetails.email}
              </a>
            </InfoRow>
            <InfoRow icon={<Github className="h-4 w-4" />} label="GitHub">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="break-words hover:underline"
              >
                {new URL(personalDetails.github).hostname}
              </a>
            </InfoRow>
            <InfoRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn">
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="break-words hover:underline"
              >
                {new URL(personalDetails.linkedin).pathname.replace("/", "")}
              </a>
            </InfoRow>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={resumeLink}
              download={personalDetails.resumeFileName ?? "resume.pdf"}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--text-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_35px_-18px_rgba(124,58,237,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Résumé
            </a>
            <a
              href="#introduction"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] px-6 py-3 text-sm font-semibold text-[color:var(--text-primary)] shadow-[var(--shadow-m)] transition hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-accent)]"
            >
              Explore Portfolio
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 pt-6 sm:grid-cols-2">
            {learningPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)]/90 p-5 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_65%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_70%)]" />
                </div>
                <div className="relative flex items-start gap-3 text-base leading-7">
                  <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-[1.1rem] bg-gradient-to-br from-[color:var(--accent-primary)]/22 via-transparent to-[color:var(--accent-secondary)]/22 text-[color:var(--accent-primary)]">
                    {pillar.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[color:var(--text-primary)]">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-[color:var(--text-secondary)]">{pillar.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 pt-6 sm:grid-cols-3">
            {quickStatsData.map((stat) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-[1.6rem] border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)]/90 p-4 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_75%)]" />
                </div>
                <div className="relative flex flex-col gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[1rem] bg-[color:var(--surface-primary)]/70 text-[color:var(--text-accent)] shadow-[0_12px_30px_-20px_rgba(236,72,153,0.8)]">
                    {stat.icon}
                  </span>
                  <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
                    {stat.label}
                  </p>
                  <p className="text-base font-semibold text-[color:var(--text-primary)]">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative flex h-full w-full justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative h-[22rem] w-[22rem] overflow-hidden rounded-[2.9rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-1 shadow-[var(--shadow-l)] sm:h-[24rem] sm:w-[24rem]">
            <motion.div
              className="pointer-events-none absolute inset-0 z-10 rounded-[2.6rem] border border-[color:var(--border-strong)]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="pointer-events-none absolute inset-[-8%] z-0 rounded-[3.2rem] border border-[color:var(--border-strong)]/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-[color:var(--surface-strong)]">
              <Image
                src="/Manthan.jpg"
                alt={`${personalDetails.name} portrait placeholder`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proudHighlights.map((item, idx) => (
          <motion.div
            key={item.title}
            className="rounded-[1.8rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-6 text-base leading-7 text-[color:var(--text-secondary)] shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--accent-primary)]/18 via-transparent to-[color:var(--accent-secondary)]/18 text-[color:var(--accent-primary)]">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-[color:var(--text-primary)]">
              {item.title}
            </p>
            <p className="mt-2 text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FloatingThemeToggle() {
  return (
    <motion.div
      className="pointer-events-none fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="pointer-events-auto rounded-2xl border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)]/95 p-2 shadow-[var(--shadow-l)] backdrop-blur-[calc(var(--blur-strength)+4px)]">
        <ThemeToggle />
      </div>
    </motion.div>
  );
}

function TableOfContents() {
  return (
    <Section id="contents" eyebrow="Overview" title="Table of Contents">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tableOfContents.map((item, index) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center justify-between rounded-[1.8rem] border border-[color:var(--border-subtle)]/70 bg-[color:var(--surface-secondary)] px-6 py-4 text-base font-semibold text-[color:var(--text-secondary)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-accent)]"
          >
            <span className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--accent-primary)]/20 via-transparent to-[color:var(--accent-secondary)]/20 text-xs text-[color:var(--accent-primary)]">
                {index + 1}
              </span>
              {item.label}
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </Section>
  );
}

function ResumeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-8 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]">
      <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{title}</h3>
      <div className="mt-4 space-y-3 text-base leading-7 text-[color:var(--text-secondary)]">
        {children}
      </div>
    </div>
  );
}

function CompactTechnicalSkillCard({ group }: { group: TechnicalSkillGroup }) {
  const toneClasses: Record<TechnicalSkillGroup["skills"][number]["tone"], string> = {
    indigo: "bg-indigo-500/90 text-white",
    sky: "bg-sky-500/90 text-white",
    emerald: "bg-emerald-500/90 text-white",
    rose: "bg-rose-500/90 text-white",
    amber: "bg-amber-500/90 text-white",
    violet: "bg-violet-500/90 text-white",
    slate: "bg-slate-500/90 text-white",
  };

  return (
    <div className="rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] p-6 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)]">
      <div className="flex items-start gap-3 mb-4">
        <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-[1.1rem] bg-gradient-to-br from-[color:var(--accent-primary)]/22 via-transparent to-[color:var(--accent-secondary)]/22 text-[color:var(--accent-primary)]">
          {group.icon}
        </span>
        <div>
          <h3 className="text-base font-semibold text-[color:var(--text-primary)]">{group.title}</h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium shadow-sm ${toneClasses[skill.tone]}`}
          >
            <span className="flex h-5 w-5 flex-none items-center justify-center">
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TechnicalSkillsGrid({ groups }: { groups: TechnicalSkillGroup[] }) {
  const toneClasses: Record<TechnicalSkillGroup["skills"][number]["tone"], string> = {
    indigo: "bg-indigo-500/90 text-white",
    sky: "bg-sky-500/90 text-white",
    emerald: "bg-emerald-500/90 text-white",
    rose: "bg-rose-500/90 text-white",
    amber: "bg-amber-500/90 text-white",
    violet: "bg-violet-500/90 text-white",
    slate: "bg-slate-500/90 text-white",
  };

  const toneHoverClasses: Record<TechnicalSkillGroup["skills"][number]["tone"], string> = {
    indigo: "hover:border-indigo-400/60 hover:bg-indigo-500/12",
    sky: "hover:border-sky-400/60 hover:bg-sky-500/12",
    emerald: "hover:border-emerald-400/60 hover:bg-emerald-500/12",
    rose: "hover:border-rose-400/60 hover:bg-rose-500/12",
    amber: "hover:border-amber-400/60 hover:bg-amber-500/12",
    violet: "hover:border-violet-400/60 hover:bg-violet-500/12",
    slate: "hover:border-slate-400/60 hover:bg-slate-500/12",
  };

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {groups.map((group) => (
        <motion.div
          key={group.title}
          className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[2.2rem] border border-[color:var(--border-subtle)]/80 bg-[color:var(--surface-primary)]/94 p-7 shadow-[var(--shadow-m)] backdrop-blur-[calc(var(--blur-strength)+2px)]"
          whileHover={{ y: -10, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_62%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_65%)]" />
          </div>
          <div className="relative flex items-start gap-3">
            <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-[1.3rem] bg-gradient-to-br from-[color:var(--accent-primary)]/22 via-transparent to-[color:var(--accent-secondary)]/22 text-[color:var(--accent-primary)]">
              {group.icon}
            </span>
            <div>
              <p className="text-lg font-semibold text-[color:var(--text-primary)]">
                {group.title}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                Spotlight
              </p>
            </div>
          </div>
          <p className="relative text-base leading-7 text-[color:var(--text-secondary)]">
            {group.spotlight}
          </p>
          <div className="relative flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <motion.span
                key={`${group.title}-${skill.name}`}
                className={`group/skill inline-flex items-center gap-3 rounded-[1.8rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] px-4 py-2 text-base font-medium text-[color:var(--text-secondary)] shadow-[0_16px_28px_-22px_rgba(15,23,42,0.55)] transition-all hover:text-[color:var(--text-primary)] ${toneHoverClasses[skill.tone]}`}
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <span
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${toneClasses[skill.tone]}`}
                >
                  {skill.icon}
                </span>
                <span className="text-base font-semibold text-[color:var(--text-primary)]">
                  {skill.name}
                </span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SkillGrid({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <motion.span
          key={item}
          className="inline-flex items-center gap-1 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] px-3 py-1 text-xs font-medium text-[color:var(--text-secondary)] shadow-[0_12px_20px_-20px_rgba(15,23,42,0.45)]"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
        >
          <CircleBullet />
          {item}
        </motion.span>
      ))}
    </div>
  );
}

function CircleBullet() {
  return <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-secondary)]" />;
}

function SwotColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-accent)]">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-base leading-7 text-[color:var(--text-secondary)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--accent-primary)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ resumeLink }: { resumeLink: string }) {
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-[color:var(--border-subtle)] bg-[color:var(--surface-secondary)] px-6 py-10 text-base text-[color:var(--text-secondary)] shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)] sm:flex-row sm:px-10">
      <div>
        <p className="font-semibold text-[color:var(--text-primary)]">
          {personalDetails.name}
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-accent)]">
          Innovate · Integrate · Inspire
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-base">
        <Link
          href={`mailto:${personalDetails.email}`}
          className="inline-flex items-center gap-1 hover:text-[color:var(--text-accent)]"
        >
          <Mail className="h-4 w-4" />
          {personalDetails.email}
        </Link>
        <span className="hidden text-[color:var(--text-muted)] sm:inline">·</span>
        <a
          href={resumeLink}
          download={personalDetails.resumeFileName ?? "resume.pdf"}
          className="inline-flex items-center gap-1 hover:text-[color:var(--text-accent)]"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Portfolio Résumé
        </a>
        <span className="hidden text-[color:var(--text-muted)] sm:inline">·</span>
        <Link
          href={personalDetails.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-[color:var(--text-accent)]"
        >
          <Github className="h-4 w-4" />
          GitHub
        </Link>
        <Link
          href={personalDetails.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-[color:var(--text-accent)]"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex w-full items-start gap-3 rounded-[1.6rem] border border-[color:var(--border-subtle)]/80 bg-[color:var(--surface-secondary)]/90 p-5 shadow-[var(--shadow-m)] backdrop-blur-[var(--blur-strength)] transition hover:border-[color:var(--border-strong)]">
      <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-[1rem] bg-gradient-to-br from-[color:var(--accent-primary)]/22 via-transparent to-[color:var(--accent-secondary)]/22 text-[color:var(--accent-primary)]">
        {icon}
      </span>
      <div className="space-y-1">
        <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--text-muted)]">
          {label}
        </p>
        {/* If label is Résumé, render the children (the <a> tag) directly. */}
        {label === "Résumé" ? children : (
          <p className="max-w-full break-words text-base font-semibold text-[color:var(--text-primary)]">
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

function GradientAccents() {
  return (
    <Fragment>
      {gradientBlobs.map(({ className }, index) => (
        <div
          key={index}
          className={`pointer-events-none -z-10 ${className}`}
        />
      ))}
    </Fragment>
  );
}