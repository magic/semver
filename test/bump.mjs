import { is, tryCatch } from '@magic/test'

import { bump } from '../src/bump.mjs'
import { serialize } from '../src/serialize.mjs'

const testObject = {
  '0.0.1': {
    major: 0,
    minor: 0,
    patch: 1,
  },
  '0.0.1-alpha.0': {
    major: 0,
    minor: 0,
    patch: 1,
    alpha: {
      string: 'alpha',
      version: 0,
    },
  },
}

export default [
  { fn: bump('0.0.1'), expect: '0.0.2', info: '0.0.1 can be bumped' },
  { fn: bump('0.1.1', { major: true }), expect: '1.0.0', info: '0.1.1 can be bumped to 1.0.0' },
  { fn: bump('0.1.1', { minor: true }), expect: '0.2.0', info: '0.1.1 can be bumped to 0.2.0' },
  { fn: bump('0.1.1', { patch: true }), expect: '0.1.2', info: '0.1.1 can be bumped to 0.1.2' },

  {
    fn: bump('0.1.1-alpha.0', { major: true }),
    expect: '1.0.0',
    info: '0.1.1-alpha.0 can be bumped to 1.0.0',
  },
  {
    fn: bump('0.1.1-alpha.0', { minor: true }),
    expect: '0.2.0',
    info: '0.1.1-alpha.0 can be bumped to 0.2.0',
  },
  {
    fn: bump('0.1.1-alpha.0', { patch: true }),
    expect: '0.1.2',
    info: '0.1.1-alpha.0 can be bumped to 0.1.2',
  },

  {
    fn: bump('0.1.1-alpha.0', { alpha: true }),
    expect: '0.1.1-alpha.1',
    info: '0.1.1-alpha.0 can be bumped to 0.1.1-alpha.1',
  },

  {
    fn: bump('0.1.1-alpha.0'),
    expect: '0.1.1-alpha.1',
    info: '0.1.1-alpha.0 without args bumps to 0.1.1-alpha.1',
  },
  { fn: bump('0.1.1'), expect: '0.1.2', info: '0.1.1 without args bumps to 0.1.2' },

  {
    fn: bump('0.1.1', { alpha: true }),
    expect: '0.1.1-alpha.0',
    info: '0.1.1 without { alpha: true } bumps to 0.1.1-alpha.0',
  },

  { fn: bump('0.1.1'), expect: '0.1.2', info: '0.1.1 can be bumped' },

  {
    fn: bump('0.1.1', { alpha: true }),
    expect: '0.1.1-alpha.0',
    info: 'args.alpha appends -alpha.0 correctly',
  },
  {
    fn: bump('0.1.1', { beta: true }),
    expect: '0.1.1-beta.0',
    info: 'args.alpha appends -beta.0 correctly',
  },
  {
    fn: bump('0.1.1-alpha.0', { alpha: true }),
    expect: '0.1.1-alpha.1',
    info: 'args.alpha increments correctly',
  },
  {
    fn: bump('0.1.1-alpha.0', { beta: true }),
    expect: '0.1.1-beta.0',
    info: 'args.beta replaces -alpha.0 with -beta.0 correctly',
  },
  {
    fn: bump('0.1.1-beta.0', { beta: true }),
    expect: '0.1.1-beta.1',
    info: 'args.beta appends -beta.0 correctly',
  },
  {
    fn: tryCatch(bump, '0.1.1-beta.0', { alpha: true }),
    expect: t => t.name === 'E_NO_DECREMENT',
    info: 'args.alpha can not decrement back from beta',
  },

  ...Object.entries(testObject).map(([v, o]) => ({
    fn: serialize(bump(o)),
    expect: bump(v),
    info: 'objects and strings get bumped the same',
  })),

  {
    fn: tryCatch(bump, { major: 0, minor: 'string' }),
    expect: t => t.name === 'E_VERSION_TYPE',
    info: 'invalid version object errors with E_VERSION_TYPE',
  },
  {
    fn: tryCatch(bump),
    expect: t => t.name === 'E_VERSION_EMPTY',
    info: 'bump without arguments errors with E_VERSION_EMPTY',
  },
]
