import { useCallback, useEffect, useRef, useState } from 'react'
import Loader from './components/Loader'
import Home from './components/Home'
import Panel from './components/Panel'
import Research from './components/Research'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import { folders, site } from './data/content'
import { navigate, useHashRoute } from './hooks/useHashRoute'

const views = { research: Research, publications: Publications, experience: Experience, blogs: Blogs, contact: Contact }

export default function App() {
  const [section, sub] = useHashRoute()
  const [introDone, setIntroDone] = useState(false)
  const [closing, setClosing] = useState(false)
  const [origin, setOrigin] = useState(null)
  const lastTile = useRef(null)
  const folder = folders.find((item) => item.id === section)
  const View = folder && views[folder.id]

  const open = (id, tile) => {
    const rect = tile.getBoundingClientRect()
    setOrigin(`${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`)
    lastTile.current = id
    navigate(id)
  }

  const close = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      setClosing(false)
      navigate('')
      document.querySelector(`[data-folder="${lastTile.current || section}"]`)?.focus()
    }, 190)
  }, [section])

  useEffect(() => { document.title = folder ? `${folder.label} · ${site.brand}` : site.title }, [folder])

  return <>
    {!introDone && <Loader name={site.brand} onDone={() => setIntroDone(true)}/>}
    <Home onOpen={open} hidden={Boolean(View)}/>
    {View && <Panel label={folder.label} origin={origin} closing={closing} onClose={close}><View shelfId={sub}/></Panel>}
  </>
}
