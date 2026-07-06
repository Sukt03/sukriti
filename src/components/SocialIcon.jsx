export default function SocialIcon({ name, className = 'h-4 w-4' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'scholar') return <svg {...common}><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12.5v4c3 2.2 7 2.2 10 0v-4"/><path d="M21 9v6"/></svg>
  if (name === 'linkedin') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4"/></svg>
  if (name === 'email') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  return <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-6 0C6.1.1 4.9.5 4.9.5A5 5 0 0 0 4.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.3 3.5 6.5 6.8 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 19c-3 .9-3-1.5-4-2"/></svg>
}
