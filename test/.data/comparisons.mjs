export const comparisons = [
  // major
  ['1.10.9', '0.999.999'],
  ['2.0.0-alpha.0', '0.999.999'],
  ['1.0.0', '0.999.999'],
  ['1.0.0-alpha.0', '0.999.999'],
  ['1.0.0', '1.0.0-alpha.0'],

  // minor
  ['0.10.9', '0.9.0'],
  ['0.1.0', '0.0.1'],
  ['0.10.9', '0.9.999'],
  ['0.2.0', '0.2.0-alpha.0'],

  // patch
  ['0.0.2',  '0.0.1'],
  ['0.1.2',  '0.1.1'],
  ['0.1.10', '0.1.9'],

  // demo
  ['0.0.1-alpha.1', '0.0.1-alpha.0'],
  ['0.0.1-beta.0', '0.0.1-alpha.999'],
  ['0.0.1-alpha.10', '0.0.1-alpha.9'],
  ['0.0.2', '0.0.2-alpha.2'],
]

export const smallerComparisons = [
  ['0.0.1', '0.0.1'],
  ['1.1.1', '1.1.1'],
  ['1.1.1-alpha.1', '1.1.1-alpha.1'],
  ['23.5.23-alpha.5', '23.5.23-alpha.5'],
]
