import { bump as b } from './bump.mjs'
import { isBigger as isB, isSmaller as isS } from './length.mjs'
import { isSemver as is } from './isSemver.mjs'
import { parse as p } from './parse.mjs'
import { serialize as s } from './serialize.mjs'

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
