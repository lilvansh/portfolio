import { ArrowUpRight } from 'lucide-react'
import { personal } from '../../data/personal'
import { withBase } from '../../lib/assets'

export const Footer = () => {
  const year = new Date().getFullYear()
  const links = personal.socialLinks.filter((link) => link.enabled && link.href)

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background-elevated)]">
      <div className="mx-auto grid max-w-[var(--content-max)] gap-10 px-5 py-10 sm:px-7 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-[var(--border-strong)] font-mono text-xs text-[var(--accent)]">
              VP
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{personal.name}</p>
              <p className="text-xs text-[var(--text-tertiary)]">{personal.role}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--text-tertiary)]">
            Designed and built by Vans Patel. Structured as a data-driven engineering portfolio for continued iteration.
          </p>
        </div>

        <div className="md:text-right">
          <div className="mb-5 flex flex-wrap gap-4 md:justify-end">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
            {personal.email ? (
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                Email
                <ArrowUpRight size={14} />
              </a>
            ) : null}
            {personal.resume.available ? (
              <a
                href={withBase(personal.resume.path)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                Resume
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
          <div className="flex items-center justify-between gap-5 border-t border-[var(--border)] pt-5 md:justify-end">
            <span className="font-mono text-[0.68rem] tracking-[0.12em] text-[var(--text-tertiary)]">
              © {year} {personal.name}
            </span>
            <span className="font-mono text-[0.68rem] text-[var(--accent)]">&lt;/portfolio&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
