import type { ExperienceEntry } from '../types/portfolio'

export const experience: ExperienceEntry[] = [
  {
    id: 'independent-engineering-projects',
    organization: 'Independent Engineering Projects',
    role: 'Product Designer & Developer',
    location: 'Clemson, South Carolina',
    dates: 'Ongoing',
    summary:
      'Designing technical products that translate physical-system complexity into clear software workflows.',
    accomplishments: [
      'Developing AV Production Designer as a modular planning environment for room layouts, equipment, wiring, cable routes, and technical documentation.',
      'Structuring project content and system data so new equipment, workflows, and case studies can be added without redesigning the interface.',
      'Exploring camera-assisted, automation, and operational dashboard concepts with explicit boundaries between concepts, prototypes, and validated results.',
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'System Design', 'Technical UX'],
    published: true,
  },
  {
    id: 'clemson-robotics-project',
    organization: 'Clemson University Engineering Project Team',
    role: 'Robotics & Automation Project Contributor',
    location: 'Clemson, South Carolina',
    dates: 'Current',
    summary:
      'Contributing to a developing industrial automation project centered on robot handling, computer vision, calibration, and production-line integration.',
    accomplishments: [
      'Helping define a system architecture that moves from camera input to object localization, coordinate transformation, robot motion, and placement verification.',
      'Preparing to work through calibration, robot programming, sensing, and integration constraints with the engineering team.',
      'Documenting the project as work progresses so planned features are not presented as completed outcomes.',
    ],
    technologies: ['TM Robot', 'Computer Vision', 'Calibration', 'Coordinate Systems', 'Automation'],
    published: true,
  },
  {
    id: 'community-live-production',
    organization: 'Community Event Production',
    role: 'AV Systems Design & Technical Operations',
    location: 'South Carolina and event sites',
    dates: 'Ongoing',
    summary:
      'Planning and operating portable live-production systems across audio, video, wireless, networking, and control.',
    accomplishments: [
      'Developing repeatable signal-flow, cable-verification, routing, and troubleshooting practices for complex event systems.',
      'Integrating digital audio, wireless microphones, video switching, streaming, overlays, monitoring, and network control into one operating workflow.',
      'Designing portable rack, patching, and documentation approaches intended to make deployment clearer for the entire crew.',
    ],
    technologies: ['Midas', 'Sennheiser EW-DX', 'ATEM', 'OBS', 'Companion', 'Networking'],
    published: true,
  },
]
