import { bump as b } from './bump.mjs'
import { isSemver as is } from './isSemver.mjs'
import { parse as p } from './parse.mjs'
import { serialize as s } from './serialize.mjs'

export const bump = b
export const isSemver = is
export const parse = p
export const stringify = s
export const serialize = s

export default {
  bump,
  isSemver,
  parse,
  serialize,
  stringify,
}
