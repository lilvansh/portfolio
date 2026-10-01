import { CornerDownLeft, TerminalSquare } from 'lucide-react'
import { type ChangeEvent, type FormEvent, type ReactNode, useMemo, useRef, useState } from 'react'
import { experience } from '../../data/experience'
import { personal } from '../../data/personal'
import { featuredProjects } from '../../data/projects'
import { skills } from '../../data/skills'
import { withBase } from '../../lib/assets'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'

const commands = ['help', 'about', 'projects', 'skills', 'experience', 'resume', 'contact'] as const
type Command = (typeof commands)[number]

interface TerminalEntry {
  id: number
  command: string
  output: ReactNode
}

export const EngineeringTerminal = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      id: 0,
      command: 'help',
      output: 'Available commands: about, projects, skills, experience, resume, contact, clear',
    },
  ])
  const counter = useRef(1)

  const skillCategories = useMemo(
    () => Array.from(new Set(skills.filter((skill) => skill.published).map((skill) => skill.category))),
    [],
  )

  const getOutput = (command: string): ReactNode => {
    switch (command as Command) {
      case 'help':
        return 'Available commands: about, projects, skills, experience, resume, contact, clear'
      case 'about':
        return `${personal.name} — ${personal.role} at ${personal.school}. ${personal.tagline}`
      case 'projects':
        return featuredProjects.map((project) => `${project.title} [${project.status}]`).join(' · ')
      case 'skills':
        return `Capability groups: ${skillCategories.join(' · ')}`
      case 'experience':
        return experience.filter((entry) => entry.published).map((entry) => `${entry.role} — ${entry.organization}`).join(' · ')
      case 'resume':
        return personal.resume.available ? (
          <a href={withBase(personal.resume.path)} target="_blank" rel="noreferrer" className="terminal-link">
            Open Vans-Patel-Resume.pdf ↗
          </a>
        ) : (
          'Resume file is not published yet. Add it in /public/resume and enable it in personal.ts.'
        )
      case 'contact': {
        const links = personal.socialLinks.filter((link) => link.enabled && link.href)
        if (!personal.email && links.length === 0) return 'Public contact channels have not been enabled yet.'
        return (
          <span className="inline-flex flex-wrap gap-x-4 gap-y-2">
            {personal.email ? <a href={`mailto:${personal.email}`} className="terminal-link">Email</a> : null}
            {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="terminal-link">{link.label}</a>)}
          </span>
        )
      }
      default:
        return `Command not found: ${command}. Type “help” to view available commands.`
    }
  }

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase()
    if (!command) return
    if (command === 'clear') {
      setHistory([])
      setInput('')
      return
    }
    setHistory((current) => [...current, { id: counter.current++, command, output: getOutput(command) }])
    setInput('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    runCommand(input)
  }

  return (
    <Section labelledBy="terminal-heading" className="section-shell-tight border-y border-[var(--border)] bg-[var(--background-elevated)]">
      <SectionHeading
        number="10"
        eyebrow="Terminal easter egg"
        title="A compact command layer for curious visitors."
        description="Every command is also clickable—typing is optional."
        id="terminal-heading"
      />

      <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-strong)] bg-[var(--terminal-background)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[var(--status-danger)]" />
            <span className="size-2.5 rounded-full bg-[var(--status-warning)]" />
            <span className="size-2.5 rounded-full bg-[var(--status-issued)]" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--selection-text)_45%,transparent)]">
            <TerminalSquare size={13} /> vans@portfolio
          </div>
          <span className="w-10" />
        </div>

        <div className="min-h-[23rem] p-5 font-mono text-sm leading-7 text-[color-mix(in_srgb,var(--selection-text)_72%,transparent)] sm:p-7">
          <p className="text-[color-mix(in_srgb,var(--selection-text)_40%,transparent)]">Interactive engineering shell · static client-side interface</p>
          <div className="mt-5 grid gap-5" aria-live="polite">
            {history.map((entry) => (
              <div key={entry.id}>
                <p><span className="text-[var(--accent)]">vans@portfolio</span><span className="text-[color-mix(in_srgb,var(--selection-text)_40%,transparent)]">:~$</span> <span className="text-[var(--selection-text)]">{entry.command}</span></p>
                <div className="mt-1 text-[color-mix(in_srgb,var(--selection-text)_62%,transparent)]">{entry.output}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-2">
            <label htmlFor="terminal-input" className="shrink-0"><span className="text-[var(--accent)]">vans@portfolio</span><span className="text-[color-mix(in_srgb,var(--selection-text)_40%,transparent)]">:~$</span></label>
            <input
              id="terminal-input"
              value={input}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
              className="min-w-0 flex-1 border-0 bg-transparent text-[var(--selection-text)] caret-[var(--accent)] outline-none placeholder:text-[color-mix(in_srgb,var(--selection-text)_25%,transparent)]"
              placeholder="type a command"
            />
            <button type="submit" aria-label="Run command" className="grid size-8 place-items-center rounded-lg border border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] text-[color-mix(in_srgb,var(--selection-text)_50%,transparent)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
              <CornerDownLeft size={14} />
            </button>
          </form>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] pt-5">
            {commands.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => runCommand(command)}
                className="rounded-full border border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] px-3 py-1.5 font-mono text-[0.62rem] text-[color-mix(in_srgb,var(--selection-text)_55%,transparent)] transition hover:border-[var(--accent)]/45 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {command}
              </button>
            ))}
            <button type="button" onClick={() => runCommand('clear')} className="rounded-full border border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] px-3 py-1.5 font-mono text-[0.62rem] text-[color-mix(in_srgb,var(--selection-text)_35%,transparent)] transition hover:border-[color-mix(in_srgb,var(--selection-text)_25%,transparent)] hover:text-[color-mix(in_srgb,var(--selection-text)_70%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]">
              clear
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
