export const View = state => [
  h1(state.title),
  p(state.description),

  GitBadges('magic/semver'),

  h2({ id: 'getting-started' }, 'getting started'),
  p('be in a nodejs project.'),

  h3({ id: 'install' }, 'install'),
  Pre('npm i --save-dev @magic/semver'),

  h3({ id: 'usage' }, 'usage'),
  Pre(`
import semver from '@magic/semver'

// -alpha.0 is optional.
const version = '0.0.1-alpha.0'

const parsed = semver.parse(version)

// parsed === { major: 0, minor: 0, patch: 1, alpha: { string: 'alpha', version: 0 } }

const serialized = semver.serialize(parsed)

// version === serialized

`),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/log/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
