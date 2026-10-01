import { useEffect } from 'react'
import { personal } from '../../data/personal'
import { withBase } from '../../lib/assets'

export const SeoMeta = () => {
  useEffect(() => {
    const configuredUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
    const canonicalUrl = configuredUrl
      ? `${configuredUrl}${import.meta.env.BASE_URL}`
      : (window.location.href.split('#')[0] ?? window.location.href)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl

    const setMeta = (selector: string, attribute: 'name' | 'property', value: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(selector)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, value)
        document.head.append(meta)
      }
      meta.content = content
    }

    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', new URL(withBase('og-image.png'), window.location.origin).href)

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personal.name,
      jobTitle: personal.role,
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: personal.school,
      },
      knowsAbout: personal.specialties,
      url: canonicalUrl,
    }

    let script = document.querySelector<HTMLScriptElement>('script[data-portfolio-structured-data]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.portfolioStructuredData = 'true'
      document.head.append(script)
    }
    script.textContent = JSON.stringify(structuredData)
  }, [])

  return null
}
