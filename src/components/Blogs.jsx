import { blogShelves, sectionMeta } from '../data/content'
import { navigate } from '../hooks/useHashRoute'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

export default function Blogs({ shelfId }) {
  const active = blogShelves.find((shelf) => shelf.id === shelfId) || blogShelves[0]
  return <section id="blogs" className="section-shell py-8 sm:py-10">
    <SectionHeading {...sectionMeta.blogs}/>
    <div role="tablist" aria-label="Blog shelves" className="mb-8 grid gap-3 md:grid-cols-3">
      {blogShelves.map((shelf) => {
        const on = shelf.id === active.id
        return <button key={shelf.id} type="button" role="tab" aria-selected={on} onClick={() => navigate(`blogs/${shelf.id}`)} className={`rounded-xl border p-4 text-left transition-colors ${on ? 'border-pink/60 bg-card' : 'border-hairline hover:border-purple/50'}`}>
          <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-pinkDeep">{shelf.kicker}</span>
          <span className="mt-1 block font-display text-xl text-purpleDeep">{shelf.title}</span>
          <span className="mt-1 block font-mono text-[0.68rem] text-inkSoft">{shelf.posts.length ? `${shelf.posts.length} post${shelf.posts.length > 1 ? 's' : ''}` : 'Coming soon'}</span>
        </button>
      })}
    </div>
    <div role="tabpanel" aria-label={active.title}>
      <p className="mb-6 max-w-2xl text-inkSoft">{active.description}</p>
      {active.posts.length === 0
        ? <div className="rounded-xl border border-dashed border-hairline p-10 text-center"><p className="font-display text-lg text-purpleDeep">The first post is on its way.</p><p className="mt-1 text-sm text-inkSoft">Check back soon.</p></div>
        : <div className="grid gap-5 sm:grid-cols-2">{active.posts.map((post, index) => <RevealItem key={post.title} index={index}><article className="group relative h-full cursor-pointer select-none rounded-xl border border-hairline bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink/50">
            <div className="mb-2 font-mono text-[0.7rem] text-inkSoft">{post.date}</div>
            <h3 className="mb-2 font-display text-xl text-purpleDeep">{post.title}</h3>
            <p className="mb-4 text-sm leading-6 text-inkSoft">{post.description}</p>
            <div className="mb-4 font-mono text-[0.7rem] text-pinkDeep">{post.tags}</div>
            <div className="flex flex-wrap gap-4">
              <a href={post.href} aria-label={`${post.linkLabel.replace(/\s*→$/, '')}: ${post.title}`} className="font-mono text-xs text-ink underline decoration-pink/50 underline-offset-4 after:absolute after:inset-0 after:rounded-xl after:content-[''] group-hover:decoration-pink focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-pink">{post.linkLabel}</a>
              {post.extraLinks?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener" className="relative z-10 font-mono text-xs text-ink underline decoration-pink/50 underline-offset-4 hover:decoration-pink">{link.label}</a>)}
            </div>
          </article></RevealItem>)}</div>}
    </div>
  </section>
}
