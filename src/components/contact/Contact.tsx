import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../../data/personal'
import { withBase } from '../../lib/assets'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

const iconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const

export const Contact = () => {
  const enabledSocials = personal.socialLinks.filter((link) => link.enabled && link.href)
  const hasContact = Boolean(personal.email || enabledSocials.length > 0 || personal.resume.available)

  return (
    <Section id="contact" labelledBy="contact-heading" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 engineering-grid opacity-25" />
      <div className="absolute -left-48 bottom-0 size-[34rem] rounded-full bg-[var(--accent)]/[0.08] blur-[130px]" />
      <div className="absolute -right-52 top-0 size-[36rem] rounded-full bg-[var(--accent-secondary)]/[0.08] blur-[135px]" />

      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">12 / Contact</p>
        <h2 id="contact-heading" className="mt-7 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.075em] text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
          {personal.contactHeadline}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-secondary)]">{personal.contactBody}</p>

        {hasContact ? (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {personal.email ? (
              <a href={`mailto:${personal.email}`} className="contact-button contact-button-primary">
                <Mail size={18} /> Email Vans <ArrowUpRight size={15} />
              </a>
            ) : null}
            {enabledSocials.map((link) => {
              const Icon = iconByLabel[link.label as keyof typeof iconByLabel]
              if (!Icon) return null
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-button">
                  <Icon size={18} /> {link.label} <ArrowUpRight size={15} />
                </a>
              )
            })}
            {personal.resume.available ? (
              <a href={withBase(personal.resume.path)} target="_blank" rel="noreferrer" className="contact-button">
                <FileText size={18} /> Resume <ArrowUpRight size={15} />
              </a>
            ) : null}
          </div>
        ) : null}

        <a href="#top" className="mt-12 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-tertiary)] transition hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
          Return to system start ↑
        </a>
      </Reveal>
    </Section>
  )
}
