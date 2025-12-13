import { bump as b } from './bump.js'
import { isBigger as isB, isSmaller as isS } from './length.js'
import { isSemver as is } from './isSemver.js'
import { parse as p } from './parse.js'
import { serialize as s } from './serialize.js'

export const bump = b
export const isBigger = isB
export const isSemver = is
export const isSmaller = isS
export const parse = p
export const stringify = s
export const serialize = s

export default {
  bump,
  isBigger,
  isSemver,
  isSmaller,
  parse,
  serialize,
  stringify,
}
