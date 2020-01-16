import is from '@magic/types'
import error from '@magic/error'

const libName = `@magic/semver.parse:`

export const parse = v => {
  if (is.empty(v)) {
    throw error(`${libName} first argument must be non-empty`, 'E_ARG_EMPTY')
  }

  if (!is.string(v)) {
    throw error(`${libName} first argument must be a string`, 'E_ARG_TYPE')
  }

  if (v.split('.').length < 3) {
    throw error(`${libName} first argument must be a valid semver version.`, 'E_NOT_SEMVER')
  }

  const [major, minor, patch, alpha] = v.split('.')

  const result = {
    major: parseInt(major),
    minor: parseInt(minor),
    alpha: {},
  }

  if (is.string(patch) && patch.includes('-')) {
    let [p, alphaString] = patch.split('-')
    result.patch = parseInt(p)

    result.alpha = {
      string: alphaString,
      version: parseInt(alpha),
    }
  } else {
    result.patch = parseInt(patch)
  }

  if (!is.number(result.major)) {
    throw error(`${libName} major was not an Int: ${result.major}`, 'E_MAJOR_TYPE')
  } else if (!is.number(result.minor)) {
    throw error(`${libName} minor was not an Int: ${result.minor}`, 'E_MINOR_TYPE')
  } else if (!is.number(result.patch)) {
    throw error(`${libName} patch was not an Int: ${result.patch}`, 'E_PATCH_TYPE')
  } else if (!is.empty(result.alpha) && !is.number(result.alpha.version)) {
    throw error(`${libName} alpha was not an Int: ${result.alpha.version}`, 'E_ALPHA_TYPE')
  }

  result.v = v

  return result
}
