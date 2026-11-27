import { useEffect, useRef } from 'react'
import { site } from '../data/content'
import FolderIcon from './FolderIcon'

// A full-screen "opened folder". Content scrolls inside the panel; the page behind never scrolls.
export default function Panel({ label, origin, closing, onClose, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    ref.current?.scrollTo(0, 0)
    ref.current?.querySelector('[data-panel-title]')?.focus({ preventScroll: true })
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose, label])

  return <div className="fixed inset-0 z-50">
    <div className="backdrop-in absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true"/>
    <div role="dialog" aria-modal="true" aria-label={label} ref={ref} className={`${closing ? 'panel-out' : 'panel-in'} absolute inset-0 overflow-y-auto bg-paper sm:inset-3 sm:rounded-2xl sm:border sm:border-hairline`} style={{ transformOrigin: origin || 'center' }}>
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-hairline bg-paper/90 px-4 py-3 backdrop-blur sm:px-6">
        <button type="button" onClick={onClose} className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 font-mono text-xs text-inkSoft transition-colors hover:text-ink"><FolderIcon name="back" className="h-4 w-4"/>{site.brand}<span className="text-hairline">/</span><span className="text-ink">{label}</span></button>
        <button type="button" onClick={onClose} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-inkSoft transition-colors hover:border-pink/60 hover:text-ink"><FolderIcon name="close" className="h-4 w-4"/></button>
      </div>
      <div className="mx-auto max-w-7xl pb-16">{children}</div>
    </div>
  </div>
}
