import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface MagneticLinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  ariaLabel?: string
}

export const MagneticLink = ({
  href,
  children,
  className,
  external = false,
  ariaLabel,
}: MagneticLinkProps) => {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20 })
  const springY = useSpring(y, { stiffness: 260, damping: 20 })

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={cn('inline-flex will-change-transform', className)}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </motion.a>
  )
}
