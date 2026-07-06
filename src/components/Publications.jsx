import { publications, sectionMeta } from '../data/content'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

export default function Publications() {
  const meta = sectionMeta.publications
  return <section id="publications" className="scroll-mt-28 px-5 py-10 sm:px-10 sm:py-12"><SectionHeading {...meta}/><div>{publications.map((pub, index) => <RevealItem key={pub.title} index={index} className="border-t border-hairline last:border-b"><article className="flex flex-col gap-4 py-5 sm:flex-row sm:justify-between sm:gap-8"><div className="max-w-2xl"><h3 className="mb-1.5 font-medium">{pub.title}</h3><p className="text-sm leading-6 text-inkSoft">{pub.description}</p></div><div className="shrink-0 font-mono text-xs sm:text-right"><span className={`block font-medium ${pub.status === 'Published' ? 'text-[#4A7A4E]' : 'text-amber'}`}>{pub.status}</span><span className="mt-1 block text-inkSoft">{pub.venue}</span>{pub.link && <a className="mt-1 block text-purpleDeep hover:underline" href={pub.link} target="_blank" rel="noopener">{pub.linkLabel}</a>}</div></article></RevealItem>)}</div></section>
}
