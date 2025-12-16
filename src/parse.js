import is from '@magic/types'
import error from '@magic/error'

const libName = `@magic/semver.parse:`

/**
 * @param {string} v
 * @returns {import('./types.js').VersionResult}
 */
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

  const [major, minor, patch, demo] = v.split('.')

  /** @type {import('./types.js').VersionResult} */
  const result = {
    major: parseInt(major.replace('v', '')),
    minor: parseInt(minor),
    patch: -1,
    v,
  }

  if (is.string(patch) && patch.includes('-')) {
    let [p, demoString] = patch.split('-')
    result.patch = parseInt(p)

    result.demo = {
      string: demoString,
      version: parseInt(demo),
    }
  } else {
    result.patch = parseInt(patch)
  }

  if (!is.number(result.major)) {
    throw error(`${libName} major was not an Int: ${v} ${result.major}`, 'E_MAJOR_TYPE')
  } else if (!is.number(result.minor)) {
    throw error(`${libName} minor was not an Int: ${result.minor}`, 'E_MINOR_TYPE')
  } else if (!is.number(result.patch)) {
    throw error(`${libName} patch was not an Int: ${result.patch}`, 'E_PATCH_TYPE')
  } else if (!is.empty(result.demo) && !is.number(result.demo?.version)) {
    throw error(`${libName} demo was not an Int: ${result.demo?.version}`, 'E_DEMO_TYPE')
  }

  return result
}
