import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'
import { withBase } from '../../lib/assets'
import type { Project } from '../../types/portfolio'

interface ProjectStageProps {
  project: Project
  index: number
  total: number
  onOpen: () => void
}

const accentClass = {
  orange: 'project-accent-orange',
  purple: 'project-accent-purple',
  steel: 'project-accent-steel',
} as const

export const ProjectStage = ({ project, index, total, onOpen }: ProjectStageProps) => {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`${accentClass[project.accent]} relative h-full min-h-[31rem] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]`}>
      <div className="absolute inset-0 engineering-grid opacity-30" />
      <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[var(--project-accent)]/[0.12] blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-[var(--project-accent)]/[0.08] blur-[90px]" />

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-glass)] px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-[var(--project-accent)] shadow-[0_0_12px_var(--project-accent)]" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            Project visual / {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <span className="font-mono text-[0.58rem] tracking-[0.15em] text-[var(--text-tertiary)]">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.button
          key={project.id}
          type="button"
          className="group absolute inset-0 z-10 flex cursor-zoom-in items-center justify-center px-7 pb-16 pt-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--project-accent)]"
          onClick={onOpen}
          aria-label={`Open ${project.title} case study`}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.965, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 1.015, x: -20 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={withBase(project.coverImage)}
            alt={project.coverAlt}
            className="max-h-full w-full rounded-2xl border border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] object-contain shadow-2xl transition duration-700 group-hover:scale-[1.018]"
            width="1200"
            height="900"
          />
          <span className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--background)_82%,transparent)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] opacity-85 backdrop-blur-xl transition group-hover:opacity-100">
            <Maximize2 size={14} />
            Open case study
          </span>
        </motion.button>
      </AnimatePresence>

      <div className="pointer-events-none absolute bottom-6 left-6 z-20 hidden font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[var(--text-tertiary)] md:block">
        x: 04.82 / y: 11.30 / scale: 1:1
      </div>
    </div>
  )
}
