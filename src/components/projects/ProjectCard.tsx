import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CircleDot } from 'lucide-react'
import { withBase } from '../../lib/assets'
import type { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  onOpen: () => void
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{ duration: reduceMotion ? 0 : 0.35 }}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-[var(--border-strong)]"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
        aria-label={`Open ${project.title} case study`}
      >
        <div className="absolute inset-0 engineering-grid opacity-25" />
        <img
          src={withBase(project.coverImage)}
          alt={project.coverAlt}
          className="relative h-full w-full object-contain p-5 transition duration-500 group-hover:scale-[1.035]"
          loading="lazy"
          width="1200"
          height="900"
        />
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_78%,transparent)] px-2.5 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.13em] text-[var(--text-secondary)] backdrop-blur-lg">
          <CircleDot size={10} className="text-[var(--accent)]" />
          {project.status}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.17em] text-[var(--accent)]">
              {project.categories[0]} · {project.year}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-[var(--text-primary)]">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight size={18} className="mt-1 shrink-0 text-[var(--text-tertiary)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
        </div>
        <p className="mt-4 flex-1 text-sm leading-6 text-[var(--text-secondary)]">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology} className="font-mono text-[0.62rem] text-[var(--text-tertiary)]">
              {technology}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          View case study
          <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.article>
  )
}
