import { achievements, education, experience, sectionMeta } from '../data/content'
import LogoBadge from './LogoBadge'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return <section id="experience" className="section-shell scroll-mt-28 py-10 sm:py-12">
    <SectionHeading {...sectionMeta.experience}/>
    <div>{experience.map((item, index) => { const iiit = item.title.includes('IIIT Hyderabad'); return <RevealItem key={item.title} index={index} className="border-t border-hairline last:border-b"><article className="flex flex-col gap-3 py-5 sm:flex-row sm:gap-5"><LogoBadge mark={iiit ? 'IIITH' : 'M'} label={iiit ? 'IIIT Hyderabad' : 'Magnocode Tech'}/><div className="shrink-0 font-mono text-xs text-inkSoft sm:w-36">{item.when}</div><div className="max-w-5xl"><h3 className="mb-1.5 font-medium">{item.title}</h3><p className="text-sm leading-6 text-inkSoft">{item.description}</p></div></article></RevealItem> })}</div>
    <h3 className="mb-4 mt-10 font-display text-xl text-purpleDeep">Education</h3>
    <div className="grid gap-4 md:grid-cols-2">{education.map((item, index) => <RevealItem key={item.school} index={index}><article className="flex h-full items-center gap-4 rounded-xl border border-hairline bg-card/50 p-5"><LogoBadge mark={item.mark} label={item.school}/><div className="min-w-0"><h4 className="font-medium text-purpleDeep">{item.school}</h4><p className="mt-1 text-sm text-inkSoft">{item.qualification}</p><p className="mt-2 font-mono text-xs text-pinkDeep">{item.when} · {item.detail}</p></div></article></RevealItem>)}</div>
    <h3 className="mb-4 mt-10 font-display text-xl text-purpleDeep">Achievements & leadership</h3>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{achievements.map((item, index) => <RevealItem key={item.title} index={index}><article className="h-full rounded-xl border border-hairline bg-paper p-5"><span className="mb-3 inline-block rounded-full bg-card px-3 py-1 font-mono text-[0.68rem] text-pinkDeep">{item.year}</span><h4 className="mb-2 font-medium text-purpleDeep">{item.title}</h4><p className="text-sm leading-6 text-inkSoft">{item.detail}</p></article></RevealItem>)}</div>
  </section>
}
