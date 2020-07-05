import benchmark from '../../lib/benchmark.js'

import loop from './rle.loop.js'
import regexp from './rle.regexp.js'

benchmark('Run-Length Encoding', [
  ['loop', loop],
  ['regexp', regexp]
], [
  'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'
])
