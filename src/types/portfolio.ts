export type ProjectStatus = 'Active' | 'In Development' | 'Prototype' | 'Concept' | 'Completed'

export interface SocialLink {
  label: string
  href: string
  enabled: boolean
}

export interface ResumeConfig {
  path: string
  available: boolean
}

export interface QuickStat {
  label: string
  value: string
  detail?: string
}

export interface FocusArea {
  name: string
  description: string
}

export interface PersonalData {
  name: string
  role: string
  school: string
  location: string
  eyebrow: string
  tagline: string
  introduction: string
  specialties: string[]
  chips: string[]
  email: string
  socialLinks: SocialLink[]
  resume: ResumeConfig
  quickStats: QuickStat[]
  focusAreas: FocusArea[]
  philosophyTitle: string
  philosophyBody: string
  contactHeadline: string
  contactBody: string
}

export interface ProjectMedia {
  src: string
  alt: string
  caption?: string
}

export interface SystemFlowStep {
  label: string
  detail?: string
}

export interface Project {
  id: string
  title: string
  shortTitle?: string
  subtitle: string
  year: string
  categories: string[]
  featured: boolean
  published: boolean
  status: ProjectStatus
  statusNote?: string
  shortDescription: string
  description: string
  problem?: string
  solution?: string
  role?: string
  challenges?: string[]
  implementation?: string[]
  results?: string[]
  learnings?: string[]
  future?: string[]
  technologies: string[]
  skills?: string[]
  coverImage: string
  coverAlt: string
  images?: ProjectMedia[]
  video?: string
  github?: string
  demo?: string
  externalLink?: string
  systemFlow?: SystemFlowStep[]
  connections?: string[]
  accent: 'orange' | 'purple' | 'steel'
}

export interface ExperienceEntry {
  id: string
  organization: string
  role: string
  location?: string
  dates: string
  summary: string
  accomplishments: string[]
  technologies: string[]
  logo?: string
  published: boolean
}

export type SkillLevel = 'Beginner' | 'Developing' | 'Intermediate' | 'Proficient' | 'Advanced'

export interface Skill {
  name: string
  category: string
  percentage?: number
  level?: SkillLevel
  years?: number
  projects?: string[]
  context?: string
  published: boolean
}

export interface CapabilityRow {
  name: string
  capabilities: string[]
}

export interface EducationEntry {
  id: string
  institution: string
  program: string
  degree?: string
  location?: string
  dates?: string
  status?: string
  summary: string
  coursework: string[]
  organizations?: string[]
  awards?: string[]
  published: boolean
}

export type CertificationStatus = 'Issued' | 'In Progress' | 'Planned'

export interface Certification {
  id: string
  name: string
  organization: string
  date?: string
  credentialId?: string
  credentialUrl?: string
  skills: string[]
  status: CertificationStatus
  published: boolean
}

export interface LeadershipEntry {
  id: string
  title: string
  context: string
  challenge: string
  responsibility: string
  scale?: string
  contribution: string
  image: string
  imageAlt: string
  technologies: string[]
  published: boolean
}
