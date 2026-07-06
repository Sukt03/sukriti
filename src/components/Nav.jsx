import { useEffect, useState } from 'react'
import { site } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Nav() {
  const [active, setActive] = useState('publications')
  const reducedMotion = useReducedMotion()
  useEffect(() => {
    const sections = site.nav.map(({ href }) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <header className="sticky top-0 z-50 border-b border-hairline bg-paper/95 py-4 backdrop-blur-sm"><div className="section-shell flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><span className="font-display text-lg font-medium">{site.brand}</span><nav aria-label={site.navLabel} className="flex max-w-full gap-5 overflow-x-auto pb-1 font-sans text-sm text-inkSoft sm:gap-6 sm:pb-0">{site.nav.map(({ label, href }) => { const id = href.slice(1); return <a key={href} href={href} aria-current={active === id ? 'location' : undefined} className={`relative whitespace-nowrap py-1 hover:text-purpleDeep ${reducedMotion ? '' : 'transition-colors duration-200'} after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-pink after:content-[''] ${reducedMotion ? '' : 'after:transition-transform after:duration-200'} ${active === id ? 'text-purpleDeep after:scale-x-100' : 'after:scale-x-0'}`}>{label}</a> })}</nav></div></header>
}
