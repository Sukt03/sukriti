import Nav from './components/Nav'
import Hero from './components/Hero'
import Research from './components/Research'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PageConstellations from './components/PageConstellations'
import { site } from './data/content'

export default function App() {
  return <><Nav/><div className="relative"><PageConstellations/><main className="relative z-10 w-full"><Hero/><Research/><Publications/><Experience/><Projects/><Contact/></main><footer className="relative z-10 border-t border-hairline px-5 py-8 text-center text-sm text-inkSoft">{site.footer}</footer></div></>
}
