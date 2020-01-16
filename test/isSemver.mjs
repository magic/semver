import { tryCatch } from '@magic/test'

import { isSemver } from '../src/isSemver.mjs'

import { versions, broken } from './.data/versions.mjs'

export default [
  ...Object.keys(versions).map(version => ({
    fn: isSemver(version),
    expect: true,
    info: `${version} can be parsed as correct`,
  })),
  ...Object.keys(broken).map(version => ({
    fn: isSemver(version),
    expect: false,
    info: `${version} can be parsed as broken`,
  })),

  ...Object.entries(versions).map(([version, obj]) => ({
    fn: isSemver(obj),
    expect: true,
    info: `${version} as object can be parsed as correct`,
  })),

  ...Object.entries(broken).map(([version, obj]) => ({
    fn: isSemver(obj),
    expect: false,
    info: `${version} as object can be parsed as broken`,
  })),

]
