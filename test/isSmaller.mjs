import { tryCatch } from '@magic/test'

import { isSmaller } from '../src/length.mjs'

import { comparisons, smallerComparisons } from './.data/comparisons.mjs'

export default [
  ...comparisons.map(([a, b]) => ({
    fn: isSmaller(a, b),
    expect: false,
    info: `isSmaller: ${a} < ${b}: expect false`,
  })),

  ...comparisons.map(([a, b, expect]) => ({
    fn: isSmaller(b, a),
    expect: true,
    info: `isSmaller: ${b} < ${a}: expect true`,
  })),

  ...smallerComparisons.map(([a, b]) => ({
    fn: isSmaller(a, b),
    expect: true,
    info: `isSmaller: ${a} < ${b}: expect true`,
  })),

  ...smallerComparisons.map(([a, b, expect]) => ({
    fn: isSmaller(b, a),
    expect: true,
    info: `isSmaller: ${b} < ${a}: expect true`,
  })),
]
