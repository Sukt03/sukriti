import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useInView(options = {}) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const [inView, setInView] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setInView(true)
      return undefined
    }
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, ...options })
    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return { ref, inView, reducedMotion }
}
