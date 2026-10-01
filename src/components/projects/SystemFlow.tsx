import type { CSSProperties } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import type { SystemFlowStep } from '../../types/portfolio'

interface SystemFlowProps {
  steps: SystemFlowStep[]
  compact?: boolean
}

export const SystemFlow = ({ steps, compact = false }: SystemFlowProps) => (
  <div className="relative">
    <div className="grid gap-3 md:grid-cols-[repeat(var(--step-count),minmax(0,1fr))] md:items-stretch" style={{ '--step-count': steps.length } as CSSProperties}>
      {steps.map((step, index) => (
        <div key={`${step.label}-${index}`} className="contents">
          <div className={`relative rounded-2xl border border-[var(--border)] bg-[var(--surface-secondary)] ${compact ? 'p-3.5' : 'p-5'}`}>
            <span className="mb-3 block font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[var(--accent)]">
              Stage {String(index + 1).padStart(2, '0')}
            </span>
            <p className="text-sm font-semibold tracking-[-0.02em] text-[var(--text-primary)]">{step.label}</p>
            {step.detail ? <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">{step.detail}</p> : null}
          </div>
          {index < steps.length - 1 ? (
            <div className="grid place-items-center text-[var(--text-tertiary)] md:-mx-1">
              <ArrowDown size={16} className="md:hidden" />
              <ArrowRight size={16} className="hidden md:block" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  </div>
)
