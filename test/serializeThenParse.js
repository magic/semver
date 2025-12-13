import { parse, serialize } from '../src/index.js'

import { versions } from './.data/versions.js'

export default Object.entries(versions).map(([version]) => ({
  fn: serialize(parse(serialize(parse(version)))),
  expect: version,
  info: `${version} survives parse -> serialize -> parse -> serialize`,
}))
