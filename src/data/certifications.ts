import type { Certification } from '../types/portfolio'

// Keep entries unpublished until a specific certification, provider, and status are confirmed.
// Example shape:
// {
//   id: 'example',
//   name: 'Certification Name',
//   organization: 'Issuing Organization',
//   status: 'In Progress',
//   skills: ['Skill'],
//   published: true,
// }
export const certifications: Certification[] = []
