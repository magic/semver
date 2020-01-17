import { is, version } from '@magic/test'

import semver from '../src/index.mjs'

const spec = {
  parse: is.fn,
  stringify: is.fn,
  serialize: is.fn,
  stringify: is.fn,
  bump: is.fn,
  isSemver: is.fn,
  isBigger: is.fn,
  isSmaller: is.fn,
}

export default [
  { fn: () => version.lib(semver, spec), expect: is.empty },
  { fn: () => version.spec(spec, semver), expect: is.empty },
]
