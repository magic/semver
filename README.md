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

// parsed === { major: 0, minor: 0, patch: 1, demo: { string: 'alpha', version: 0 } }

const serialized = semver.serialize(parsed)

// version === serialized

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
* bump required node version to 14.15.4
* update dependencies

##### 0.0.10
* update README
* bump dev dependencies

##### 0.0.11 - unreleased
...
