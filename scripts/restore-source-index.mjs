import { copyFileSync, existsSync, readFileSync } from 'node:fs'

const sourcePath = 'index.source.html'
const targetPath = 'index.html'

if (existsSync(sourcePath)) {
  const source = readFileSync(sourcePath, 'utf8')
  const current = existsSync(targetPath) ? readFileSync(targetPath, 'utf8') : ''

  if (source !== current) {
    copyFileSync(sourcePath, targetPath)
    console.log('Restored editable Vite index.html')
  }
}
