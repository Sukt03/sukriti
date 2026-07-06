const logoPath = (file) => `${import.meta.env.BASE_URL}logos/${file}`
const logos = {
  ACS: logoPath('acs-publications.png'),
  IJCAI: logoPath('ijcai-ecai-2026.png'),
  CIKM: logoPath('cikm-2026.png'),
  ICIP: logoPath('icip-2026.png'),
  IEEE: logoPath('ieee.png'),
  WCCI: logoPath('ieee.png'),
  ICETCI: logoPath('ieee.png'),
}

export default function LogoBadge({ mark, label, compact = false }) {
  const src = logos[mark]
  return <span className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-purple/20 bg-white/80 shadow-sm ${src ? compact ? 'h-10 w-20 p-1.5' : 'h-14 w-24 p-2' : compact ? 'h-8 min-w-8 px-1.5 text-[0.62rem]' : 'h-11 min-w-11 px-2 text-xs'}`} title={label} aria-label={label}>{src ? <img src={src} alt="" className="max-h-full max-w-full object-contain" loading="lazy"/> : <span className="font-mono font-medium tracking-tight text-purpleDeep">{mark}</span>}</span>
}
