import { BookOpen, Cpu, GraduationCap, MapPin } from 'lucide-react'
import { education } from '../../data/education'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'

const courseworkIcons = [Cpu, BookOpen, GraduationCap]

export const Education = () => {
  const entries = education.filter((entry) => entry.published)
  if (entries.length === 0) return null

  return (
    <Section id="education" labelledBy="education-heading" className="border-y border-[var(--border)] bg-[var(--background-elevated)]">
      <SectionHeading
        number="07"
        eyebrow="Education"
        title="Academic foundations for hardware, software, and system-level engineering."
        id="education-heading"
      />

      <div className="grid gap-6">
        {entries.map((entry) => (
          <Reveal key={entry.id}>
            <article className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
              <div className="absolute inset-0 engineering-grid opacity-20" />
              <div className="absolute -right-28 -top-28 size-80 rounded-full bg-[var(--accent)]/[0.07] blur-[110px]" />
              <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
                <div>
                  <div className="mb-7 grid size-14 place-items-center rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] text-[var(--accent)]">
                    <GraduationCap size={26} strokeWidth={1.6} />
                  </div>
                  <p className="spec-label">Technical credential</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] sm:text-4xl">{entry.institution}</h3>
                  <p className="mt-3 text-lg font-medium text-[var(--accent)]">{entry.program}</p>
                  {entry.degree ? <p className="mt-2 text-sm text-[var(--text-secondary)]">{entry.degree}</p> : null}
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--text-tertiary)]">
                    {entry.status ? <span>{entry.status}</span> : null}
                    {entry.dates ? <span>{entry.dates}</span> : null}
                    {entry.location ? (
                      <span className="inline-flex items-center gap-1.5"><MapPin size={12} />{entry.location}</span>
                    ) : null}
                  </div>
                  <p className="mt-7 text-sm leading-7 text-[var(--text-secondary)]">{entry.summary}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
                    <p className="spec-label">Current & relevant coursework</p>
                    <span className="font-mono text-[0.58rem] text-[var(--text-tertiary)]">CURRICULUM / LIVE</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {entry.coursework.map((course, index) => {
                      const Icon = courseworkIcons[index % courseworkIcons.length]!
                      return (
                        <div key={course} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] p-4">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[var(--border)] text-[var(--accent)]">
                            <Icon size={17} strokeWidth={1.7} />
                          </span>
                          <span className="text-sm font-medium text-[var(--text-primary)]">{course}</span>
                        </div>
                      )
                    })}
                  </div>

                  {entry.organizations && entry.organizations.length > 0 ? (
                    <div className="mt-7">
                      <p className="spec-label">Organizations</p>
                      <p className="mt-3 text-sm text-[var(--text-secondary)]">{entry.organizations.join(' · ')}</p>
                    </div>
                  ) : null}

                  {entry.awards && entry.awards.length > 0 ? (
                    <div className="mt-7">
                      <p className="spec-label">Awards</p>
                      <p className="mt-3 text-sm text-[var(--text-secondary)]">{entry.awards.join(' · ')}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
