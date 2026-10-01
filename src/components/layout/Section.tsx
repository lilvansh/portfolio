import type { ElementType, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  as?: ElementType
  labelledBy?: string
}

export const Section = ({
  id,
  children,
  className,
  as: Component = 'section',
  labelledBy,
}: SectionProps) => (
  <Component id={id} aria-labelledby={labelledBy} className={cn('section-shell', className)}>
    {children}
  </Component>
)
