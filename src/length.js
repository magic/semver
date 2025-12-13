import is from '@magic/types'

import { parse } from './parse.js'
import { isSemver } from './isSemver.js'

/**
 *
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */

export const isBigger = (a, b) => {
  if (a === b) {
    return false
  }

  const pA = parse(a)
  const pB = parse(b)

  if (!isSemver(a) || !isSemver(b)) {
    return false
  }

  if (pA.major > pB.major) {
    return true
  }

  if (pA.major === pB.major) {
    if (pA.minor > pB.minor) {
      return true
    }
  }

  if (pA.minor === pB.minor) {
    if (pA.patch > pB.patch) {
      return true
    }
  }

  if (pA.patch === pB.patch) {
    if (is.empty(pA.demo) && !is.empty(pB.demo)) {
      return true
    }

    if (!is.empty(pA.demo) && is.empty(pB.demo)) {
      return false
    }

    if (pA.demo && pB.demo) {
      if (pA.demo.string === 'beta' && pB.demo.string === 'alpha') {
        return true
      }

      if (pA.demo.string === pB.demo.string) {
        if (pA.demo.version > pB.demo.version) {
          return true
        }
      }
    } else if (!pA.demo && pB.demo) {
      return true
    } else if (pA.demo && !pB.demo) {
      return false
    }
  }

  return false
}

/**
 *
 * @param {string} a
 * @param {string} b
 * @returns
 */
export const isSmaller = (a, b) => !isBigger(a, b)
