import { site, socialLinks } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import SocialIcon from './SocialIcon'

const nodes = [
  [52, 48, 7], [134, 24, 4], [200, 72, 5], [278, 38, 4],
  [332, 104, 7], [246, 142, 4], [130, 130, 6], [54, 164, 4],
]

const edges = [[0, 1], [0, 6], [1, 2], [2, 3], [2, 6], [2, 5], [3, 4], [4, 5], [5, 6], [6, 7]]

function ResearchVisual({ reducedMotion }) {
  return <div className="relative mx-auto aspect-square w-full max-w-[340px]" aria-hidden="false">
    <div className={`absolute inset-[3%] rounded-full border border-dashed border-purple/25 ${reducedMotion ? '' : 'orbit-slow'}`}/>
    <div className={`absolute inset-[10%] rounded-full border border-dashed border-pink/20 ${reducedMotion ? '' : 'orbit-reverse'}`}/>
    <div className="absolute inset-[15%] z-10 overflow-hidden rounded-full border-4 border-paper shadow-[0_18px_60px_rgba(92,59,112,0.22)] ring-1 ring-purple/20">
      <img src={site.hero.portraitSrc} alt={site.hero.portraitAlt} className="h-full w-full -rotate-90 object-cover object-center"/>
    </div>
    <svg viewBox="0 0 380 210" role="img" aria-label={site.hero.visualLabel} className="absolute inset-0 h-full w-full overflow-visible">
      <defs><linearGradient id="research-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8B5FA3"/><stop offset="1" stopColor="#D4527E"/></linearGradient></defs>
      <g stroke="url(#research-gradient)" strokeWidth="1.2" opacity="0.35">{edges.map(([a, b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}/>)}</g>
      <g fill="#FBF3F7" stroke="url(#research-gradient)" strokeWidth="2">{nodes.map(([x, y, r], index) => <circle key={index} cx={x} cy={y} r={r} className={reducedMotion ? '' : 'network-node'}/>)}</g>
    </svg>
  </div>
}

export default function Hero() {
  const reducedMotion = useReducedMotion()
  return <section className="relative overflow-hidden px-5 pb-14 pt-14 sm:px-10 sm:pb-20 sm:pt-20"><div className="absolute -left-24 top-4 h-72 w-72 rounded-full bg-purple/5 blur-3xl"/><div className="relative grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]"><div className="max-w-3xl"><h1 className="mb-6 font-display text-5xl font-medium leading-none text-purpleDeep sm:text-7xl lg:text-8xl">{site.hero.name}</h1><div className="mb-6 h-px w-24 bg-gradient-to-r from-purple to-pink"/><p className="mb-8 max-w-2xl text-base leading-7 text-inkSoft sm:text-lg">{site.hero.lede}</p><div className="flex flex-wrap gap-3">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener'} className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-paper/70 px-3.5 py-2 font-mono text-xs text-purpleDeep hover:border-purple hover:bg-card"><span className="grid h-7 w-7 place-items-center rounded-full bg-card text-pinkDeep"><SocialIcon name={link.icon}/></span>{link.label}</a>)}</div></div><ResearchVisual reducedMotion={reducedMotion}/></div></section>
}
