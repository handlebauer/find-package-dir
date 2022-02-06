import { accessSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const getCwd = () => {
  const path = fileURLToPath(new URL(import.meta.url))
  return dirname(path)
}

export const findPackageDir = (target = 'package.json') => {
  const cwd = getCwd()

  const findUp = directory => {
    try {
      accessSync(join(directory, target))
      return directory
    } catch {}

    if (directory === '/') {
      return undefined
    }

    const parent = dirname(directory)
    return findUp(parent)
  }

  // We first need to find this package's `package.json`
  const self = findUp(cwd)
  // Then, search upwards from the parent directory...
  const parent = dirname(self)
  // ... before returning the result
  return findUp(parent)
}
