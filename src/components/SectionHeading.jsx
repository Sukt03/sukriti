export default function SectionHeading({ number, title }) {
  return <div className="mb-6 flex items-baseline gap-3"><span className="rounded bg-card px-2 py-0.5 font-mono text-xs text-pinkDeep">{number}</span><h2 className="font-display text-2xl font-medium text-purpleDeep">{title}</h2></div>
}
