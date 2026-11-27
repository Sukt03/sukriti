import { useEffect, useRef, useState } from 'react'

// Opening animation: a few EEG channels sweep across the screen, then every
// sample point drifts into place to spell the name. Plays once per browser tab,
// can be skipped with a click or key, and is skipped entirely for reduced motion.
const SEEN_KEY = 'st-intro-seen'
const DRAW_MS = 750
const MORPH_MS = 850
const HOLD_MS = 450

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function shouldPlay() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem(SEEN_KEY)
  } catch { return true }
}

function sampleText(text, width, height) {
  const off = document.createElement('canvas')
  off.width = width; off.height = height
  const ctx = off.getContext('2d')
  let size = Math.min(width * 0.13, 150)
  ctx.font = `600 ${size}px "Source Serif 4", Georgia, serif`
  const measured = ctx.measureText(text).width
  if (measured > width * 0.86) { size *= (width * 0.86) / measured; ctx.font = `600 ${size}px "Source Serif 4", Georgia, serif` }
  ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.fillText(text, width / 2, height / 2)
  const data = ctx.getImageData(0, 0, width, height).data
  const step = Math.max(3, Math.round(size / 26))
  const points = []
  for (let y = 0; y < height; y += step) for (let x = 0; x < width; x += step) if (data[(y * width + x) * 4 + 3] > 128) points.push([x, y])
  // Keep the count manageable on very large screens.
  const keep = Math.ceil(points.length / 1400)
  return points.filter((_, i) => i % keep === 0).sort((a, b) => a[0] - b[0])
}

export default function Loader({ name, onDone }) {
  const [play] = useState(shouldPlay)
  const [leaving, setLeaving] = useState(false)
  const canvasRef = useRef(null)
  const doneRef = useRef(false)

  const finish = () => {
    if (doneRef.current) return
    doneRef.current = true
    try { sessionStorage.setItem(SEEN_KEY, '1') } catch {}
    setLeaving(true)
    setTimeout(onDone, 450)
  }

  useEffect(() => {
    if (!play) { onDone(); return }
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight
    if (w < 50 || h < 50) { finish(); return }
    canvas.width = w * dpr; canvas.height = h * dpr
    ctx.scale(dpr, dpr)

    let raf, start
    let cancelled = false
    const channels = 4
    const run = (targets) => {
      if (cancelled) return
      if (targets.length < 2) { finish(); return }
      const n = targets.length
      // Each point starts on one EEG channel, at an x matching its letter position.
      const pts = targets.map(([tx, ty], i) => {
        const c = i % channels
        const x = (i / (n - 1)) * w
        const base = h / 2 + (c - (channels - 1) / 2) * Math.min(56, h * 0.07)
        const y = base
          + Math.sin(x * 0.021 + c * 1.7) * 14
          + Math.sin(x * 0.067 + c) * 7
          + (Math.sin(x * 0.3 + c * 9) > 0.93 ? -28 : 0) // occasional spike
        return { x, y, tx, ty, c }
      })
      const hue = (x) => {
        const t = x / w
        return `rgb(${Math.round(232 - 56 * t)}, ${Math.round(98 + 42 * t)}, ${Math.round(143 + 67 * t)})`
      }
      const frame = (now) => {
        if (!start) start = now
        const t = now - start
        ctx.clearRect(0, 0, w, h)
        const reveal = Math.min(1, t / DRAW_MS)
        const m = ease(Math.min(1, Math.max(0, (t - DRAW_MS) / MORPH_MS)))
        // Channel traces fade out as the points leave them.
        if (m < 1) {
          ctx.lineWidth = 1.4
          for (let c = 0; c < channels; c++) {
            ctx.beginPath()
            ctx.globalAlpha = 0.75 * (1 - m)
            let first = true
            for (const p of pts) {
              if (p.c !== c || p.x > reveal * w) continue
              const x = p.x + (p.tx - p.x) * m, y = p.y + (p.ty - p.y) * m
              first ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
              first = false
            }
            const grad = ctx.createLinearGradient(0, 0, w, 0)
            grad.addColorStop(0, '#E8628F'); grad.addColorStop(1, '#B08CD2')
            ctx.strokeStyle = grad
            ctx.stroke()
          }
        }
        ctx.globalAlpha = 1
        for (const p of pts) {
          if (p.x > reveal * w) continue
          const x = p.x + (p.tx - p.x) * m, y = p.y + (p.ty - p.y) * m
          ctx.fillStyle = hue(p.tx)
          ctx.beginPath(); ctx.arc(x, y, 1.1 + m * 0.5, 0, Math.PI * 2); ctx.fill()
        }
        if (t < DRAW_MS + MORPH_MS + HOLD_MS) raf = requestAnimationFrame(frame)
        else finish()
      }
      raf = requestAnimationFrame(frame)
    }

    // Wait briefly for the display font so the name samples in Source Serif.
    const fontReady = document.fonts?.load ? document.fonts.load('600 80px "Source Serif 4"') : Promise.resolve()
    Promise.race([fontReady, new Promise((r) => setTimeout(r, 400))]).then(() => run(sampleText(name, w, h)))

    const skip = () => finish()
    window.addEventListener('keydown', skip)
    return () => { cancelled = true; cancelAnimationFrame(raf); window.removeEventListener('keydown', skip) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!play) return null
  return <div className={`fixed inset-0 z-[100] cursor-pointer bg-paper ${leaving ? 'loader-out' : ''}`} onClick={finish} role="presentation">
    <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true"/>
    <button type="button" onClick={finish} className="absolute bottom-6 right-6 font-mono text-xs text-inkSoft hover:text-ink">Skip intro →</button>
  </div>
}
