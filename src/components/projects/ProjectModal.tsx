import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react'
import { useEffect, useRef, type MouseEvent as ReactMouseEvent } from 'react'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { withBase } from '../../lib/assets'
import type { Project } from '../../types/portfolio'
import { Tag } from '../ui/Tag'
import { SystemFlow } from './SystemFlow'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const ListSection = ({ title, items }: { title: string; items?: string[] }) => {
  if (!items || items.length === 0) return null
  return (
    <section>
      <h3 className="case-study-heading">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)] md:text-base md:leading-7">
            <span className="mt-[0.67rem] size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

const TextSection = ({ title, value }: { title: string; value?: string }) => {
  if (!value) return null
  return (
    <section>
      <h3 className="case-study-heading">{title}</h3>
      <p className="mt-5 text-pretty text-base leading-8 text-[var(--text-secondary)]">{value}</p>
    </section>
  )
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const reduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  useBodyScrollLock(Boolean(project))

  useEffect(() => {
    if (!project) return undefined
    returnFocusRef.current = document.activeElement as HTMLElement | null
    window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      returnFocusRef.current?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-[color-mix(in_srgb,var(--background)_88%,transparent)] p-2 backdrop-blur-xl sm:p-4 lg:p-6"
          role="presentation"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24 }}
          onMouseDown={(event: ReactMouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative mx-auto min-h-full max-w-7xl overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--background-elevated)] shadow-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background-elevated)_86%,transparent)] px-4 py-3 backdrop-blur-2xl sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <span className="size-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]" />
                <p className="truncate font-mono text-[0.61rem] uppercase tracking-[0.17em] text-[var(--text-secondary)]">
                  Project case study / {project.id}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project case study"
                className="ml-4 grid size-10 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-glass)] text-[var(--text-primary)] transition hover:rotate-3 hover:border-[var(--accent)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-5 pb-20 pt-10 sm:px-8 md:px-12 lg:px-16 lg:pt-16">
              <header className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--accent)]">{project.categories[0]}</span>
                    <span className="h-px w-8 bg-[var(--border-strong)]" />
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">{project.year}</span>
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[0.57rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]">{project.status}</span>
                  </div>
                  <h2 id="project-modal-title" className="mt-6 text-balance text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
                    {project.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-[var(--text-secondary)]">{project.subtitle}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>
                  {project.github || project.demo || project.externalLink ? (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer" className="case-study-link">
                          <Github size={16} /> GitHub <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="case-study-link">
                          <ExternalLink size={16} /> Live demo <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                      {project.externalLink ? (
                        <a href={project.externalLink} target="_blank" rel="noreferrer" className="case-study-link">
                          Project link <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-card)]">
                  <div className="absolute inset-0 engineering-grid opacity-20" />
                  <img
                    src={withBase(project.coverImage)}
                    alt={project.coverAlt}
                    className="relative aspect-[4/3] w-full rounded-[calc(var(--radius-lg)-0.45rem)] object-contain"
                    width="1200"
                    height="900"
                  />
                </div>
              </header>

              <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['Role', project.role],
                  ['Year', project.year],
                  ['Category', project.categories.join(' / ')],
                  ['Status', project.status],
                ].filter((item): item is [string, string] => Boolean(item[1])).map(([label, value]) => (
                  <div key={label} className="bg-[var(--surface)] p-5">
                    <p className="spec-label">{label}</p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[var(--text-primary)]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="case-study-grid mt-20">
                <TextSection title="Project Overview" value={project.description} />
                <TextSection title="The Problem" value={project.problem} />
                <TextSection title="My Solution" value={project.solution} />

                {project.systemFlow && project.systemFlow.length > 0 ? (
                  <section className="lg:col-span-2">
                    <h3 className="case-study-heading">System Architecture</h3>
                    <div className="mt-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
                      <SystemFlow steps={project.systemFlow} />
                    </div>
                  </section>
                ) : null}

                <TextSection title="My Role" value={project.role} />
                <ListSection title="Engineering Challenges" items={project.challenges} />
                <ListSection title="Implementation" items={project.implementation} />
                <ListSection title="Results" items={project.results} />
                <ListSection title="What I Learned" items={project.learnings} />
                <ListSection title="Future Improvements" items={project.future} />
              </div>

              {project.connections && project.connections.length > 0 ? (
                <section className="mt-20">
                  <h3 className="case-study-heading">Technology Connections</h3>
                  <div className="mt-6 flex flex-wrap items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-7">
                    {project.connections.map((connection, index) => (
                      <div key={connection} className="contents">
                        <span className="rounded-full border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                          {connection}
                        </span>
                        {index < project.connections!.length - 1 ? <span className="text-[var(--accent)]">→</span> : null}
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {project.video ? (
                <section className="mt-20">
                  <h3 className="case-study-heading">Project Video</h3>
                  <div className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--media-background)] p-2 shadow-[var(--shadow-card)]">
                    <video
                      src={withBase(project.video)}
                      poster={withBase(project.coverImage)}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-video w-full rounded-[calc(var(--radius-lg)-0.35rem)] bg-[var(--media-background)] object-contain"
                    >
                      Your browser does not support embedded video.
                    </video>
                  </div>
                </section>
              ) : null}

              {project.images && project.images.length > 0 ? (
                <section className="mt-20">
                  <h3 className="case-study-heading">Project Gallery</h3>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {project.images.map((image) => (
                      <figure key={image.src} className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-3">
                        <img
                          src={withBase(image.src)}
                          alt={image.alt}
                          className="aspect-[4/3] w-full rounded-[calc(var(--radius-lg)-0.45rem)] object-contain"
                          loading="lazy"
                          width="1200"
                          height="900"
                        />
                        {image.caption ? <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-[var(--text-secondary)]">{image.caption}</figcaption> : null}
                      </figure>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
