import { experience, sectionMeta } from '../data/content'
import LogoBadge from './LogoBadge'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return <section id="experience" className="section-shell scroll-mt-28 py-10 sm:py-12"><SectionHeading {...sectionMeta.experience}/><div>{experience.map((item, index) => { const iiit = item.title.includes('IIIT Hyderabad'); return <RevealItem key={item.title} index={index} className="border-t border-hairline last:border-b"><article className="flex flex-col gap-3 py-5 sm:flex-row sm:gap-5"><LogoBadge mark={iiit ? 'IIITH' : 'M'} label={iiit ? 'IIIT Hyderabad' : 'Magnocode Tech'}/><div className="shrink-0 font-mono text-xs text-inkSoft sm:w-36">{item.when}</div><div className="max-w-5xl"><h3 className="mb-1.5 font-medium">{item.title}</h3><p className="text-sm leading-6 text-inkSoft">{item.description}</p></div></article></RevealItem> })}</div></section>
}
