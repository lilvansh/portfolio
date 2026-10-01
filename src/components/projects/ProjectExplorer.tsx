import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { publishedProjects } from '../../data/projects'
import { cn } from '../../lib/cn'
import type { Project } from '../../types/portfolio'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { ProjectCard } from './ProjectCard'

interface ProjectExplorerProps {
  onOpenProject: (project: Project) => void
}

const preferredFilters = [
  'All',
  'Robotics',
  'Automation',
  'Software',
  'Embedded',
  'AI / Computer Vision',
  'AV Systems',
  'Hardware',
  'System Design',
]

export const ProjectExplorer = ({ onOpenProject }: ProjectExplorerProps) => {
  const [activeFilter, setActiveFilter] = useState('All')
  const availableCategories = useMemo(
    () => new Set(publishedProjects.flatMap((project) => project.categories)),
    [],
  )
  const filters = preferredFilters.filter((filter) => filter === 'All' || availableCategories.has(filter))
  const filteredProjects =
    activeFilter === 'All'
      ? publishedProjects
      : publishedProjects.filter((project) => project.categories.includes(activeFilter))

  return (
    <Section className="section-shell-tight pt-0" labelledBy="project-explorer-heading">
      <SectionHeading
        number="04.B"
        eyebrow="Project explorer"
        title="Scan the complete project landscape."
        description="Filter by engineering domain, then open any project without leaving the portfolio."
        id="project-explorer-heading"
      />

      <LayoutGroup>
        <div className="mb-9 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Project filters">
          {filters.map((filter) => {
            const active = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={cn(
                  'relative shrink-0 overflow-hidden rounded-full border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
                  active
                    ? 'border-[var(--accent)]/50 text-[var(--accent-ink)]'
                    : 'border-[var(--border)] bg-[var(--surface-glass)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]',
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="active-project-filter"
                    className="absolute inset-0 -z-10 bg-[var(--accent)]"
                    transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                  />
                ) : null}
                {filter}
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={() => onOpenProject(project)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </Section>
  )
}
