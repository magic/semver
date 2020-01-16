import is from '@magic/types'
import { parse } from './parse.mjs'
import { serialize } from './serialize.mjs'

export const isSemver = v => {
  try {
    if (is.string(v)) {
      const p = parse(v)

      return is.obj(p) && is.num(p.major)
    } else {
      const s = serialize(v)

      return is.str(s) && is.num(parseInt(s.split('.')[1]))
    }
  } catch (_) {
    return false
  }
}
