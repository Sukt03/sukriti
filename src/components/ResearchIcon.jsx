export default function ResearchIcon({ name }) {
  const common = { className: 'h-6 w-6', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'brain') return <svg {...common}><path d="M9.5 4.5A3 3 0 0 0 4 6.2a3.2 3.2 0 0 0 .5 5.8A3.5 3.5 0 0 0 9 17.2V20M14.5 4.5A3 3 0 0 1 20 6.2a3.2 3.2 0 0 1-.5 5.8 3.5 3.5 0 0 1-4.5 5.2V20M9.5 4.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5M8 10.5c1 .1 1.8.6 2.3 1.5M16 10.5c-1 .1-1.8.6-2.3 1.5M12 7v13"/></svg>
  if (name === 'signal') return <svg {...common}><path d="M3 12h3l2-6 4 12 3-9 2 6h4"/><path d="M5 4.5a10 10 0 0 1 14 0M5 19.5a10 10 0 0 0 14 0" opacity=".55"/></svg>
  if (name === 'spark') return <svg {...common}><path d="m12 3 1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8L12 3Z"/><path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3ZM5 14l.6 1.7 1.7.6-1.7.6L5 18.6l-.6-1.7-1.7-.6 1.7-.6L5 14Z"/></svg>
  return <svg {...common}><path d="M3 6.5 8 4l5 2.5L18 4l3 1.5v12L16 20l-5-2.5L6 20l-3-1.5v-12Z"/><path d="M8 4v12M13 6.5v11M18 4v12M6.5 12c2-2 3.5 2 6 0s3.5-2 5.5 0"/></svg>
}
