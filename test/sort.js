import { is } from '@magic/test'

import { sort } from '../src/sort.js'
import { parse } from '../src/parse.js'

const versionsInOrder = [
  'v0.0.1',
  'v0.0.2',
  'v0.0.3',
  'v0.0.4',
  'v0.0.5',
  'v0.0.6',
  'v0.0.7',
  'v0.0.8',
  'v0.0.9',
  'v0.0.11',
  'v0.0.15',
  'v0.1.0',
  'v0.1.1',
  'v0.1.2',
  'v0.5.4',
  'v0.8.3',
  'v0.82.33',
  'v1.0.0',
  'v1.0.1',
  'v1.0.2',
  'v1.1.0',
  'v1.1.1',
  'v1.1.2',
  'v1.1.3',
  'v23.23.23',
  'v24.23.23',
  'v24.24.23',
]

export default [
  { fn: sort(versionsInOrder.sort(() => Math.random() * 0.5 - 1)), expect: versionsInOrder },
  {
    fn: sort(['1.0.0', '0.9.0', '0.10.0']),
    expect: ['0.9.0', '0.10.0', '1.0.0'],
    info: 'sorts basic version strings',
  },
  {
    fn: sort(['1.0.0-alpha.0', '1.0.0', '1.0.0-beta.0']),
    expect: ['1.0.0-alpha.0', '1.0.0-beta.0', '1.0.0'],
    info: 'sorts versions with demo tags',
  },
  {
    fn: sort(['1.0.0', '0.9.0', '0.10.0-beta.1']),
    expect: ['0.9.0', '0.10.0-beta.1', '1.0.0'],
    info: 'sorts mixed strings and version objects',
  },
  {
    fn: sort(['1.0.0-alpha.1', '1.0.0-alpha.2', '1.0.0-alpha.0']),
    expect: ['1.0.0-alpha.0', '1.0.0-alpha.1', '1.0.0-alpha.2'],
    info: 'sorts by demo version within same demo string',
  },
  {
    fn: sort(['1.0.0-alpha.0', '1.0.0-beta.0', '1.0.0-alpha.1']),
    expect: ['1.0.0-alpha.0', '1.0.0-alpha.1', '1.0.0-beta.0'],
    info: 'sorts alpha before beta versions',
  },
  {
    fn: sort(['2.0.0', '1.0.0', '1.1.0']),
    expect: ['1.0.0', '1.1.0', '2.0.0'],
    info: 'sorts by major then minor then patch',
  },
  {
    fn: sort(['1.0.0-beta.0', '1.0.0', '1.0.0-alpha.0']),
    expect: ['1.0.0-alpha.0', '1.0.0-beta.0', '1.0.0'],
    info: 'sorts demo versions before release versions',
  },
  {
    fn: sort(['0.0.1', '0.0.1-alpha.0']),
    expect: ['0.0.1-alpha.0', '0.0.1'],
    info: 'sorts demo versions before release with same version numbers',
  },
]
