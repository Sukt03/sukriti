import { useInView } from '../hooks/useInView'

export default function RevealItem({ children, index, className = '' }) {
  const { ref, inView, reducedMotion } = useInView()
  return <div ref={ref} className={`${className} ${reducedMotion ? '' : 'transition-all duration-500 ease-out'} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`} style={reducedMotion ? undefined : { transitionDelay: `${index * 80}ms` }}>{children}</div>
}
