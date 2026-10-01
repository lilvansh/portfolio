import { motion, useReducedMotion } from 'framer-motion'
import { personal } from '../../data/personal'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'

export const CurrentFocus = () => {
  const reduceMotion = useReducedMotion()

  return (
    <Section className="section-shell-tight border-y border-[var(--border)] bg-[var(--background-elevated)]">
      <SectionHeading
        number="03"
        eyebrow="Current focus"
        title="A connected engineering practice—not isolated skill boxes."
        description="Hover or focus on each area to see how it fits into the larger system."
        align="center"
      />

      <Reveal className="relative mx-auto max-w-5xl">
        <div className="relative mx-auto hidden aspect-[16/8.2] min-h-[31rem] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] md:block">
          <div className="absolute inset-0 engineering-grid opacity-35" />
          <div className="absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--accent)]/35 bg-[var(--background)] shadow-[0_0_80px_color-mix(in_srgb,var(--accent)_10%,transparent)]">
            <div className="text-center">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.19em] text-[var(--text-tertiary)]">Core</p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.035em] text-[var(--text-primary)]">System Integration</p>
            </div>
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 size-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--border-strong)]"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 size-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)]"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          />

          {personal.focusAreas.map((area, index) => {
            const angle = (index / personal.focusAreas.length) * Math.PI * 2 - Math.PI / 2
            const x = 50 + Math.cos(angle) * 39
            const y = 50 + Math.sin(angle) * 37

            return (
              <motion.button
                key={area.name}
                type="button"
                className="group absolute w-44 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] p-4 text-left shadow-[var(--shadow-card)] backdrop-blur-xl transition hover:z-10 hover:-translate-y-[calc(50%+4px)] hover:border-[var(--accent)]/45 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{ left: `${x}%`, top: `${y}%` }}
                whileHover={reduceMotion ? undefined : { scale: 1.035 }}
              >
                <span className="mb-3 block size-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
                <span className="block text-sm font-semibold tracking-[-0.02em] text-[var(--text-primary)]">{area.name}</span>
                <span className="mt-2 hidden text-xs leading-5 text-[var(--text-secondary)] group-hover:block group-focus:block">
                  {area.description}
                </span>
              </motion.button>
            )
          })}
        </div>

        <div className="grid gap-3 md:hidden">
          {personal.focusAreas.map((area, index) => (
            <Reveal key={area.name} delay={index * 0.04} className="technical-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full border border-[var(--border)] font-mono text-[0.62rem] text-[var(--accent)]">
                  0{index + 1}
                </span>
                <h3 className="font-semibold tracking-[-0.025em] text-[var(--text-primary)]">{area.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{area.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
