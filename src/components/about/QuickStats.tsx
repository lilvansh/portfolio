import type { QuickStat } from '../../types/portfolio'
import { Reveal } from '../ui/Reveal'

interface QuickStatsProps {
  stats: QuickStat[]
}

export const QuickStats = ({ stats }: QuickStatsProps) => {
  const visibleStats = stats.filter((stat) => stat.value.trim())
  if (visibleStats.length === 0) return null

  return (
    <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--border)] lg:grid-cols-4">
      {visibleStats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.05} className="bg-[var(--surface)] p-5 md:p-6">
          <p className="font-mono text-2xl font-medium tracking-[-0.04em] text-[var(--text-primary)] md:text-3xl">
            {stat.value}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)]">
            {stat.label}
          </p>
          {stat.detail ? <p className="mt-1 text-xs text-[var(--text-tertiary)]">{stat.detail}</p> : null}
        </Reveal>
      ))}
    </div>
  )
}
