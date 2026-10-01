import { ArrowUpRight } from 'lucide-react'
import { leadership } from '../../data/leadership'
import { withBase } from '../../lib/assets'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

export const Leadership = () => {
  const entries = leadership.filter((entry) => entry.published)
  if (entries.length === 0) return null

  return (
    <Section id="leadership" labelledBy="leadership-heading">
      <SectionHeading
        number="09"
        eyebrow="Beyond the classroom"
        title="Engineering leadership means making the whole team more capable."
        description="These stories focus on responsibility, system clarity, and the work required to make technical ideas deployable."
        id="leadership-heading"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {entries.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 0.07}>
            <article className="group h-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-[var(--border-strong)]">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-secondary)]">
                <div className="absolute inset-0 engineering-grid opacity-25" />
                <img
                  src={withBase(entry.image)}
                  alt={entry.imageAlt}
                  className="relative h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                  width="1200"
                  height="675"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] bg-[var(--overlay-background)] p-4 text-[var(--selection-text)] backdrop-blur-xl">
                  <div>
                    <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--selection-text)_55%,transparent)]">Context</p>
                    <p className="mt-1 text-sm font-medium">{entry.context}</p>
                  </div>
                  <ArrowUpRight size={18} className="text-[var(--accent)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{entry.title}</h3>
                <div className="mt-7 grid gap-6">
                  <div>
                    <p className="spec-label">Challenge</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{entry.challenge}</p>
                  </div>
                  <div>
                    <p className="spec-label">Responsibility</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{entry.responsibility}</p>
                  </div>
                  {entry.scale ? (
                    <div>
                      <p className="spec-label">Scale</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{entry.scale}</p>
                    </div>
                  ) : null}
                  <div>
                    <p className="spec-label">Engineering contribution</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{entry.contribution}</p>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {entry.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
