import { tryCatch } from '@magic/test'

import { bump } from '../src/bump.mjs'

export default [
  { fn: bump('0.0.1'), expect: '0.0.2', info: '0.0.1 can be bumped' },
  {
    fn: tryCatch(bump, { major: 0, minor: 'string' }),
    expect: t => t.name === 'E_VERSION_TYPE',
    info: 'invalid version object errors with E_VERSION_TYPE',
  },
]
