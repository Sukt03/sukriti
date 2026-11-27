import { useEffect, useState } from 'react'

// Routes look like "#/publications" or "#/blogs/human-in-the-loop".
// Returns the path segments, e.g. ['blogs', 'human-in-the-loop'].
function readHash() {
  return window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)
}

export function useHashRoute() {
  const [segments, setSegments] = useState(readHash)
  useEffect(() => {
    const onChange = () => setSegments(readHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return segments
}

export function navigate(path) {
  window.location.hash = path ? `#/${path}` : ''
  if (!path) history.replaceState(null, '', window.location.pathname + window.location.search)
}
