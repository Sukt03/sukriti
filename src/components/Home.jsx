import { folders, site, socialLinks } from '../data/content'
import FeaturedRotator from './FeaturedRotator'
import FolderIcon from './FolderIcon'
import SocialIcon from './SocialIcon'

export default function Home({ onOpen, hidden }) {
  return <div className="home-glow grain relative flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden" inert={hidden ? '' : undefined} aria-hidden={hidden || undefined}>
    <header className="section-shell relative z-10 flex items-center justify-between py-5">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline font-display text-sm text-purpleDeep" aria-label={site.brand}>{site.monogram}</span>
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener'} aria-label={link.label} title={link.label} className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-inkSoft transition-colors hover:border-pink/60 hover:text-ink"><SocialIcon name={link.icon}/></a>)}
      </div>
    </header>

    <main className="section-shell relative z-10 grid flex-1 content-center items-center gap-10 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-0">
      <div className="max-w-3xl">
        <div className="rise flex items-center gap-5 sm:gap-7">
          <img src={site.hero.portraitSrc} alt={site.hero.portraitAlt} className="h-24 w-24 shrink-0 rounded-full object-cover object-[50%_35%] ring-1 ring-white/15 sm:h-32 sm:w-32"/>
          <div>
            <h1 className="font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-tight tracking-tight text-purpleDeep">{site.hero.name}</h1>
            <p className="mt-1 text-[0.95rem] text-inkSoft">{site.hero.role}</p>
          </div>
        </div>
        <div className="rise mt-7 space-y-3 text-[clamp(1.05rem,1.25vw,1.2rem)] leading-relaxed text-ink/90" style={{ animationDelay: '120ms' }}>
          {site.hero.bio.map((line) => <p key={line}>{line}</p>)}
        </div>
        <div className="rise mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[0.95rem] font-medium" style={{ animationDelay: '200ms' }}>
          <a href="#/publications" className="text-pinkDeep underline-offset-4 hover:underline">Read my papers →</a>
          <a href="#/blogs/lore-of-the-experiments" className="text-ink/80 underline-offset-4 hover:text-ink hover:underline">See them as comics →</a>
        </div>
      </div>
      <FeaturedRotator/>
    </main>

    <nav aria-label="Sections" className="section-shell relative z-10 pb-6 pt-6 lg:pb-8">
      <ul className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
        {folders.map((folder, index) => <li key={folder.id} className="rise" style={{ animationDelay: `${300 + index * 60}ms` }}>
          <button type="button" data-folder={folder.id} onClick={(event) => onOpen(folder.id, event.currentTarget)} className="folder group flex h-full w-full flex-col items-start gap-3 rounded-xl rounded-tl-none border border-hairline bg-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-pink/55 hover:shadow-[0_18px_40px_rgb(0_0_0/0.45)]">
            <span className="flex w-full items-center justify-between"><span className="text-pinkDeep transition-colors group-hover:text-pink"><FolderIcon name={folder.icon}/></span><span className="font-mono text-[0.68rem] text-inkSoft">0{index + 1}</span></span>
            <span><span className="block font-medium text-ink">{folder.label}</span><span className="mt-0.5 block text-xs leading-5 text-inkSoft">{folder.blurb}</span></span>
          </button>
        </li>)}
      </ul>
      <p className="mt-5 text-right font-mono text-[0.68rem] text-inkSoft/70">{site.footer}</p>
    </nav>
  </div>
}
