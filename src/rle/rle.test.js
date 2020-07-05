import loop from './rle.loop'
import regexp from './rle.regexp'

describe('Run-Length Encoding', () => {
  [
    { n: 'loop', fn: loop },
    { n: 'regular expression', fn: regexp }
  ]
    .forEach(({ n, fn }) => {
      describe(n, () => {
        [
          ['compresses an empty string', '', ''],
          ['compresses a single character', 'W', 'W'],
          ['compresses two different characters', 'XY', 'XY'],
          ['compresses char at the end', 'QRR', 'QR2'],
          ['compresses single char at the end', 'UUV', 'U2V'],
          ['compresses two compressable groups', 'EEFFF', 'E2F3'],
          ['compresses mixed string', 'KKLLLMNNNN', 'K2L3MN4']
        ]
          .forEach(([title, string, expected]) => {
            test(title, () => expect(fn(string)).toEqual(expected))
          })

        test(
          'throws an error for a string containing digits',
          () => expect(fn.bind(null, 'Y9Z')).toThrow(Error)
        )

        test(
          'throws an error for a string containing underscore',
          () => expect(fn.bind(null, 'X_X')).toThrow(Error)
        )
      })
    })
})
