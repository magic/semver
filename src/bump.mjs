import path from 'path'

import error from '@magic/error'
import is from '@magic/types'

import { parse } from './parse.mjs'
import { serialize } from './serialize.mjs'
import { isSemver } from './isSemver.mjs'

const libName = '@magic/semver.bump'

export const bump = (version, options = {}) => {
  if (is.empty(version)) {
    throw error(`${libName} expects arguments to be non-empty`, 'E_VERSION_EMPTY')
  }

  const isString = is.string(version)
  if (isString) {
    version = parse(version)
  }

  if (!isSemver(version)) {
    throw error(
      `${libName} expects version to be a valid semver version: ${version}`,
      'E_VERSION_TYPE',
    )
  }

  if (options.major) {
    version.major += 1
    version.minor = 0
    version.patch = 0
    version.alpha = {}
  } else if (options.minor) {
    version.minor += 1
    version.patch = 0
    version.alpha = {}
  } else if (options.patch) {
    version.patch += 1
    version.alpha = {}
  } else if (options.beta) {
    if (is.empty(version.alpha)) {
      version.alpha = {
        string: 'beta',
        version: 0,
      }
    } else {
      if (version.alpha.string === 'alpha') {
        version.alpha = {
          string: 'beta',
          version: 0,
        }
      } else {
        version.alpha.version += 1
      }
    }
  } else if (options.alpha) {
    if (is.empty(version.alpha)) {
      version.alpha = {
        string: 'alpha',
        version: 0,
      }
    } else {
      if (version.alpha.string !== 'alpha') {
        throw error(
          `${libName} got request to set ${version.alpha.string} to alpha. can not decrement versions.`,
          'E_NO_DECREMENT',
        )
      }

      version.alpha.version += 1
    }
  } else {
    // no arguments given. bump alpha version if given, patch if not
    if (!is.empty(version.alpha)) {
      version.alpha.version += 1
    } else {
      version.patch += 1
    }
  }

  if (isString) {
    return serialize(version)
  }

  return version
}
