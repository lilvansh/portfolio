import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { personal } from '../../data/personal'
import { withBase } from '../../lib/assets'
import { MagneticLink } from '../ui/MagneticLink'
import { EngineeringBackground } from './EngineeringBackground'

const iconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const

export const Hero = () => {
  const [specialtyIndex, setSpecialtyIndex] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.965])
  const enabledSocials = personal.socialLinks.filter((link) => link.enabled && link.href)
  const activeSpecialty = personal.specialties[specialtyIndex] ?? personal.specialties[0] ?? 'Engineering'

  useEffect(() => {
    if (reduceMotion) return undefined
    const interval = window.setInterval(() => {
      setSpecialtyIndex((index) => (index + 1) % personal.specialties.length)
    }, 2300)
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <section
      ref={heroRef}
      id="top"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] overflow-hidden border-b border-[var(--border)]"
    >
      <EngineeringBackground />
      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[var(--content-max)] flex-col justify-center px-5 pb-16 pt-28 sm:px-7 lg:px-10"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
      >
        <div className="max-w-6xl">
          <motion.div
            className="mb-7 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-glass)] px-3.5 py-2 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--text-secondary)] backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--accent)] opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
              </span>
              {personal.eyebrow}
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              {personal.location}
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            className="text-balance text-[clamp(4rem,13vw,10rem)] font-semibold leading-[0.83] tracking-[-0.085em] text-[var(--text-primary)]"
            initial={reduceMotion ? false : { opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Vans
            <br />
            <span className="text-outline">Patel.</span>
          </motion.h1>

          <motion.div
            className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-lg font-medium tracking-[-0.02em] text-[var(--text-primary)] sm:text-xl md:text-2xl">
                {personal.role}
              </p>
              <div className="mt-2 flex min-h-9 flex-wrap items-baseline gap-x-2 text-base text-[var(--text-secondary)] sm:text-lg">
                <span>Building at the intersection of</span>
                <span className="relative inline-flex min-w-[12rem] overflow-hidden font-semibold text-[var(--accent)] sm:min-w-[14rem]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={activeSpecialty}
                      initial={reduceMotion ? false : { y: '85%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={reduceMotion ? undefined : { y: '-85%', opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {activeSpecialty}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                {personal.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <div className="flex flex-wrap gap-3">
                <MagneticLink
                  href="#projects"
                  className="group items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-ink)] shadow-[0_14px_50px_color-mix(in_srgb,var(--accent)_18%,transparent)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  Explore my work
                  <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                </MagneticLink>
                {personal.resume.available ? (
                  <MagneticLink
                    href={withBase(personal.resume.path)}
                    external
                    className="group items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-glass)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] backdrop-blur-md transition hover:border-[var(--accent)]/60 hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <FileText size={16} />
                    View resume
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </MagneticLink>
                ) : null}
              </div>

              {enabledSocials.length > 0 || personal.email ? (
                <div className="flex items-center gap-2">
                  {enabledSocials.map((link) => {
                    const Icon = iconByLabel[link.label as keyof typeof iconByLabel]
                    if (!Icon) return null
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        className="grid size-9 place-items-center rounded-full border border-transparent text-[var(--text-tertiary)] transition hover:border-[var(--border)] hover:bg-[var(--surface-glass)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                      >
                        <Icon size={17} />
                      </a>
                    )
                  })}
                  {personal.email ? (
                    <a
                      href={`mailto:${personal.email}`}
                      className="group ml-2 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-tertiary)] transition hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      Email
                      <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to the about section"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full p-2 text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 1.1 }}
        >
          <span className="font-mono text-[0.56rem] uppercase tracking-[0.22em]">Scroll</span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={15} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}
