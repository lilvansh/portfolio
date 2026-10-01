import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return undefined

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const mostVisible = visibleEntries[0]
        if (mostVisible?.target.id) setActiveSection(mostVisible.target.id)
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0, 0.08, 0.2, 0.4, 0.6],
      },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
