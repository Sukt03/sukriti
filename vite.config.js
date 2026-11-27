import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/sukriti/'

// In dev, serve public/<folder>/index.html for folder links like /sukriti/lore/tama/
// (GitHub Pages already does this in production).
const publicFolderIndex = {
  name: 'public-folder-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = req.url?.split('?')[0] ?? ''
      if (path.startsWith(base) && path.endsWith('/') && path !== base && existsSync(join('public', path.slice(base.length), 'index.html'))) req.url = `${path}index.html`
      next()
    })
  },
}

export default defineConfig({
  plugins: [react(), publicFolderIndex],
  base,
})
