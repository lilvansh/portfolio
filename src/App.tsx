import { lazy, Suspense, useCallback, useState } from 'react'
import { About } from './components/about/About'
import { CurrentFocus } from './components/about/CurrentFocus'
import { Certifications } from './components/certifications/Certifications'
import { Contact } from './components/contact/Contact'
import { Education } from './components/education/Education'
import { ExperienceTimeline } from './components/experience/ExperienceTimeline'
import { Hero } from './components/hero/Hero'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { SeoMeta } from './components/layout/SeoMeta'
import { Leadership } from './components/leadership/Leadership'
import { Philosophy } from './components/philosophy/Philosophy'
import { FeaturedProjects } from './components/projects/FeaturedProjects'
import { ProjectExplorer } from './components/projects/ProjectExplorer'
import { Skills } from './components/skills/Skills'
import { EngineeringTerminal } from './components/terminal/EngineeringTerminal'
import type { Project } from './types/portfolio'

const LazyProjectModal = lazy(() =>
  import('./components/projects/ProjectModal').then((module) => ({ default: module.ProjectModal })),
)

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const closeProject = useCallback(() => setSelectedProject(null), [])

  return (
    <>
      <SeoMeta />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <CurrentFocus />
        <FeaturedProjects onOpenProject={setSelectedProject} />
        <ProjectExplorer onOpenProject={setSelectedProject} />
        <ExperienceTimeline />
        <Skills />
        <Education />
        <Certifications />
        <Leadership />
        <EngineeringTerminal />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <LazyProjectModal project={selectedProject} onClose={closeProject} />
      </Suspense>
    </>
  )
}

export default App
