import { publications, sectionMeta } from '../data/content'
import LogoBadge from './LogoBadge'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

function venueMark(venue) {
  if (venue.startsWith('ACS')) return 'ACS'
  if (venue.includes('IJCAI')) return 'IJCAI'
  return 'IEEE'
}

export default function Publications() {
  return <section id="publications" className="section-shell scroll-mt-28 py-10 sm:py-12"><SectionHeading {...sectionMeta.publications}/><div>{publications.map((pub, index) => <RevealItem key={pub.title} index={index} className="border-t border-hairline last:border-b"><article className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:gap-5"><LogoBadge mark={venueMark(pub.venue)} label={pub.venue}/><div className="max-w-4xl flex-1"><h3 className="mb-1.5 font-medium">{pub.title}</h3><p className="text-sm leading-6 text-inkSoft">{pub.description}</p></div><div className="shrink-0 font-mono text-xs sm:text-right"><span className={`block font-medium ${pub.status === 'Published' ? 'text-[#4A7A4E]' : 'text-amber'}`}>{pub.status}</span><span className="mt-1 block text-inkSoft">{pub.venue}</span>{pub.link && <a className="mt-1 block text-purpleDeep hover:underline" href={pub.link} target="_blank" rel="noopener">{pub.linkLabel}</a>}</div></article></RevealItem>)}</div></section>
}
