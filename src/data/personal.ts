import type { PersonalData } from '../types/portfolio'

export const personal: PersonalData = {
  name: 'Vans Patel',
  role: 'Computer Engineering Student',
  school: 'Clemson University',
  location: 'South Carolina',
  eyebrow: 'Computer Engineering · Clemson University',
  tagline: 'I build systems that connect software, hardware, automation, and real-world engineering.',
  introduction:
    'I am a Computer Engineering student interested in the space where code meets physical systems. My work spans robotics, automation, computer vision, embedded technology, software products, and professional AV systems—always with an emphasis on making complex systems easier to understand, deploy, and improve.',
  specialties: [
    'Robotics',
    'Automation',
    'Computer Vision',
    'Embedded Systems',
    'Software',
    'AV Technology',
  ],
  chips: [
    'Computer Engineering',
    'Clemson University',
    'Automation',
    'Robotics',
    'Embedded Systems',
    'Software Development',
  ],
  // TODO: Vans — add your public portfolio email before launch.
  email: '',
  socialLinks: [
    // TODO: Vans — add your actual profile URLs, then set enabled to true.
    { label: 'GitHub', href: '', enabled: false },
    { label: 'LinkedIn', href: '', enabled: false },
  ],
  resume: {
    path: 'resume/Vans-Patel-Resume.pdf',
    // Set to true only after replacing public/resume/Vans-Patel-Resume.pdf.
    available: false,
  },
  // Add only statistics you are comfortable publishing. Empty entries are never rendered.
  quickStats: [],
  focusAreas: [
    {
      name: 'Robotics',
      description: 'Connecting sensing, control, calibration, and physical motion into dependable systems.',
    },
    {
      name: 'Industrial Automation',
      description: 'Designing repeatable workflows around robots, sensors, conveyors, and control logic.',
    },
    {
      name: 'Computer Vision',
      description: 'Using cameras and image processing to help systems understand real-world objects and position.',
    },
    {
      name: 'Embedded Systems',
      description: 'Exploring the hardware–software boundary through circuits, digital logic, sensors, and controllers.',
    },
    {
      name: 'Software Products',
      description: 'Turning complex technical workflows into clear, useful, maintainable interfaces.',
    },
    {
      name: 'System Integration',
      description: 'Making devices, networks, signal paths, software, and people operate as one system.',
    },
  ],
  philosophyTitle: 'I like building systems that leave the screen.',
  philosophyBody:
    'Software becomes more interesting when it interacts with cameras, robots, sensors, audio systems, machines, and the physical world. I care about the full system: how it is modeled, connected, tested, operated, and improved.',
  contactHeadline: "Let's engineer something useful.",
  contactBody:
    'I am interested in opportunities where software, hardware, automation, and real-world operations come together.',
}
