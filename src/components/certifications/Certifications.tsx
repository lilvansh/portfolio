import { CheckCircle2, Clock3, ExternalLink, MapPin } from 'lucide-react'
import { certifications } from '../../data/certifications'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { cn } from '../../lib/cn'
import { Reveal } from '../ui/Reveal'

const statusIcon = {
  Issued: CheckCircle2,
  'In Progress': Clock3,
  Planned: MapPin,
} as const

const statusStyle = {
  Issued: 'border-[color-mix(in_srgb,var(--status-issued)_25%,transparent)] bg-[color-mix(in_srgb,var(--status-issued)_7%,transparent)] text-[var(--status-issued)]',
  'In Progress': 'border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] text-[var(--accent)]',
  Planned: 'border-[var(--accent-secondary)]/30 bg-[var(--accent-secondary)]/[0.08] text-[var(--accent-secondary)]',
} as const

export const Certifications = () => {
  const entries = certifications.filter((certification) => certification.published)
  if (entries.length === 0) return null

  return (
    <Section labelledBy="certifications-heading" className="section-shell-tight pt-0">
      <SectionHeading
        number="08"
        eyebrow="Certifications"
        title="Credentials and focused technical development."
        id="certifications-heading"
      />
      <div className="flex snap-x gap-4 overflow-x-auto pb-5">
        {entries.map((certification, index) => {
          const Icon = statusIcon[certification.status]
          return (
            <Reveal key={certification.id} delay={index * 0.04} className="min-w-[19rem] max-w-sm flex-1 snap-start">
              <article className="h-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className={cn('grid size-10 place-items-center rounded-xl border', statusStyle[certification.status])}><Icon size={18} /></span>
                  <span className={cn('rounded-full border px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em]', statusStyle[certification.status])}>{certification.status}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[var(--text-primary)]">{certification.name}</h3>
                <p className="mt-2 text-sm text-[var(--accent)]">{certification.organization}</p>
                {certification.date ? <p className="mt-4 text-xs text-[var(--text-tertiary)]">{certification.date}</p> : null}
                {certification.credentialId ? (
                  <p className="mt-2 font-mono text-[0.62rem] text-[var(--text-tertiary)]">Credential ID · {certification.credentialId}</p>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  {certification.skills.map((skill) => <span key={skill} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-secondary)]">{skill}</span>)}
                </div>
                {certification.credentialUrl ? (
                  <a href={certification.credentialUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    View credential <ExternalLink size={14} />
                  </a>
                ) : null}
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
