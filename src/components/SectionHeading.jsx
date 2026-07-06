export default function SectionHeading({ number, title }) {
  return <div className="mb-6 flex items-center gap-3"><span className="status-motion rounded bg-card px-2 py-0.5 font-mono text-xs text-pinkDeep">{number}</span><h2 className="font-display text-2xl font-medium text-purpleDeep">{title}</h2><span className="section-heading-line h-px max-w-28 flex-1 bg-gradient-to-r from-purple/60 to-transparent" aria-hidden="true"/></div>
}
