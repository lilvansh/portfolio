import { Reveal } from '../ui/Reveal'

interface SectionHeadingProps {
  number: string
  eyebrow: string
  title: string
  description?: string
  id?: string
  align?: 'left' | 'center'
}

export const SectionHeading = ({
  number,
  eyebrow,
  title,
  description,
  id,
  align = 'left',
}: SectionHeadingProps) => (
  <Reveal
    className={`mb-12 max-w-3xl md:mb-16 ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    <div className={`mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <span className="section-number">{number}</span>
      <span className="h-px w-10 bg-[var(--accent)]/70" aria-hidden="true" />
      <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        {eyebrow}
      </p>
    </div>
    <h2 id={id} className="text-balance text-3xl font-semibold tracking-[-0.045em] text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
        {description}
      </p>
    ) : null}
  </Reveal>
)
