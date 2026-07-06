import { research, sectionMeta } from '../data/content'
import LogoBadge from './LogoBadge'
import NetworkDecoration from './NetworkDecoration'
import ResearchIcon from './ResearchIcon'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

const focusIcons = ['brain', 'signal', 'spark', 'map']
const serviceMarks = { 'IEEE ICETCI 2026': 'ICETCI', 'CIKM 2026': 'CIKM', 'ICIP 2026': 'ICIP', 'IEEE WCCI 2026 / IJCNN': 'WCCI' }
const talkMarks = { 'Osmania University': 'OU', 'ACE Engineering College': 'ACE' }

export default function Research() {
  return <section id="research" className="section-shell relative scroll-mt-28 overflow-hidden py-10 sm:py-12"><NetworkDecoration position="right"/>
    <div className="relative"><SectionHeading {...sectionMeta.research}/>
    <div className="mb-6 flex max-w-5xl items-center gap-4 rounded-xl border-l-2 border-pink bg-card/60 px-5 py-4 text-sm leading-6 text-inkSoft"><LogoBadge mark="MU" label="Mahindra University"/><p>{research.supervision.prefix} <a href={research.supervision.href} target="_blank" rel="noopener" className="font-medium text-purpleDeep underline decoration-purple/30 underline-offset-4 hover:decoration-pink">{research.supervision.name}</a>, {research.supervision.suffix}</p></div>
    <div className="mb-10 grid max-w-6xl gap-4 text-base leading-7 text-inkSoft lg:grid-cols-2 lg:gap-10">{research.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    <h3 className="mb-4 font-display text-xl text-purpleDeep">{research.focusTitle}</h3>
    <div className="mb-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{research.focus.map((item, index) => <RevealItem key={item.title} index={index}><article className="h-full rounded-xl border border-hairline bg-card/60 p-5"><span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-paper text-pinkDeep shadow-sm"><ResearchIcon name={focusIcons[index]}/></span><h4 className="mb-2 font-medium text-purpleDeep">{item.title}</h4><p className="text-sm leading-6 text-inkSoft">{item.description}</p></article></RevealItem>)}</div>
    <div className="grid gap-8 border-y border-hairline py-7 md:grid-cols-3">
      <div><h3 className="mb-3 font-display text-lg text-purpleDeep">{research.serviceTitle}</h3><ul className="space-y-2 text-xs text-inkSoft">{research.service.map((item) => <li key={item} className="flex items-center gap-2"><LogoBadge compact mark={serviceMarks[item]} label={item}/><span className="font-mono">{item}</span></li>)}</ul></div>
      <div><h3 className="mb-3 font-display text-lg text-purpleDeep">{research.talksTitle}</h3><ul className="space-y-3 text-sm text-inkSoft">{research.talks.map((item) => <li key={item.title} className="flex items-center gap-3"><LogoBadge compact mark={talkMarks[item.venue]} label={item.venue}/><span><span className="block font-medium text-ink">{item.title}</span>{item.venue}</span></li>)}</ul></div>
      <div><h3 className="mb-3 font-display text-lg text-purpleDeep">{research.openWorkTitle}</h3><ul className="space-y-3 text-sm">{research.openWork.map((item) => <li key={item.label} className="flex items-center gap-3">{item.label.includes('IIIT') && <LogoBadge compact mark="IIITH" label="IIIT Hyderabad"/>}<a href={item.href} target="_blank" rel="noopener" className="text-purpleDeep underline decoration-purple/30 underline-offset-4 hover:decoration-pink">{item.label}</a></li>)}</ul></div>
    </div>
    </div></section>
}
