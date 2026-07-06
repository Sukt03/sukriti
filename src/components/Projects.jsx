import { projects, sectionMeta } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import RevealItem from './RevealItem'
import SectionHeading from './SectionHeading'

function NodeGraph({ reducedMotion }) {
  const nodes = [[15,18],[48,12],[82,25],[28,50],[62,48],[92,62],[45,78]]
  const edges = [[0,1],[1,2],[0,3],[1,4],[2,4],[2,5],[3,4],[3,6],[4,6],[5,6]]
  return <svg viewBox="0 0 110 90" role="img" aria-label={sectionMeta.projects.graphLabel} className={`absolute -right-2 top-2 h-36 w-44 text-purple opacity-20 ${reducedMotion ? '' : 'node-pulse'}`}><g stroke="currentColor" strokeWidth="0.8">{edges.map(([a,b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}/>)}</g><g fill="#D4527E">{nodes.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3 : 2}/>)}</g></svg>
}

export default function Projects() {
  const reducedMotion = useReducedMotion()
  return <section id="projects" className="relative scroll-mt-28 overflow-hidden px-5 py-10 sm:px-10 sm:py-12"><NodeGraph reducedMotion={reducedMotion}/><div className="relative"><SectionHeading {...sectionMeta.projects}/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <RevealItem key={project.title} index={index}><article className={`h-full rounded-xl border border-transparent bg-card p-5 ${reducedMotion ? '' : 'transition-all duration-200 hover:-translate-y-0.5 hover:border-purple'}`}><h3 className="mb-2 font-medium text-purpleDeep">{project.title}</h3><p className="mb-4 text-sm leading-6 text-inkSoft">{project.description}</p><div className="font-mono text-[0.7rem] text-pinkDeep">{project.stack}</div></article></RevealItem>)}</div></div></section>
}
