import { useReducedMotion } from '../hooks/useReducedMotion'

const nodes = [[10,12,2.5],[42,24,1.5],[22,48,3],[68,58,2],[38,82,1.8],[78,104,2.8],[50,132,1.5],[86,154,2.2]]
const edges = [[0,1],[0,2],[1,2],[1,3],[2,4],[3,4],[3,5],[4,6],[5,6],[5,7],[6,7]]
const clusters = [6, 29, 54, 78]
const middleParticles = [[46,14,8],[57,22,5],[39,34,6],[62,43,10],[48,51,5],[55,61,7],[42,70,9],[61,81,5],[49,91,7]]

function Cluster({ side, top, index, reducedMotion }) {
  return <svg viewBox="0 0 100 170" aria-hidden="true" className={`absolute h-40 w-24 sm:h-48 sm:w-32 ${side === 'left' ? '-left-2' : '-right-2 scale-x-[-1]'}`} style={{ top: `${top}%` }}>
    <g stroke={side === 'left' ? '#8B5FA3' : '#D4527E'} strokeWidth="0.9" strokeDasharray="2 4" opacity="0.42">{edges.map(([a,b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}/>)}</g>
    <g>{nodes.map(([x,y,r], nodeIndex) => <circle key={nodeIndex} cx={x} cy={y} r={r + .5} fill={(nodeIndex + index) % 2 ? '#D4527E' : '#8B5FA3'} className={reducedMotion ? '' : nodeIndex % 2 ? 'ambient-float' : 'particle-drift'} style={reducedMotion ? undefined : { animationDelay: `${-(index * 1.1 + nodeIndex * .65)}s`, animationDuration: `${6 + (nodeIndex % 4) * 1.3}s` }} opacity="0.62"/>)}</g>
  </svg>
}

function MiddleParticles({ reducedMotion }) {
  return <>{middleParticles.map(([left, top, size], index) => <span key={`${left}-${top}`} className={`middle-particle absolute rounded-full ${index % 3 === 0 ? 'border-2 border-purple/35' : index % 2 ? 'bg-pink/35' : 'bg-purple/35'}`} style={{ left: `${left}%`, top: `${top}%`, width: `${size}px`, height: `${size}px`, animationDelay: reducedMotion ? undefined : `${index * -1.15}s`, animationDuration: reducedMotion ? undefined : `${7 + index % 4}s` }}/>)}</>
}

export default function PageConstellations() {
  const reducedMotion = useReducedMotion()
  return <div className="page-constellations pointer-events-none absolute inset-0 z-20 block overflow-hidden" aria-hidden="true">
    {clusters.map((top, index) => <Cluster key={`left-${top}`} side="left" top={top} index={index} reducedMotion={reducedMotion}/>)}
    {clusters.map((top, index) => <Cluster key={`right-${top}`} side="right" top={top + 8} index={index + 2} reducedMotion={reducedMotion}/>)}
    <MiddleParticles reducedMotion={reducedMotion}/>
  </div>
}
