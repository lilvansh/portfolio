import { ArrowDownRight } from 'lucide-react'
import { personal } from '../../data/personal'
import { withBase } from '../../lib/assets'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'
import { QuickStats } from './QuickStats'

export const About = () => (
  <Section id="about" labelledBy="about-heading" className="relative overflow-hidden">
    <div className="blueprint-cross blueprint-cross-left" aria-hidden="true" />
    <SectionHeading
      number="02"
      eyebrow="About"
      title="Engineering across the boundary between code and the physical world."
      description="A recruiter-friendly overview first; deeper technical detail is available throughout each project story."
      id="about-heading"
    />

    <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
      <Reveal className="relative">
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius-xl)-0.55rem)] bg-[var(--surface-secondary)]">
            <img
              src={withBase('images/profile/profile-placeholder.svg')}
              alt="Illustrated placeholder for Vans Patel's profile photograph."
              className="h-full w-full object-cover"
              loading="lazy"
              width="900"
              height="1125"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between rounded-2xl border border-[color-mix(in_srgb,var(--selection-text)_10%,transparent)] bg-[var(--overlay-background)] p-4 backdrop-blur-lg">
              <div>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--selection-text)_55%,transparent)]">Vans Patel</p>
                <p className="mt-1 text-sm font-medium text-[var(--selection-text)]">Computer Engineering · Clemson</p>
              </div>
              <ArrowDownRight size={19} className="text-[var(--accent)]" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 -right-5 -z-10 h-44 w-44 rounded-full bg-[var(--accent)]/[0.09] blur-3xl" />
      </Reveal>

      <div>
        <Reveal>
          <p className="text-pretty text-xl leading-9 tracking-[-0.02em] text-[var(--text-primary)] sm:text-2xl sm:leading-10">
            {personal.introduction}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-7 flex flex-wrap gap-2">
          {personal.chips.map((chip) => (
            <Tag key={chip}>{chip}</Tag>
          ))}
        </Reveal>

        <Reveal delay={0.14} className="mt-9 grid gap-4 sm:grid-cols-2">
          <div className="technical-card p-5">
            <p className="spec-label">Operating principle</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              Understand the full system before optimizing one component: inputs, processing, interfaces, outputs, failure modes, and the people operating it.
            </p>
          </div>
          <div className="technical-card p-5">
            <p className="spec-label">Current direction</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              Growing from coursework and hands-on systems work into deeper robotics, automation, embedded control, and product engineering.
            </p>
          </div>
        </Reveal>
      </div>
    </div>

    <QuickStats stats={personal.quickStats} />
  </Section>
)
