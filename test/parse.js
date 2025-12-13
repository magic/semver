import { is, tryCatch } from '@magic/test'

import { parse } from '../src/parse.js'

import { versions } from './.data/versions.js'

const parserTests = Object.entries(versions).map(([version, obj]) => ({
  fn: parse(version),
  expect: is.deep.equal(obj),
  info: `${version} gets parsed (${JSON.stringify(parse(version))}) correctly as ${JSON.stringify(obj)}`,
}))

export default [
  ...parserTests,
  {
    fn: tryCatch(parse),
    expect: t => t.name === 'E_ARG_EMPTY',
    info: 'missing argument errors with E_ARG_EMPTY',
  },
  {
    fn: tryCatch(parse, ''),
    expect: t => t.name === 'E_ARG_EMPTY',
    info: 'empty argument errors with E_ARG_EMPTY',
  },
  {
    fn: tryCatch(parse, 23),
    expect: t => t.name === 'E_ARG_TYPE',
    info: 'wrong argument type errors with E_ARG_TYPE',
  },
  {
    fn: tryCatch(parse, 'test.tset'),
    expect: t => t.name === 'E_NOT_SEMVER',
    info: 'invalid semver errors with E_NOT_SEMVER',
  },
  {
    fn: tryCatch(parse, 'string.5.23-beta.42'),
    expect: t => t.name === 'E_MAJOR_TYPE',
    info: 'major version string throws E_MAJOR_TYPE',
  },
  {
    fn: tryCatch(parse, '1.string.23-beta.42'),
    expect: t => t.name === 'E_MINOR_TYPE',
    info: 'minor version string throws E_MINOR_TYPE',
  },
  {
    fn: tryCatch(parse, '1.5.string-beta.42'),
    expect: t => t.name === 'E_PATCH_TYPE',
    info: 'patch version string throws E_PATCH_TYPE',
  },
  {
    fn: tryCatch(parse, '1.5.23-beta.string'),
    expect: t => t.name === 'E_DEMO_TYPE',
    info: 'demo version string throws E_DEMO_TYPE',
  },
]
