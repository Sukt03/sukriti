const nodes = [[8,18,3],[36,10,2.4],[67,24,2.7],[92,13,2],[22,48,2.6],[55,45,2.2],[84,55,3],[11,76,2],[43,82,3],[73,76,2.2],[96,89,2.7]]
const edges = [[0,1],[0,4],[1,2],[1,5],[2,3],[2,5],[2,6],[3,6],[4,5],[4,7],[5,6],[5,8],[5,9],[6,9],[6,10],[7,8],[8,9],[9,10]]

export default function NetworkDecoration({ position = 'right', className = '' }) {
  return <svg viewBox="0 0 105 100" aria-hidden="true" className={`node-pulse pointer-events-none absolute h-48 w-52 text-purple sm:h-56 sm:w-64 ${position === 'left' ? '-left-16 bottom-4' : '-right-14 top-12'} ${className}`}>
    <g fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.28">{edges.map(([a,b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}/>)}</g>
    <g>{nodes.map(([x,y,r], index) => <circle key={index} cx={x} cy={y} r={r} fill={index % 3 === 0 ? '#D4527E' : '#8B5FA3'} className="network-node" style={{ animationDelay: `${index * -.32}s` }} opacity="0.55"/>)}</g>
  </svg>
}
