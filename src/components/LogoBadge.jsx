export default function LogoBadge({ mark, label, compact = false }) {
  return <span className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-purple/20 bg-paper font-mono font-medium tracking-tight text-purpleDeep shadow-sm ${compact ? 'h-8 min-w-8 px-1.5 text-[0.62rem]' : 'h-11 min-w-11 px-2 text-xs'}`} title={label} aria-label={label}>{mark}</span>
}
