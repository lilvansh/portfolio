import type { LeadershipEntry } from '../types/portfolio'

export const leadership: LeadershipEntry[] = [
  {
    id: 'production-system-readiness',
    title: 'Production System Readiness',
    context: 'Community event technology',
    challenge:
      'Complex portable systems must be assembled by a team, verified quickly, and operated reliably under live-event pressure.',
    responsibility:
      'Translate equipment, cable, routing, control, and monitoring knowledge into a clearer setup and troubleshooting workflow.',
    contribution:
      'Developing rack plans, signal maps, checklists, control ideas, and verification habits that help the crew understand the system—not just connect it.',
    image: 'images/organizations/production-readiness.svg',
    imageAlt: 'Abstract rack, checklist, and signal-path illustration.',
    technologies: ['AV Systems', 'Networking', 'Documentation', 'Troubleshooting'],
    published: true,
  },
  {
    id: 'engineering-product-direction',
    title: 'Engineering Product Direction',
    context: 'Independent product development',
    challenge:
      'A broad engineering tool can become an unmanageable collection of features without a coherent system model and roadmap.',
    responsibility:
      'Define the product architecture, prioritize workflows, and keep physical-system requirements connected to interface decisions.',
    contribution:
      'Organizing AV Production Designer around reusable technical data, progressive capability releases, and a consistent vision for layout, wiring, and deployment.',
    image: 'images/organizations/product-direction.svg',
    imageAlt: 'Abstract roadmap connecting system architecture to product releases.',
    technologies: ['Product Architecture', 'Technical UX', 'Roadmapping', 'System Design'],
    published: true,
  },
]
