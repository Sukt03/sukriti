export default function FolderIcon({ name, className = 'h-5 w-5' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'brain') return <svg {...common}><path d="M9.5 4.5A3 3 0 0 0 4 6.2a3.2 3.2 0 0 0 .5 5.8A3.5 3.5 0 0 0 9 17.2V20M14.5 4.5A3 3 0 0 1 20 6.2a3.2 3.2 0 0 1-.5 5.8 3.5 3.5 0 0 1-4.5 5.2V20M9.5 4.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5M12 7v13"/></svg>
  if (name === 'paper') return <svg {...common}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>
  if (name === 'briefcase') return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/></svg>
  if (name === 'code') return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/></svg>
  if (name === 'pen') return <svg {...common}><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/></svg>
  if (name === 'download') return <svg {...common}><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>
  if (name === 'back') return <svg {...common}><path d="M15 6l-6 6 6 6"/></svg>
  if (name === 'close') return <svg {...common}><path d="M6 6l12 12M18 6 6 18"/></svg>
  return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
}
