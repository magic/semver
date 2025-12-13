export const bump: (version: any, options?: {}) => any
export const isBigger: (a: any, b: any) => boolean
export const isSemver: (v: any) => boolean
export const isSmaller: (a: any, b: any) => boolean
export const parse: (v: any) => {
  major: number
  minor: number
  demo: {}
}
export const stringify: (v: any) => string
export const serialize: (v: any) => string
declare namespace _default {
  export { bump }
  export { isBigger }
  export { isSemver }
  export { isSmaller }
  export { parse }
  export { serialize }
  export { stringify }
}
export default _default
