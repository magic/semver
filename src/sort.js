import is from '@magic/types'
import { parse } from './parse.js'

/**
 * Compares pre-release identifiers according to semver rules
 * @private
 * @param {import('./types.js').Version['demo']} a
 * @param {import('./types.js').Version['demo']} b
 * @returns {number}
 */
const comparePreRelease = (a, b) => {
  if (!a && !b) {
    return 0
  }
  if (!a) {
    return -1
  }
  if (!b) {
    return 1
  }

  // First compare the string identifiers (alpha, beta, etc)
  if (a.string < b.string) {
    return -1
  }
  if (a.string > b.string) {
    return 1
  }

  // If strings are same, compare version numbers
  return a.version - b.version
}

/**
 * Sorts versions according to semver spec
 * @param {(import('./types.js').Version | string)[]} versions
 * @returns {import('./types.js').Version[]}
 */
export const sort = versions => {
  return /** @type {import('./types.js').Version[]} */ (
    versions
      .map(
        v =>
          /** @type {[string | import('./types.js').Version, import('./types.js').Version]} */ ([
            v,
            is.str(v) ? parse(v) : v,
          ]),
      )
      .sort(([, a], [, b]) => {
        if (a.major !== b.major) {
          return a.major - b.major
        }
        if (a.minor !== b.minor) {
          return a.minor - b.minor
        }
        if (a.patch !== b.patch) {
          return a.patch - b.patch
        }

        const hasPreA = !!a.demo
        const hasPreB = !!b.demo

        if (hasPreA && !hasPreB) {
          return -1
        }
        if (!hasPreA && hasPreB) {
          return 1
        }
        if (hasPreA && hasPreB) {
          return comparePreRelease(a.demo, b.demo)
        }

        return 0
      })
      .map(([original]) => original)
  )
}
