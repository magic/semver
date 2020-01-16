import path from 'path'

import error from '@magic/error'
import is from '@magic/types'

import { parse } from './parse.mjs'
import { serialize } from './serialize.mjs'
import { isSemver } from './isSemver.mjs'

const libName = '@magic/semver.bump'

export const bump = async (version, options = {}) => {
  if (is.empty(version)) {
    throw error(`${libName} expects arguments to be non-empty`, 'E_ARG_EMPTY')
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
  } else if (options.minor) {
    version.minor += 1
  } else if (options.patch) {
    version.patch += 1
  } else if (options.alpha) {
    if (is.empty(version.alpha)) {
      version.alpha = {
        string: 'alpha',
        version: 0,
      }
    } else {
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
