import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FileText, Github, Linkedin, Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { personal } from '../../data/personal'
import { useActiveSection } from '../../hooks/useActiveSection'
import { withBase } from '../../lib/assets'
import { cn } from '../../lib/cn'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Contact', id: 'contact' },
]

const iconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)
  const enabledSocials = personal.socialLinks.filter((link) => link.enabled && link.href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[70] border-b transition-[background-color,border-color,backdrop-filter] duration-300',
          scrolled || menuOpen
            ? 'border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur-2xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-[4.6rem] max-w-[var(--content-max)] items-center justify-between gap-5 px-5 sm:px-7 lg:px-10">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            onClick={closeMenu}
          >
            <span className="grid size-8 place-items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-glass)] font-mono text-[0.68rem] font-semibold text-[var(--accent)] transition-transform group-hover:rotate-6">
              VP
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-primary)] sm:inline">
              Vans Patel
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-2 text-[0.72rem] font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
                    active ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]',
                  )}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-x-3 -bottom-[0.22rem] h-px bg-[var(--accent)]"
                      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex">
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
                    className="grid size-9 place-items-center rounded-full text-[var(--text-secondary)] transition hover:bg-[var(--surface)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </a>
                )
              })}
            </div>

            {personal.resume.available ? (
              <a
                href={withBase(personal.resume.path)}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-glass)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]/55 hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:inline-flex"
              >
                <FileText size={15} />
                Resume
              </a>
            ) : null}

            <button
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-glass)] text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-[60] flex flex-col bg-[var(--background)] px-6 pb-8 pt-28 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="group flex items-baseline justify-between border-b border-[var(--border)] py-4 text-3xl font-medium tracking-[-0.04em] text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.035 }}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[0.65rem] tracking-[0.18em] text-[var(--text-tertiary)] transition group-hover:text-[var(--accent)]">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {enabledSocials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                >
                  {link.label}
                </a>
              ))}
              {personal.resume.available ? (
                <a
                  href={withBase(personal.resume.path)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent-ink)]"
                >
                  Resume
                </a>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
