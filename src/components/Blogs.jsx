import { blogs, sectionMeta } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

export default function Blogs() {
  const reducedMotion = useReducedMotion()
  return <section id="blogs" className="section-shell scroll-mt-28 py-10 sm:py-12"><SectionHeading {...sectionMeta.blogs}/><div className="grid gap-5 sm:grid-cols-2">{blogs.map((post, index) => <RevealItem key={post.title} index={index}><article className={`h-full rounded-xl border border-transparent bg-card p-5 ${reducedMotion ? '' : 'transition-all duration-200 hover:-translate-y-0.5 hover:border-purple'}`}><div className="mb-2 font-mono text-[0.7rem] text-inkSoft">{post.date}</div><h3 className="mb-2 font-medium text-purpleDeep">{post.title}</h3><p className="mb-4 text-sm leading-6 text-inkSoft">{post.description}</p><div className="mb-4 font-mono text-[0.7rem] text-pinkDeep">{post.tags}</div><a href={post.href} className="font-mono text-xs text-purpleDeep underline decoration-purple/30 underline-offset-4 hover:decoration-pink">{post.linkLabel}</a></article></RevealItem>)}</div></section>
}
