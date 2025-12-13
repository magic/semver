import path from 'path'

import error from '@magic/error'
import is from '@magic/types'

import { parse } from './parse.js'
import { serialize } from './serialize.js'
import { isSemver } from './isSemver.js'

const libName = '@magic/semver.bump'

/**
 *  @typedef {import('./types.js').Version} Version
 */

/**
 * @param {string} v
 * @param {object} options
 * @param {boolean} [options.major]
 * @param {boolean} [options.minor]
 * @param {boolean} [options.patch]
 * @param {boolean} [options.beta]
 * @param {boolean} [options.alpha]
 * @returns {Version | string}
 */
export const bump = (v, options = {}) => {
  if (is.empty(v)) {
    throw error(`${libName} expects arguments to be non-empty`, 'E_VERSION_EMPTY')
  }

  /** @type {Partial<Version> } */
  let version

  const isString = is.string(v)
  if (isString) {
    version = parse(v)
  } else {
    version = v
  }

  if (!isSemver(version)) {
    throw error(
      `${libName} expects version to be a valid semver version: ${version}`,
      'E_VERSION_TYPE',
    )
  }

  version.demo = version.demo || { string: '', version: -1 }

  if (options.major) {
    version.major += 1
    version.minor = 0
    version.patch = 0
  } else if (options.minor) {
    version.minor += 1
    version.patch = 0
  } else if (options.patch) {
    version.patch += 1
  } else if (options.beta) {
    if (is.empty(version.demo)) {
      version.patch += 1
      version.demo = {
        string: 'beta',
        version: 0,
      }
    } else if (version.demo.string === 'alpha') {
      version.demo = {
        string: 'beta',
        version: 0,
      }
    } else {
      version.demo.version += 1
    }
  } else if (options.alpha) {
    if (is.empty(version.demo)) {
      version.patch += 1

      version.demo = {
        string: 'alpha',
        version: 0,
      }
    } else {
      if (version.demo.string !== 'alpha') {
        throw error(
          `${libName} got request to set ${version.demo.string} to alpha. can not decrement versions.`,
          'E_NO_DECREMENT',
        )
      }

      version.demo.version += 1
    }
  } else {
    // no arguments given. bump alpha version if given, patch if not
    if (!is.empty(version.demo)) {
      version.demo.version += 1
    } else {
      version.patch += 1
    }
  }

  if (isString) {
    return serialize(version)
  }

  return version
}
