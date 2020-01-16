import is from '@magic/types'

import semver from '../src/index.mjs'

export default [
  { fn: () => semver, expect: is.object, info: '@magic/semver exports an object' },
  { fn: () => semver.parse, expect: is.fn, info: 'parse is a function' },
  { fn: () => semver.stringify, expect: is.fn, info: 'stringify is a function' },
  { fn: () => semver.serialize, expect: is.fn, info: 'serialize is a function' },
  {
    fn: is.deep.eq(semver.serialize, semver.stringify),
    info: 'serialize equals stringify is a function',
  },
]
