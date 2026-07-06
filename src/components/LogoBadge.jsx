const logos = {
  ACS: 'https://pubs.acs.org/pb-assets/ux3/pubs-logo-481x82-1523435513963.png',
  IJCAI: 'https://2026.ijcai.org/wp-content/uploads/2025/09/IJCAI_Bremen_Logo-300x115.png',
  CIKM: 'https://cikm2026.diag.uniroma1.it/wp-content/uploads/2026/02/CIMK26-scritta-small.png',
  ICIP: 'https://2026.ieeeicip.org/wp-content/uploads/sites/4/2025/10/ICIP26_logo_tiny.png',
  IEEE: 'https://attend.ieee.org/wcci-2026/wp-content/uploads/sites/689/IEEE-370x148.png',
  WCCI: 'https://attend.ieee.org/wcci-2026/wp-content/uploads/sites/689/IEEE-370x148.png',
  ICETCI: 'https://attend.ieee.org/wcci-2026/wp-content/themes/ieee-dci/images/logo-ieee.svg',
}

export default function LogoBadge({ mark, label, compact = false }) {
  const src = logos[mark]
  return <span className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-purple/20 bg-white/80 shadow-sm ${src ? compact ? 'h-10 w-20 p-1.5' : 'h-14 w-24 p-2' : compact ? 'h-8 min-w-8 px-1.5 text-[0.62rem]' : 'h-11 min-w-11 px-2 text-xs'}`} title={label} aria-label={label}>{src ? <img src={src} alt="" className="max-h-full max-w-full object-contain" loading="lazy"/> : <span className="font-mono font-medium tracking-tight text-purpleDeep">{mark}</span>}</span>
}
