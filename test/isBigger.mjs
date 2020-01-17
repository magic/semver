import { tryCatch } from '@magic/test'

import { isBigger } from '../src/length.mjs'

import { comparisons, smallerComparisons } from './.data/comparisons.mjs'

export default [
  ...comparisons.map(([a, b]) => ({
    fn: isBigger(a, b),
    expect: true,
    info: `isBigger: ${a} > ${b}: expect true`,
  })),

  ...comparisons.map(([a, b, expect]) => ({
    fn: isBigger(b, a),
    expect: false,
    info: `isBigger: ${b} > ${a}: expect false`,
  })),

  ...smallerComparisons.map(([a, b]) => ({
    fn: isBigger(a, b),
    expect: false,
    info: `isBigger: ${a} > ${b}: expect false`,
  })),

  ...smallerComparisons.map(([a, b, expect]) => ({
    fn: isBigger(b, a),
    expect: false,
    info: `isBigger: ${b} > ${a}: expect false`,
  })),
]
