import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  keywords: string
  canonical?: string
  ogImage?: string
  type?: string
}

export default function SEOHead({ title, description, keywords, canonical, ogImage, type = 'website' }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | HMorix`
    
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', `${title} | HMorix`, true)
    setMeta('og:description', description, true)
    setMeta('og:type', type, true)
    setMeta('og:url', `https://hmorix.com${canonical || ''}`, true)
    if (ogImage) setMeta('og:image', ogImage, true)
    setMeta('twitter:title', `${title} | HMorix`, true)
    setMeta('twitter:description', description, true)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = `https://hmorix.com${canonical}`
    }
  }, [title, description, keywords, canonical, ogImage, type])

  return null
}
