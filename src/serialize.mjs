import is from '@magic/types'
import error from '@magic/error'

const libName = `@magic/semver.serialize:`

export const serialize = v => {
  if (is.empty(v)) {
    throw error(`${libName} v must be non-empty`, 'E_ARG_EMPTY')
  }

  // the || v.major is a cheap test to make sure we get a valid object
  if (!is.object(v) || !v.hasOwnProperty('major')) {
    throw error(`${libName} v must be an object`, 'E_ARG_TYPE')
  }

  const major = parseInt(v.major)

  if (!is.number(major)) {
    throw error(`${libName} major was not an Int: ${major}`, 'E_MAJOR_TYPE')
  }

  const minor = parseInt(v.minor)

  if (!is.number(minor)) {
    throw error(`${libName} minor was not an Int: ${minor}`, 'E_MINOR_TYPE')
  }

  const patch = parseInt(v.patch)

  if (!is.number(patch)) {
    throw error(`${libName} patch was not an Int: ${patch}`, 'E_PATCH_TYPE')
  }

  let demoString = ''

  if (!is.empty(v.demo)) {
    let { version, string } = v.demo
    version = parseInt(version)

    if (!is.number(version)) {
      throw error(`${libName} demo was not an Int: ${version}`, 'E_DEMO_TYPE')
    }

    demoString = `-${string}.${version}`
  }

  return `${major}.${minor}.${patch}${demoString}`
}
