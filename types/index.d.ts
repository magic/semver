export const bump: (
  v: string,
  options?: {
    major?: boolean | undefined
    minor?: boolean | undefined
    patch?: boolean | undefined
    beta?: boolean | undefined
    alpha?: boolean | undefined
  },
) => Version | string
export const isBigger: (a: string, b: string) => boolean
export const isSemver: (v: Version | string | unknown) => v is Version
export const isSmaller: (a: string, b: string) => boolean
export const parse: (v: string) => VersionResult
export const stringify: (v: Version | unknown) => string
export const serialize: (v: Version | unknown) => string
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
