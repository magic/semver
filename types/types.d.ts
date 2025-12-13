export type Version = {
  major: number
  minor: number
  patch: number
  demo?: {
    string: string
    version: number
  }
}
export type VersionResult = Version & {
  v: string
}
