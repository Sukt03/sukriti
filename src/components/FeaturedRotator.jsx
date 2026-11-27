import { useEffect, useState } from 'react'
import { blogShelves } from '../data/content'

// Featured card on the home page: shows each blog post in turn.
// Pauses on hover/focus, can be picked with the dots, and stays still for reduced motion.
const INTERVAL_MS = 5200
const posts = blogShelves.flatMap((shelf) => shelf.posts.map((post) => ({ ...post, shelf: shelf.title })))

const reducedMotion = () => {
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false }
}

export default function FeaturedRotator() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || posts.length < 2 || reducedMotion()) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % posts.length), INTERVAL_MS)
    return () => clearTimeout(id)
  }, [index, paused])

  if (!posts.length) return null
  const post = posts[index]

  return <div className="rise w-full" style={{ animationDelay: '260ms' }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div className="group relative overflow-hidden rounded-2xl border border-hairline bg-card transition-colors hover:border-pink/50">
      <div key={index} className="featured-in p-6 sm:p-7" aria-live="polite">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-pinkDeep">Featured · {post.shelf}</p>
        <h2 className="mt-3 font-display text-[1.6rem] font-semibold leading-snug text-purpleDeep">
          <a href={post.href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-pink">{post.title}</a>
        </h2>
        <p className="mt-2 line-clamp-3 text-[0.98rem] leading-relaxed text-inkSoft">{post.description}</p>
        <p className="mt-4 font-mono text-[0.7rem] text-inkSoft">{post.date}</p>
        <span className="mt-4 inline-block text-[0.95rem] font-medium text-ink group-hover:text-pinkDeep">{post.linkLabel}</span>
      </div>
      {/* progress line for the current slide */}
      {!paused && posts.length > 1 && <span key={`bar-${index}`} className="featured-bar absolute bottom-0 left-0 h-[2px] bg-pink/70" style={{ animationDuration: `${INTERVAL_MS}ms` }} aria-hidden="true"/>}
    </div>
    {posts.length > 1 && <div className="mt-3 flex items-center gap-2" role="group" aria-label="Choose featured post">
      {posts.map((p, i) => <button key={p.title} type="button" onClick={() => setIndex(i)} aria-label={`Show ${p.title}`} aria-current={i === index} className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-pink' : 'w-1.5 bg-inkSoft/40 hover:bg-inkSoft'}`}/>)}
    </div>}
  </div>
}
