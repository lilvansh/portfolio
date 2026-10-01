import { skills } from '../../data/skills'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { CapabilityMatrix } from './CapabilityMatrix'
import { SkillBar } from './SkillBar'

export const Skills = () => {
  const publishedSkills = skills.filter((skill) => skill.published)
  const categories = Array.from(new Set(publishedSkills.map((skill) => skill.category)))

  return (
    <Section id="skills" labelledBy="skills-heading" className="relative overflow-hidden">
      <div className="absolute -right-28 top-48 -z-10 size-[30rem] rounded-full bg-[var(--accent-secondary)]/[0.055] blur-[120px]" />
      <SectionHeading
        number="06"
        eyebrow="Engineering skills"
        title="Capabilities organized by how they contribute to a system."
        description="Capabilities are grouped by practical engineering context rather than overstated expertise. Optional proficiency bars appear only for ratings Vans deliberately chooses to publish."
        id="skills-heading"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {categories.map((category, categoryIndex) => (
          <Reveal key={category} delay={categoryIndex * 0.05} className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background-elevated)] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-4 px-1">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text-primary)]">{category}</h3>
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--text-tertiary)]">SYS-{String(categoryIndex + 1).padStart(2, '0')}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {publishedSkills.filter((skill) => skill.category === category).map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <CapabilityMatrix />
    </Section>
  )
}
