import Benchmark from 'benchmark'

export default function benchmark (name, methods, params) {
  console.group(`Benchmarking ${name}`)

  const suite = new Benchmark.Suite()

  for (const [title, fn] of methods) {
    suite.add(title, () => fn.apply(null, params))
  }

  suite
    .on('cycle', (e) => console.info(String(e.target)))
    .on('complete', function () {
      const method = this
        .filter('fastest')
        .map('name')

      console.info(`  -> ${method} is the fastest`)
      console.groupEnd()
    })
    .run({ async: true })
}
