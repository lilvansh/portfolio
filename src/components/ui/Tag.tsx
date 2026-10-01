import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TagProps {
  children: ReactNode
  className?: string
}

export const Tag = ({ children, className }: TagProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-glass)] px-3 py-1.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[var(--text-secondary)] backdrop-blur-sm',
      className,
    )}
  >
    {children}
  </span>
)
