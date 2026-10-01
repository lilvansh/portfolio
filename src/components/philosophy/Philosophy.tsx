import { motion, useReducedMotion } from 'framer-motion'
import { personal } from '../../data/personal'
import { Section } from '../layout/Section'

export const Philosophy = () => {
  const reduceMotion = useReducedMotion()
  const words = personal.philosophyTitle.split(' ')

  return (
    <Section className="relative min-h-[72svh] overflow-hidden border-b border-[var(--border)] py-28 sm:py-36 lg:flex lg:items-center">
      <div className="absolute inset-0 engineering-grid opacity-25" />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.06] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mb-8 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">11 / Engineering philosophy</p>
        <h2 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-8xl">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="mr-[0.22em] inline-block"
              initial={reduceMotion ? false : { opacity: 0, y: 45, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : index * 0.045, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.p
          className="mx-auto mt-9 max-w-3xl text-pretty text-lg leading-8 text-[var(--text-secondary)] md:text-xl md:leading-9"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.24 }}
        >
          {personal.philosophyBody}
        </motion.p>
      </div>
    </Section>
  )
}
