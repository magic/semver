export const versions = {
  '0.0.1': { major: 0, minor: 0, patch: 1, demo: {}, v: '0.0.1' },
  '1.0.0': { major: 1, minor: 0, patch: 0, demo: {}, v: '1.0.0' },
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
  'string.0.1': { major: 'string', minor: 0, patch: 1, demo: {}, v: 'string.0.1' },
  '1.string.0': { major: 1, minor: 'string', patch: 0, demo: {}, v: '1.string.0' },
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
