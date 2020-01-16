import { parse as p } from './parse.mjs'
import { serialize as s } from './serialize.mjs'

export const parse = p
export const stringify = s
export const serialize = s

export default {
  parse,
  stringify,
  serialize,
}
