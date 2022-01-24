import test from 'ava'

import { openSync, unlinkSync } from 'node:fs'
import { dirname, join } from 'node:path'

import { findPackageDir } from './index.js'

test('Should find package.json in parent directory', t => {
  const parent = dirname(process.cwd())
  openSync(join(parent, 'package.json'), 'a')
  const dir = findPackageDir()
  unlinkSync(join(parent, 'package.json'))

  t.is(parent, dir)
})
