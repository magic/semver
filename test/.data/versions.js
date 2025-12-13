export const versions = {
  'v0.0.1': { major: 0, minor: 0, patch: 1, v: 'v0.0.1' },
  'v2.3.1': { major: 2, minor: 3, patch: 1, v: 'v2.3.1' },
  'v9.9.9': { major: 9, minor: 9, patch: 9, v: 'v9.9.9' },
  'v1.2.3': { major: 1, minor: 2, patch: 3, v: 'v1.2.3' },
  'v5.44.33': { major: 5, minor: 44, patch: 33, v: 'v5.44.33' },
  'v11.22.33': { major: 11, minor: 22, patch: 33, v: 'v11.22.33' },
  'v111.222.333': { major: 111, minor: 222, patch: 333, v: 'v111.222.333' },
  'v111.222.333-alpha.1': {
    major: 111,
    minor: 222,
    patch: 333,
    demo: { string: 'alpha', version: 1 },
    v: 'v111.222.333-alpha.1',
  },
  'v111.222.333-beta.1': {
    major: 111,
    minor: 222,
    patch: 333,
    demo: { string: 'beta', version: 1 },
    v: 'v111.222.333-beta.1',
  },
  'v111.222.333-charlie.1': {
    major: 111,
    minor: 222,
    patch: 333,
    demo: { string: 'charlie', version: 1 },
    v: 'v111.222.333-charlie.1',
  },
  'v111.222.333-gamma.1': {
    major: 111,
    minor: 222,
    patch: 333,
    demo: { string: 'gamma', version: 1 },
    v: 'v111.222.333-gamma.1',
  },

  '0.0.1': { major: 0, minor: 0, patch: 1, v: '0.0.1' },
  '1.0.0': { major: 1, minor: 0, patch: 0, v: '1.0.0' },
  '0.23.5-alpha.12': {
    major: 0,
    minor: 23,
    demo: { string: 'alpha', version: 12 },
    patch: 5,
    v: '0.23.5-alpha.12',
  },
  '1.5.23-beta.42': {
    major: 1,
    minor: 5,
    demo: { string: 'beta', version: 42 },
    patch: 23,
    v: '1.5.23-beta.42',
  },
}

export const broken = {
  'string.0.1': { major: 'string', minor: 0, patch: 1, v: 'string.0.1' },
  '1.string.0': { major: 1, minor: 'string', patch: 0, v: '1.string.0' },
  '0.23.string-alpha.12': {
    major: 0,
    minor: 23,
    demo: { string: 'alpha', version: 12 },
    patch: 'string',
    v: '0.23.string-alpha.12',
  },
  '1.5.23-beta.string': {
    major: 1,
    minor: 5,
    demo: { string: 'beta', version: 'string' },
    patch: 23,
    v: '1.5.23-beta.string',
  },
}
