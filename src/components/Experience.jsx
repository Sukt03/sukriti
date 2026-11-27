import { achievements, education, experience, sectionMeta } from '../data/content'
import LogoBadge from './LogoBadge'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return <section id="experience" className="section-shell relative py-8 sm:py-10"><div className="relative">
    <SectionHeading {...sectionMeta.experience}/>
    <div>{experience.map((item, index) => <RevealItem key={item.title} index={index} className="border-t border-hairline last:border-b"><article className="flex flex-col gap-3 py-5 sm:flex-row sm:gap-5"><LogoBadge mark={item.mark} label={item.title.split(', ').slice(1).join(', ')}/><div className="shrink-0 font-mono text-xs text-inkSoft sm:w-36">{item.when}</div><div className="max-w-5xl"><h3 className="mb-1.5 font-medium">{item.title}</h3><p className="text-sm leading-6 text-inkSoft">{item.description}</p></div></article></RevealItem>)}</div>
    <h3 className="mb-4 mt-10 font-display text-xl text-purpleDeep">Education & leadership</h3>
    <RevealItem index={0} className="max-w-4xl">
      <article className="rounded-2xl border border-hairline bg-card/50 p-6 sm:p-8">
        <div className="divide-y divide-hairline border-b border-hairline">{education.map((item) => <div key={item.school} className="flex flex-col gap-5 py-5 first:pt-0 sm:flex-row sm:items-center">
          <LogoBadge mark={item.mark} label={item.school}/>
          <div><p className="mb-1 font-mono text-xs text-pinkDeep">{item.affiliation}</p><h4 className="font-display text-2xl text-purpleDeep">{item.school}</h4><p className="mt-2 text-sm text-inkSoft">{item.qualification}</p><p className="mt-2 font-mono text-xs text-pinkDeep">{item.when}</p></div>
        </div>)}</div>
        <h4 className="mb-4 mt-6 font-display text-xl text-purpleDeep">Achievements & leadership</h4>
        <div className="grid gap-3 sm:grid-cols-2">{achievements.map((item) => <div key={item.title} className="rounded-xl border border-hairline bg-paper/60 p-4"><span className="font-mono text-[0.68rem] text-pinkDeep">{item.year}</span><h5 className="mb-1 mt-2 font-medium text-purpleDeep">{item.title}</h5><p className="text-sm leading-5 text-inkSoft">{item.detail}</p></div>)}</div>
      </article>
    </RevealItem>
  </div></section>
}
