import { motion, useReducedMotion } from 'framer-motion'
import type { Skill } from '../../types/portfolio'

interface SkillBarProps {
  skill: Skill
}

export const SkillBar = ({ skill }: SkillBarProps) => {
  const reduceMotion = useReducedMotion()
  const hasRating = typeof skill.percentage === 'number' && skill.percentage > 0

  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-secondary)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{skill.name}</p>
          {skill.context ? <p className="mt-1 text-xs leading-5 text-[var(--text-tertiary)]">{skill.context}</p> : null}
        </div>
        {hasRating ? (
          <div className="text-right">
            <p className="font-mono text-xs font-semibold text-[var(--accent)]">{skill.percentage}%</p>
            {skill.level ? <p className="mt-1 text-[0.62rem] text-[var(--text-tertiary)]">{skill.level}</p> : null}
          </div>
        ) : null}
      </div>

      {hasRating ? (
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]"
            initial={reduceMotion ? { scaleX: skill.percentage! / 100 } : { scaleX: 0 }}
            whileInView={{ scaleX: skill.percentage! / 100 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-2" aria-label="No public proficiency rating configured">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span key={dot} className="h-1 flex-1 rounded-full bg-[var(--border)] transition group-hover:bg-[var(--border-strong)]" />
          ))}
        </div>
      )}
    </div>
  )
}
