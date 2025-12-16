import is from '@magic/types'
import { parse } from './parse.js'
import { serialize } from './serialize.js'

/**
 * @param {import('./types.js').Version | string | unknown} v
 * @returns {v is import('./types.js').Version}
 *
 */
export const isSemver = v => {
  try {
    if (is.string(v)) {
      const p = parse(v)

      return is.obj(p) && is.num(p.major) && is.num(p.minor) && is.num(p.patch)
    } else {
      const s = serialize(v)

      return is.str(s) && is.num(parseInt(s.split('.')[1]))
    }
  } catch {}

  return false
}
