import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useRef, type PointerEvent as ReactPointerEvent } from 'react'

const nodes = [
  { x: 11, y: 23, delay: 0.1, label: 'N-01' },
  { x: 28, y: 38, delay: 0.7, label: 'IO-04' },
  { x: 45, y: 18, delay: 1.4, label: 'BUS-A' },
  { x: 67, y: 31, delay: 0.4, label: 'CTRL' },
  { x: 86, y: 17, delay: 1.8, label: 'N-12' },
  { x: 16, y: 68, delay: 1.1, label: 'SENS' },
  { x: 37, y: 81, delay: 2.1, label: '0X2A' },
  { x: 59, y: 64, delay: 1.5, label: 'SYNC' },
  { x: 79, y: 77, delay: 0.9, label: 'OUT-3' },
  { x: 91, y: 53, delay: 2.5, label: 'N-18' },
]

const paths = [
  'M-10 120 H130 V205 H270 V100 H430',
  'M280 -10 V95 H510 V180 H720 V80 H920',
  'M0 390 H165 V300 H360 V430 H540',
  'M470 550 V350 H650 V270 H840 V420 H1010',
  'M1000 150 H840 V215 H705',
  'M-40 520 H130 V460 H280',
]

export const EngineeringBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 70, damping: 24 })
  const y = useSpring(rawY, { stiffness: 70, damping: 24 })

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      onPointerMove={(event: ReactPointerEvent<HTMLDivElement>) => {
        if (reduceMotion || !containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        rawX.set(((event.clientX - rect.left) / rect.width - 0.5) * 16)
        rawY.set(((event.clientY - rect.top) / rect.height - 0.5) * 16)
      }}
      onPointerLeave={() => {
        rawX.set(0)
        rawY.set(0)
      }}
    >
      <div className="absolute inset-0 engineering-grid opacity-[0.34]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/30 to-transparent" />
      <div className="absolute -left-[10%] top-[16%] size-[34rem] rounded-full bg-[var(--accent)]/[0.055] blur-[110px]" />
      <div className="absolute -right-[8%] bottom-[4%] size-[31rem] rounded-full bg-[var(--accent-secondary)]/[0.07] blur-[120px]" />

      <motion.svg
        viewBox="0 0 1000 560"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-70"
        style={reduceMotion ? undefined : { x, y }}
      >
        <defs>
          <linearGradient id="traceGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="0.48" stopColor="var(--border-strong)" stopOpacity="0.46" />
            <stop offset="1" stopColor="var(--accent-secondary)" stopOpacity="0.12" />
          </linearGradient>
          <filter id="nodeGlow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#traceGradient)"
            strokeWidth="1"
            strokeDasharray={index % 2 === 0 ? '4 8' : '1 0'}
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 2.4, delay: index * 0.18, ease: 'easeOut' }}
          />
        ))}

        {nodes.map((node, index) => {
          const cx = (node.x / 100) * 1000
          const cy = (node.y / 100) * 560
          return (
            <g key={node.label} transform={`translate(${cx} ${cy})`}>
              <circle r="7" fill="var(--background)" stroke="var(--border-strong)" strokeWidth="1" />
              <motion.circle
                r="2.6"
                fill={index % 3 === 0 ? 'var(--accent)' : 'var(--accent-secondary)'}
                filter="url(#nodeGlow)"
                animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [0.8, 1.25, 0.8] }}
                transition={{ duration: 3.2, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
              />
              <text
                x="11"
                y="-9"
                fill="var(--text-tertiary)"
                opacity="0.48"
                fontSize="8"
                fontFamily="IBM Plex Mono, monospace"
                letterSpacing="1"
              >
                {node.label}
              </text>
            </g>
          )
        })}

        {!reduceMotion ? (
          <>
            <circle r="3.5" fill="var(--accent)" filter="url(#nodeGlow)">
              <animateMotion dur="7s" repeatCount="indefinite" path={paths[0]} />
            </circle>
            <circle r="3" fill="var(--accent-secondary)" filter="url(#nodeGlow)">
              <animateMotion dur="8.5s" begin="1.4s" repeatCount="indefinite" path={paths[3]} />
            </circle>
          </>
        ) : null}
      </motion.svg>

      <div className="absolute bottom-9 left-7 hidden font-mono text-[0.56rem] uppercase tracking-[0.22em] text-[var(--text-tertiary)]/45 md:block">
        Coordinate plane · system layer 01 · live model
      </div>
      <div className="absolute right-7 top-28 hidden text-right font-mono text-[0.56rem] uppercase tracking-[0.22em] text-[var(--text-tertiary)]/45 md:block">
        HW ↔ SW ↔ CONTROL
        <br />
        TRACE STATUS / NOMINAL
      </div>
    </div>
  )
}
