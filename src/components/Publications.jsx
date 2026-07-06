import { publications, sectionMeta } from '../data/content'
import LogoBadge from './LogoBadge'
import NetworkDecoration from './NetworkDecoration'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

const venueLogos = [
  { mark: 'ACS', label: 'ACS Publications' },
  { mark: 'IJCAI', label: 'IJCAI–ECAI 2026' },
  { mark: 'WCCI', label: 'IEEE WCCI 2026' },
  { mark: 'ICETCI', label: 'IEEE ICETCI 2026' },
]

function venueMark(venue) {
  if (venue.startsWith('ACS')) return 'ACS'
  if (venue.includes('IJCAI')) return 'IJCAI'
  if (venue.includes('WCCI')) return 'WCCI'
  return 'ICETCI'
}

export default function Publications() {
  return <section id="publications" className="section-shell relative scroll-mt-28 overflow-hidden py-10 sm:py-12"><NetworkDecoration position="left"/><div className="relative">
    <SectionHeading {...sectionMeta.publications}/>
    <div className="mb-7 rounded-xl border border-hairline bg-card/40 p-4">
      <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-wider text-inkSoft">Publication venues</p>
      <div className="flex flex-wrap items-center gap-3">{venueLogos.map((venue) => <LogoBadge key={venue.mark} {...venue}/>)}</div>
    </div>
    <div>{publications.map((pub, index) => <RevealItem key={pub.title} index={index} className="border-t border-hairline last:border-b"><article className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:gap-5"><LogoBadge mark={venueMark(pub.venue)} label={pub.venue}/><div className="max-w-4xl flex-1"><h3 className="mb-1.5 font-medium">{pub.title}</h3><p className="text-sm leading-6 text-inkSoft">{pub.description}</p></div><div className="shrink-0 font-mono text-xs sm:text-right"><span className={`block font-medium ${pub.status === 'Published' ? 'text-[#4A7A4E]' : 'text-amber'}`}>{pub.status}</span><span className="mt-1 block text-inkSoft">{pub.venue}</span>{pub.link && <a className="mt-1 block text-purpleDeep hover:underline" href={pub.link} target="_blank" rel="noopener">{pub.linkLabel}</a>}</div></article></RevealItem>)}</div>
  </div></section>
}
