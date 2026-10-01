import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CircleDot, ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import { featuredProjects } from '../../data/projects'
import type { Project } from '../../types/portfolio'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'
import { ProjectStage } from './ProjectStage'

interface FeaturedProjectsProps {
  onOpenProject: (project: Project) => void
}

const DetailBlock = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null
  return (
    <div>
      <p className="spec-label">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{value}</p>
    </div>
  )
}

const ProjectNarrative = ({
  project,
  index,
  onOpen,
  compact = false,
}: {
  project: Project
  index: number
  onOpen: () => void
  compact?: boolean
}) => (
  <div className={compact ? '' : 'max-w-xl'}>
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <span className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        Project {String(index + 1).padStart(2, '0')}
      </span>
      <span className="h-px w-7 bg-[var(--border-strong)]" />
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-glass)] px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">
        <CircleDot size={11} className="text-[var(--accent)]" />
        {project.status}
      </span>
    </div>

    <h3 className={`${compact ? 'text-3xl' : 'text-4xl lg:text-5xl'} text-balance font-semibold tracking-[-0.055em] text-[var(--text-primary)]`}>
      {project.title}
    </h3>
    <p className="mt-4 text-pretty text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
      {project.subtitle}
    </p>

    <div className="mt-6 flex flex-wrap gap-2">
      {project.technologies.slice(0, compact ? 5 : 6).map((technology) => (
        <Tag key={technology}>{technology}</Tag>
      ))}
    </div>

    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      <DetailBlock label="Problem" value={project.problem} />
      <DetailBlock label="Approach" value={project.solution} />
      <DetailBlock label="My role" value={project.role} />
      <DetailBlock label="Current status" value={project.statusNote ?? project.status} />
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onOpen}
        className="group inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      >
        View case study
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <Github size={16} />
          GitHub
        </a>
      ) : null}
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <ExternalLink size={16} />
          Live demo
        </a>
      ) : null}
    </div>
  </div>
)

export const FeaturedProjects = ({ onOpenProject }: FeaturedProjectsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeProject = featuredProjects[activeIndex] ?? featuredProjects[0]

  if (!activeProject || featuredProjects.length === 0) return null

  return (
    <Section id="projects" labelledBy="projects-heading" className="relative overflow-clip">
      <div className="absolute inset-x-0 top-[16rem] -z-10 h-[44rem] bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_6%,transparent),transparent_64%)]" />
      <SectionHeading
        number="04"
        eyebrow="Featured projects"
        title="Engineering stories built for both a 30-second scan and a technical deep dive."
        description="Each featured system is presented like a small product launch: the problem, architecture, role, implementation decisions, and honest current status."
        id="projects-heading"
      />

      <div className="hidden gap-14 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.82fr)] xl:gap-20">
        <div className="sticky top-24 h-[calc(100svh-7.5rem)] max-h-[50rem] min-h-[37rem] self-start">
          <ProjectStage
            project={activeProject}
            index={activeIndex}
            total={featuredProjects.length}
            onOpen={() => onOpenProject(activeProject)}
          />
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="flex min-h-[78svh] items-center border-b border-[var(--border)] py-20 last:border-b-0"
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ amount: 0.55, margin: '-10% 0px -10% 0px' }}
              animate={{ opacity: activeIndex === index ? 1 : 0.46 }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
            >
              <ProjectNarrative project={project} index={index} onOpen={() => onOpenProject(project)} />
            </motion.article>
          ))}
        </div>
      </div>

      <div className="grid gap-16 lg:hidden">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id}>
            <article className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-card)]">
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className="group relative block w-full overflow-hidden rounded-[calc(var(--radius-xl)-0.55rem)] border border-[var(--border)] bg-[var(--surface-secondary)] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label={`Open ${project.title} case study`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${project.coverImage}`}
                  alt={project.coverAlt}
                  className="aspect-[4/3] w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
              </button>
              <div className="px-3 pb-5 pt-7 sm:px-5">
                <ProjectNarrative project={project} index={index} onOpen={() => onOpenProject(project)} compact />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
