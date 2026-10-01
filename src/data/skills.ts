import type { CapabilityRow, Skill } from '../types/portfolio'

// Proficiency fields are intentionally omitted until Vans chooses values he is comfortable publishing.
// Add percentage (1–100), level, and years to any item; the interface will reveal the animated rating automatically.
export const skills: Skill[] = [
  { name: 'C', category: 'Programming', context: 'Coursework and systems fundamentals', published: true },
  { name: 'C++', category: 'Programming', context: 'Engineering and application development', published: true },
  { name: 'Python', category: 'Programming', context: 'Automation and computer-vision workflows', published: true },
  { name: 'Java', category: 'Programming', context: 'Object-oriented programming', published: true },
  { name: 'JavaScript', category: 'Programming', context: 'Interactive web applications', published: true },
  { name: 'TypeScript', category: 'Programming', context: 'Typed product development', published: true },

  { name: 'Microcontrollers', category: 'Hardware / Embedded', context: 'Hardware–software interfaces', published: true },
  { name: 'Arduino', category: 'Hardware / Embedded', context: 'Sensors and physical prototypes', published: true },
  { name: 'Digital Logic', category: 'Hardware / Embedded', context: 'Logic design and simulation', published: true },
  { name: 'Circuit Design', category: 'Hardware / Embedded', context: 'Circuit analysis and lab work', published: true },
  { name: 'Sensors', category: 'Hardware / Embedded', context: 'Input, measurement, and integration', published: true },
  { name: 'Embedded Systems', category: 'Hardware / Embedded', context: 'Current area of development', published: true },

  { name: 'PLC Concepts', category: 'Automation / Robotics', context: 'Industrial controls foundation', published: true },
  { name: 'Computer Vision', category: 'Automation / Robotics', context: 'Detection, positioning, and workflow design', published: true },
  { name: 'Robot Programming', category: 'Automation / Robotics', context: 'Developing through team project work', published: true },
  { name: 'Industrial Automation', category: 'Automation / Robotics', context: 'Robot, sensor, and process integration', published: true },
  { name: 'Calibration', category: 'Automation / Robotics', context: 'Coordinate alignment and repeatability', published: true },

  { name: 'React', category: 'Software', context: 'Component-driven interfaces', published: true },
  { name: 'Next.js', category: 'Software', context: 'Full product interface development', published: true },
  { name: 'Node.js', category: 'Software', context: 'JavaScript tooling and services', published: true },
  { name: 'Git', category: 'Software', context: 'Version control', published: true },
  { name: 'GitHub', category: 'Software', context: 'Repository and project workflow', published: true },
  { name: 'Linux', category: 'Software', context: 'Development environment and systems tools', published: true },

  { name: 'MATLAB', category: 'Engineering Tools', context: 'Engineering computation', published: true },
  { name: 'Logisim Evolution', category: 'Engineering Tools', context: 'Digital logic simulation', published: true },
  { name: 'CAD Concepts', category: 'Engineering Tools', context: 'Physical-system planning', published: true },
  { name: 'Oscilloscope', category: 'Engineering Tools', context: 'Lab measurement', published: true },
  { name: 'Multimeter', category: 'Engineering Tools', context: 'Electrical verification', published: true },
  { name: 'AV Signal Flow', category: 'Engineering Tools', context: 'Audio, video, control, and networking', published: true },
]

export const capabilityColumns = [
  'Software',
  'Hardware',
  'Automation',
  'System Integration',
  'Computer Vision',
  'AV Systems',
] as const

// Dots indicate where documented projects use a capability—not a proficiency score.
export const capabilityRows: CapabilityRow[] = [
  {
    name: 'AV Production Designer',
    capabilities: ['Software', 'Hardware', 'System Integration', 'AV Systems'],
  },
  {
    name: 'Vision-Guided Robotics',
    capabilities: ['Hardware', 'Automation', 'System Integration', 'Computer Vision'],
  },
  {
    name: 'Live Production Systems',
    capabilities: ['Hardware', 'Automation', 'System Integration', 'AV Systems'],
  },
  {
    name: 'Smart Photo Workflow',
    capabilities: ['Software', 'Automation', 'System Integration', 'Computer Vision'],
  },
]
