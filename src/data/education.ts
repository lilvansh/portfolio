import type { EducationEntry } from '../types/portfolio'

export const education: EducationEntry[] = [
  {
    id: 'clemson-university',
    institution: 'Clemson University',
    program: 'Computer Engineering',
    degree: 'Undergraduate program',
    location: 'Clemson, South Carolina',
    // TODO: Vans — add your expected graduation date when you are ready to publish it.
    dates: '',
    status: 'Junior',
    summary:
      'Building foundations across software, digital systems, circuits, computer organization, mathematics, physics, and hands-on engineering design.',
    coursework: [
      'Computer Organization',
      'Digital Logic',
      'Circuits',
      'Calculus III',
      'Physics',
      'Programming',
    ],
    // Add only organizations and awards you want to publish.
    organizations: [],
    awards: [],
    published: true,
  },
]
