export const bump: (
  v: string,
  options?: {
    major?: boolean | undefined
    minor?: boolean | undefined
    patch?: boolean | undefined
    beta?: boolean | undefined
    alpha?: boolean | undefined
  },
) => import('./types.js').Version | string
export const isBigger: (a: string, b: string) => boolean
export const isSemver: (
  v: import('./types.js').Version | string | unknown,
) => v is import('./types.js').Version
export const isSmaller: (a: string, b: string) => boolean
export const parse: (v: string) => import('./types.js').VersionResult
export const stringify: (v: import('./types.js').Version | unknown) => string
export const serialize: (v: import('./types.js').Version | unknown) => string
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
export type Version = import('./types.js').Version
export type VersionResult = import('./types.js').VersionResult
