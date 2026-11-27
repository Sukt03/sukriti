import { folders, site, socialLinks } from '../data/content'
import FolderIcon from './FolderIcon'
import SocialIcon from './SocialIcon'

function Portrait() {
  return <div className="rise relative mx-auto aspect-square w-[min(56vw,230px)] lg:w-auto lg:h-[min(38vh,350px)]" style={{ animationDelay: '150ms' }}>
    <div className="orbit-slow absolute -inset-5 rounded-full border border-dashed border-purple/25" aria-hidden="true"/>
    <div className="absolute -inset-2 rounded-full border border-pink/30" aria-hidden="true"/>
    <img src={site.hero.portraitSrc} alt={site.hero.portraitAlt} className="relative h-full w-full rounded-full object-cover object-[50%_35%] shadow-[0_30px_80px_rgb(0_0_0/0.55)] ring-1 ring-white/10"/>
  </div>
}

export default function Home({ onOpen, hidden }) {
  return <div className="home-glow grain relative flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden" inert={hidden ? '' : undefined} aria-hidden={hidden || undefined}>
    <header className="section-shell relative z-10 flex items-center justify-between py-5">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline font-display text-sm text-purpleDeep" aria-label={site.brand}>{site.monogram}</span>
      <div className="flex items-center gap-2">
        {socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener'} aria-label={link.label} title={link.label} className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-inkSoft transition-colors hover:border-pink/60 hover:text-ink"><SocialIcon name={link.icon}/></a>)}
        {site.cvHref && <a href={site.cvHref} target="_blank" rel="noopener" className="ml-1 inline-flex h-10 items-center gap-2 rounded-full bg-pink px-4 font-mono text-xs font-medium text-paper transition-colors hover:bg-pinkDeep"><FolderIcon name="download" className="h-4 w-4"/>CV</a>}
      </div>
    </header>

    <main className="section-shell relative z-10 grid flex-1 items-center gap-10 py-6 lg:grid-cols-[minmax(0,1.25fr)_auto] lg:gap-16 lg:py-0">
      <div className="order-2 lg:order-1">
        <p className="rise mb-5 font-mono text-xs uppercase tracking-[0.18em] text-pinkDeep">{site.hero.role}</p>
        <h1 className="rise mb-5 font-display text-[clamp(2.8rem,6.4vw,6.5rem)] font-medium leading-[0.95] tracking-tight text-purpleDeep" style={{ animationDelay: '80ms' }}>{site.hero.name}</h1>
        <p className="rise mb-3 max-w-xl text-[clamp(1.05rem,1.4vw,1.35rem)] leading-snug text-ink" style={{ animationDelay: '160ms' }}>{site.hero.focus}</p>
        <p className="rise max-w-xl font-display text-lg italic text-inkSoft" style={{ animationDelay: '220ms' }}>“{site.hero.lede}”</p>
      </div>
      <div className="order-1 lg:order-2"><Portrait/></div>
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
