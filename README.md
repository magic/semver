# @magic/semver

semantic version parsing and stringification

[html-docs](https://github.magic.io/semver)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/semver.svg
[npm-url]: https://www.npmjs.com/package/@magic/semver
[travis-image]: https://img.shields.io/travis/com/magic/semver/master
[travis-url]: https://travis-ci.com/magic/semver
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/semver/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/semver/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/semver/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/semver
[snyk-image]: https://snyk.io/test/github/magic/semver/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/semver

#### installation:

```javascript
npm install @magic/semver
```

#### usage:

```javascript
import semver from '@magic/semver'

// -alpha.0 is optional.
const version = '0.0.1-alpha.0'

const parsed = semver.parse(version)

// parsed === { major: 0, minor: 0, patch: 1, demo: { string: 'alpha', version: 0 }, v: '0.0.1-alpha.0' }

const serialized = semver.serialize(parsed)

// version === serialized
```

## API

### parse(version)

Parses a semver string into a `VersionResult` object.

**Parameters:**

- `version` (string): A semantic version string (e.g., `"1.2.3"`, `"1.2.3-alpha.0"`, `"v1.2.3"`)

**Returns:** `VersionResult` — An object with `major`, `minor`, `patch`, `demo`, and `v` properties.

```javascript
semver.parse('1.2.3')
// { major: 1, minor: 2, patch: 3, v: '1.2.3' }

semver.parse('1.2.3-alpha.0')
// { major: 1, minor: 2, patch: 3, demo: { string: 'alpha', version: 0 }, v: '1.2.3-alpha.0' }

semver.parse('v1.2.3')
// { major: 1, minor: 2, patch: 3, v: 'v1.2.3' }
```

### serialize(version)

**Aliases:** `stringify`

Converts a `Version` object back into a semver string.

**Parameters:**

- `version` (Version): An object with `major`, `minor`, and `patch` properties. Optional `demo` property for pre-release versions.

**Returns:** (string): The serialized semver string.

```javascript
semver.serialize({ major: 1, minor: 2, patch: 3 })
// '1.2.3'

semver.serialize({ major: 1, minor: 2, patch: 3, demo: { string: 'alpha', version: 0 } })
// '1.2.3-alpha.0'
```

### isSemver(value)

Type guard that checks if a value is a valid semver (either a string or object).

**Parameters:**

- `value` (unknown): The value to check.

**Returns:** (boolean): `true` if the value is a valid semver string or object.

```javascript
semver.isSemver('1.2.3') // true
semver.isSemver('1.2.3-alpha.0') // true
semver.isSemver({ major: 1, minor: 2, patch: 3 }) // true
semver.isSemver('not-a-version') // false
semver.isSemver(123) // false
```

### bump(version, options)

Increments a semver version. Returns a string if input was a string, or a `Version` object if input was an object.

**Parameters:**

- `version` (string | Version): The version to bump.
- `options` (object):
  - `options.major` (boolean): Bump major version, resets minor and patch.
  - `options.minor` (boolean): Bump minor version, resets patch.
  - `options.patch` (boolean): Bump patch version.
  - `options.alpha` (boolean): Set or increment alpha pre-release.
  - `options.beta` (boolean): Set or increment beta pre-release.

**Returns:** (string | Version): The bumped version in the same format as input.

```javascript
semver.bump('1.2.3', { major: true }) // '2.0.0'
semver.bump('1.2.3', { minor: true }) // '1.3.0'
semver.bump('1.2.3', { patch: true }) // '1.2.4'
semver.bump('1.2.3', { alpha: true }) // '1.2.4-alpha.0'
semver.bump('1.2.3-alpha.0', { alpha: true }) // '1.2.3-alpha.1'
semver.bump('1.2.3-alpha.0', { beta: true }) // '1.2.3-beta.0'
semver.bump('1.2.3', { beta: true }) // '1.2.4-beta.0'

// No options: increments alpha version if present, otherwise patch
semver.bump('1.2.3-alpha.0') // '1.2.3-alpha.1'
semver.bump('1.2.3') // '1.2.4'
```

### isBigger(a, b)

Compares two versions. Returns `true` if `a` is greater than `b`.

**Parameters:**

- `a` (string): First version string.
- `b` (string): Second version string.

**Returns:** (boolean): `true` if `a > b`.

```javascript
semver.isBigger('2.0.0', '1.0.0') // true
semver.isBigger('1.0.0', '1.0.0') // false
semver.isBigger('1.0.0-alpha', '1.0.0') // false (release > pre-release)
semver.isBigger('1.0.0-beta', '1.0.0-alpha') // true (beta > alpha)
```

### isSmaller(a, b)

Compares two versions. Returns `true` if `a` is less than `b`.

**Parameters:**

- `a` (string): First version string.
- `b` (string): Second version string.

**Returns:** (boolean): `true` if `a < b`.

```javascript
semver.isSmaller('1.0.0', '2.0.0') // true
semver.isSmaller('1.0.0', '1.0.0') // false
semver.isSmaller('1.0.0-alpha', '1.0.0') // true (pre-release < release)
```

### sort(versions)

Sorts an array of versions in ascending order according to semver spec (pre-releases come before releases, alpha < beta).

**Parameters:**

- `versions` (Array<string | Version>): An array of version strings or objects.

**Returns:** (Array<string | Version>): The sorted array, preserving input types.

```javascript
semver.sort(['1.0.0', '2.0.0-alpha', '1.0.0-alpha.0', '2.0.0'])
// ['1.0.0-alpha.0', '1.0.0', '2.0.0-alpha', '2.0.0']

semver.sort(['1.2.3', '1.2.0', '1.3.0'])
// ['1.2.0', '1.2.3', '1.3.0']
```

## Types

```typescript
type Version = {
  major: number
  minor: number
  patch: number
  demo?: {
    string: string // 'alpha' or 'beta'
    version: number
  }
}

type VersionResult = Version & { v: string }
```

##### changelog

##### 0.0.1

first release

##### 0.0.2

add bump and isSemver

##### 0.0.3

handle -alpha and -beta separately to stop decrementing the version by mistake.

##### 0.0.4

fix behaviour of appending -alpha.0 and -beta.0.
these two edgecases also bump patch version now.

##### 0.0.5

add isBigger and isSmaller version comparison

##### 0.0.6

remove @magic/fs

##### 0.0.7

bump required node version to 14.2.0

##### 0.0.8

update dependencies

##### 0.0.9

- bump required node version to 14.15.4
- update dependencies

##### 0.0.10

- update README
- bump dev dependencies

##### 0.0.11

update dependencies

##### 0.0.12

update dependencies

##### 0.0.13

update dependencies

##### 0.0.14

update dependencies

##### 0.0.15

update dependencies

##### 0.0.16

update dependencies

##### 0.0.17

- add typescript
- update dependencies

##### 0.0.18

- fix handling a v in front of the version, eg v0.0.1

##### 0.0.19

- better type exports

##### 0.0.20

- add sort function, sorts arrays of versions
- add documentation to README.md
- update dependencies

##### 0.0.21

- update dependencies

##### 0.0.22 - unreleased

...
