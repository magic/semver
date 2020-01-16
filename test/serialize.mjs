import { is, tryCatch } from '@magic/test'

import { serialize } from '../src/serialize.mjs'

import { versions } from './.data/versions.mjs'

const serializerTests = Object.entries(versions).map(([version, obj]) => ({
  fn: serialize(obj),
  expect: is.deep.equal(version),
  info: `${version} gets serialized correctly`,
}))

const oneoneone = {
  major: 1,
  minor: 1,
  patch: 1,
}

export default [
  ...serializerTests,
  {
    fn: tryCatch(serialize),
    expect: t => t.name === 'E_ARG_EMPTY',
    info: 'missing argument errors with E_ARG_EMPTY',
  },
  {
    fn: tryCatch(serialize, ''),
    expect: t => t.name === 'E_ARG_EMPTY',
    info: 'empty argument errors with E_ARG_EMPTY',
  },
  {
    fn: tryCatch(serialize, 23),
    expect: t => t.name === 'E_ARG_TYPE',
    info: 'wrong argument type errors with E_ARG_TYPE',
  },
  {
    fn: tryCatch(serialize, { test: true }),
    expect: t => t.name === 'E_ARG_TYPE',
    info: 'invalid semver errors with E_NOT_SEMVER',
  },
  {
    fn: tryCatch(serialize, { ...oneoneone, major: 'string' }),
    expect: t => t.name === 'E_MAJOR_TYPE',
    info: 'major version string throws E_MAJOR_TYPE',
  },
  {
    fn: tryCatch(serialize, { ...oneoneone, minor: 'string' }),
    expect: t => t.name === 'E_MINOR_TYPE',
    info: 'minor version string throws E_MINOR_TYPE',
  },
  {
    fn: tryCatch(serialize, { ...oneoneone, patch: 'string' }),
    expect: t => t.name === 'E_PATCH_TYPE',
    info: 'patch version string throws E_PATCH_TYPE',
  },
  {
    fn: tryCatch(serialize, { ...oneoneone, demo: { string: 'string', version: 'string' } }),
    expect: t => t.name === 'E_DEMO_TYPE',
    info: 'demo version string throws E_DEMO_TYPE',
  },
]
