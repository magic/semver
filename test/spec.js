import { version } from '@magic/test'

import semver from '../src/index.js'

const spec = {
  parse: 'fn',
  stringify: 'fn',
  serialize: 'fn',
  stringify: 'fn',
  bump: 'fn',
  isSemver: 'fn',
  isBigger: 'fn',
  isSmaller: 'fn',
}

export default version(semver, spec)
