import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experience } from '../../data/experience'
import { withBase } from '../../lib/assets'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

export const ExperienceTimeline = () => {
  const reduceMotion = useReducedMotion()
  const entries = experience.filter((entry) => entry.published)
  if (entries.length === 0) return null

  return (
    <Section id="experience" labelledBy="experience-heading" className="border-y border-[var(--border)] bg-[var(--background-elevated)]">
      <SectionHeading
        number="05"
        eyebrow="Experience"
        title="Technical experience framed around systems, decisions, and responsibility."
        description="The timeline includes engineering project work, independent product development, and live system operations."
        id="experience-heading"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-[var(--border)] md:left-[11.5rem]" aria-hidden="true">
          <motion.div
            className="h-full origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid gap-10 md:gap-14">
          {entries.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.06}>
              <article className="relative grid gap-5 pl-14 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10 md:pl-0">
                <div className="md:pt-6 md:text-right">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--accent)]">{entry.dates}</p>
                  {entry.location ? (
                    <p className="mt-2 hidden items-center justify-end gap-1.5 text-xs text-[var(--text-tertiary)] md:flex">
                      <MapPin size={12} />
                      {entry.location}
                    </p>
                  ) : null}
                </div>

                <span className="absolute left-[0.79rem] top-5 grid size-3 place-items-center rounded-full border-2 border-[var(--background-elevated)] bg-[var(--accent)] shadow-[0_0_0_5px_var(--background-elevated),0_0_0_6px_var(--border)] md:left-[10.96rem] md:top-7" aria-hidden="true" />

                <div className="technical-card overflow-hidden p-5 sm:p-7 md:p-8">
                  <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      {entry.logo ? (
                        <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] p-2">
                          <img src={withBase(entry.logo)} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
                        </span>
                      ) : null}
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{entry.role}</h3>
                        <p className="mt-2 text-sm font-medium text-[var(--accent)]">{entry.organization}</p>
                      </div>
                    </div>
                    {entry.location ? (
                      <p className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] md:hidden">
                        <MapPin size={12} />
                        {entry.location}
                      </p>
                    ) : null}
                  </div>

                  <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">{entry.summary}</p>
                  <ul className="mt-6 grid gap-3">
                    {entry.accomplishments.map((accomplishment) => (
                      <li key={accomplishment} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]">
                        <span className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {entry.technologies.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
