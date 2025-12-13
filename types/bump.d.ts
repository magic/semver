export function bump(
  v: string,
  options?: {
    major?: boolean | undefined
    minor?: boolean | undefined
    patch?: boolean | undefined
    beta?: boolean | undefined
    alpha?: boolean | undefined
  },
): Version | string
export type Version = import('./types.js').Version
