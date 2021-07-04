<!-- Title -->
<h1 align="center">
  flocky
</h1>

<!-- Description -->
<h4 align="center">
  A utility library with clarity and efficiency at the core. 0 dependencies.
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@devoxa/flocky">
    <img
      src="https://img.shields.io/npm/v/@devoxa/flocky?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://github.com/devoxa/flocky/actions?query=branch%3Amaster+workflow%3A%22Continuous+Integration%22">
    <img
      src="https://img.shields.io/github/workflow/status/devoxa/flocky/Continuous%20Integration?style=flat-square"
      alt="Build Status"
    />
  </a>

  <a href="https://codecov.io/github/devoxa/flocky">
    <img
      src="https://img.shields.io/codecov/c/github/devoxa/flocky/master?style=flat-square"
      alt="Code Coverage"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#api-reference">API Reference</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<br>

## Installation

```bash
yarn add @devoxa/flocky
```

## Usage

```ts
import { sum } from 'flocky'
sum([1, 2, 3])
// -> 6
```

## API Reference

<!-- prettier-ignore-start -->
<!-- START GENERATED FROM FILES -->
### average(array)

Compute the average of the values in an array.

```js
flocky.average([1, 4, 2, -4, 0])
// -> 0.6
```

<sup>[Source](./src/average/index.ts) • Minify: 77 B • Minify & GZIP: 79 B<sup>

### chunk(array, size)

Split an array of elements into groups of `size`.
If the array can't be split evenly, the final chunk will contain the remaining elements.

```js
flocky.chunk([1, 2, 3, 4, 5, 6, 7], 3)
// -> [[1, 2, 3], [4, 5, 6], [7]]
```

<sup>[Source](./src/chunk/index.ts) • Minify: 103 B • Minify & GZIP: 97 B<sup>

### clone(value)

Create a deep clone of `value`.
This method only supports types native to JSON, so all primitive types, arrays and objects.

```js
const original = [{ a: 1 }, { b: 2 }]
const clone = flocky.clone(original)
original[0] === clone[0]
// -> false
```

<sup>[Source](./src/clone/index.ts) • Minify: 69 B • Minify & GZIP: 69 B<sup>

### compact(array)

Create an array with all falsy (`undefined`, `null`, `false`, `0`, `NaN`, `''`) values removed.

```js
flocky.compact([1, 2, 3, null, 4, false, 0, NaN, 5, ''])
// -> [1, 2, 3, 4, 5]
```

<sup>[Source](./src/compact/index.ts) • Minify: 61 B • Minify & GZIP: 64 B<sup>

### debounce(func, wait)

Creates a debounced function that delays invoking `func` until `wait` milliseconds
have elapsed since the last time the debounced function was invoked.

```js
const func = () => console.log('Heavy processing happening')
const debouncedFunc = flocky.debounce(func, 250)
```

<sup>[Source](./src/debounce/index.ts) • Minify: 138 B • Minify & GZIP: 117 B<sup>

### duplicates(array, identity?)

Create a version of an array, in which only the duplicated elements are kept.
The order of result values is determined by the order they occur in the array.
Can be passed an optional `identity` function to select the identifying part of objects.

```js
flocky.duplicates([1, 1, 2, 4, 2, 1, 6])
// -> [1, 2, 1]

flocky.duplicates(['foo', 'bar', 'foo', 'foobar'])
// -> ['foo']

const input = [{ id: 1, a: 1 }, { id: 1, a: 2 }, { id: 2, a: 3 }, { id: 1, a: 4 }]
flocky.duplicates(input, (element) => element.id)
// -> [{ id: 1, a: 2 }, { id: 1, a: 4 }]
```

<sup>[Source](./src/duplicates/index.ts) • Minify: 277 B • Minify & GZIP: 147 B<sup>

### escapeRegExp(string)

Escapes special characters in a string for use in a regular expression.

```js
flocky.escapeRegExp('Hey. (1 + 1 = 2)')
// -> 'Hey\\. \\(1 \\+ 1 = 2\\)'
```

<sup>[Source](./src/escapeRegExp/index.ts) • Minify: 93 B • Minify & GZIP: 90 B<sup>

### get(object, path, defaultValue?)

Get the value at a `path` of an `object` (with an optional `defaultValue`)

:warning: **Using this method will ignore type information, and you will have
to type the return type yourself. If you can, it is always better to access
properties directly, for example with the "optional chaining" operator.**

```js
const object = {a: {b: {c: 1}}}
flocky.get(object, 'a.b.c')
// -> 1

const object = {a: {b: {c: 1}}}
flocky.get(object, 'x.x.x')
// -> undefined

const object = {a: {b: {c: 1}}}
flocky.get(object, 'x.x.x', 'default')
// -> 'default'
```

<sup>[Source](./src/get/index.ts) • [Benchmark](./src/get/BENCHMARK.md) • Minify: 400 B • Minify & GZIP: 261 B<sup>

### hash(data)

Create a hashed string representation of the passed in data.

:warning: **This function is not cryptographically secure, use [bcrypt](https://www.npmjs.com/package/bcrypt)
for anything security related.**

```js
flocky.hash('some really long string')
// -> 'x1nr7uiv'

flocky.hash({id: 'AAA', name: 'BBB'})
// -> 'x16mynva'
```

<details>
  <summary>Implementation Details</summary>

  This method uses Murmur3 because it is small, fast and has fairly good
  collision characteristics (about 1 in 36000).

  - https://softwareengineering.stackexchange.com/questions/49550
  - https://github.com/VowpalWabbit/vowpal_wabbit/wiki/murmur2-vs-murmur3
  - https://en.wikipedia.org/wiki/MurmurHash
  - https://github.com/whitequark/murmurhash3-js/blob/master/murmurhash3.js
</details>

<sup>[Source](./src/hash/index.ts) • [Benchmark](./src/hash/BENCHMARK.md) • Minify: 548 B • Minify & GZIP: 332 B<sup>

### identifier()

Generate a random identifier with UUID v4 format.

```js
flocky.identifier()
// -> 'bfc8d57e-b9ab-4245-836e-d1fd99602e30'
```

<sup>[Source](./src/identifier/index.ts) • Minify: 275 B • Minify & GZIP: 196 B<sup>

### matchAll(regExp, string)

Find all matches of a regular expression in a string.

```js
flocky.matchAll(/f(o+)/g, 'foo bar baz foooo bar')
// -> [
// ->   { match: 'foo', subMatches: ['oo'], index: 0 },
// ->   { match: 'foooo', subMatches: ['oooo'], index: 12 },
// -> ]
```

<sup>[Source](./src/matchAll/index.ts) • Minify: 178 B • Minify & GZIP: 133 B<sup>

### max(array)

Compute the maximum of the values in an array.

```js
flocky.max([1, 4, 2, -3, 0])
// -> 4
```

<sup>[Source](./src/max/index.ts) • Minify: 58 B • Minify & GZIP: 63 B<sup>

### memoize(func, options?)

Creates a function that memoizes the result of `func`.

```js
const func = (a, b) => a + b
const memoizedFunc = flocky.memoize(func)
const memoizedFuncWithTtl = flocky.memoize(func, { ttl: 30 * 1000 })
```

<details>
  <summary>Implementation Details</summary>

  This method's implementation is based on [fast-memoize](https://github.com/caiogondim/fast-memoize.js), with some improvements for variadic
  performance and additional support for a TTL based cache.
</details>

<sup>[Source](./src/memoize/index.ts) • [Benchmark](./src/memoize/BENCHMARK.md) • Minify: 817 B • Minify & GZIP: 400 B<sup>

### min(array)

Compute the minimum of the values in an array.

```js
flocky.min([1, 4, 2, -3, 0])
// -> -3
```

<sup>[Source](./src/min/index.ts) • Minify: 58 B • Minify & GZIP: 63 B<sup>

### omit(object, keys)

Create an object composed of all existing keys that are not specified in `keys`.

```js
const object = { a: 1, b: 2, c: 3 }
flocky.omit(object, ['a'])
// -> { b: 2, c: 3 }
```

<sup>[Source](./src/omit/index.ts) • [Benchmark](./src/omit/BENCHMARK.md) • Minify: 143 B • Minify & GZIP: 126 B<sup>

### pick(object, keys)

Create an object composed of the specified `keys`.

```js
const object = { a: 1, b: 2, c: 3 }
flocky.pick(object, ['a', 'c'])
// -> { a: 1, c: 3 }
```

<sup>[Source](./src/pick/index.ts) • Minify: 78 B • Minify & GZIP: 82 B<sup>

### random(lower, upper, float?)

Generate a random number between `lower` and `upper` (inclusive).
If `float` is true or `lower` or `upper` is a float, a float is returned instead of an integer.

```js
flocky.random(1, 10)
// -> 8

flocky.random(1, 20, true)
// -> 14.94849340769861

flocky.random(2.5, 3.5)
// -> 3.2341312319841373
```

<sup>[Source](./src/random/index.ts) • Minify: 219 B • Minify & GZIP: 128 B<sup>

### randomString(length)

Generate a random alphanumeric string with length `length`.

```js
flocky.randomString(5)
// -> 'tfl0g'
```

<sup>[Source](./src/randomString/index.ts) • Minify: 245 B • Minify & GZIP: 207 B<sup>

### roundTo(number, precision)

Round a floating point number to `precision` decimal places.

```js
flocky.roundTo(3.141592653589, 4)
// -> 3.1416

flocky.roundTo(1.005, 2)
// -> 1.01

flocky.roundTo(1111.1, -2)
// -> 1100
```

<details>
  <summary>Implementation Details</summary>

  This method avoids floating-point errors by adjusting the exponent part of
  the string representation of a number instead of multiplying and dividing
  with powers of 10. The implementation is based on [this example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round$revision/1383484#A_better_solution)
  by Lam Wei Li.
</details>

<sup>[Source](./src/roundTo/index.ts) • Minify: 209 B • Minify & GZIP: 150 B<sup>

### sample(array)

Get a random element from the `array`.

```js
flocky.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// -> 8
```

<sup>[Source](./src/sample/index.ts) • Minify: 79 B • Minify & GZIP: 79 B<sup>

### shuffle(array)

Create an array of shuffled values, using a version of the
[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm).

```js
flocky.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// -> [3, 7, 2, 1, 10, 4, 6, 9, 5, 8]
```

<sup>[Source](./src/shuffle/index.ts) • Minify: 156 B • Minify & GZIP: 133 B<sup>

### sleep(ms)

Return a promise that waits for `ms` milliseconds before resolving.

```js
await flocky.sleep(25)
```

<sup>[Source](./src/sleep/index.ts) • Minify: 73 B • Minify & GZIP: 78 B<sup>

### slugify(string)

Generate a URL-safe slug of a string.

```js
flocky.slugify(' Issue #123 is _important_! :)')
// -> 'issue-123-is-important'
```

<sup>[Source](./src/slugify/index.ts) • Minify: 114 B • Minify & GZIP: 104 B<sup>

### sum(array)

Compute the sum of the values in an array.

```js
flocky.sum([1, 4, 2, -4, 0])
// -> 3
```

<sup>[Source](./src/sum/index.ts) • Minify: 60 B • Minify & GZIP: 67 B<sup>

### toMap(array, key, target?)

Create a lookup map out of an `array` of objects, with a lookup `key` and an optional `target`.

```js
flocky.toMap(
  [
    { id: 1, name: 'Stanley', age: 64 },
    { id: 2, name: 'Juliet', age: 57 },
    { id: 3, name: 'Alex', age: 19 }
  ],
  'id'
)
// -> {
// ->   1: { id: 1, name: 'Stanley', age: 64 },
// ->   2: { id: 2, name: 'Juliet', age: 57 },
// ->   3: { id: 3, name: 'Alex', age: 19 }
// -> }

flocky.toMap(
  [
    { id: 1, name: 'Stanley', age: 64 },
    { id: 2, name: 'Juliet', age: 57 },
    { id: 3, name: 'Alex', age: 19 }
  ],
  'name',
  'age'
)
// -> { Stanley: 64, Juliet: 57, Alex: 19 }
```

<sup>[Source](./src/toMap/index.ts) • Minify: 93 B • Minify & GZIP: 93 B<sup>

### unique(array, identity?)

Create a duplicate-free version of an array, in which only the first occurrence of each element is kept.
The order of result values is determined by the order they occur in the array.
Can be passed an optional `identity` function to select the identifying part of objects.

```js
flocky.unique([1, 1, 2, 4, 2, 1, 6])
// -> [1, 2, 4, 6]

flocky.unique(['foo', 'bar', 'foo', 'foobar'])
// -> ['foo', 'bar', 'foobar']

const input = [{ id: 1, a: 1 }, { id: 1, a: 2 }, { id: 2, a: 3 }, { id: 1, a: 4 }]
flocky.unique(input, (element) => element.id)
// -> [{ id: 1, a: 1 }, { id: 2, a: 3 }]
```

<sup>[Source](./src/unique/index.ts) • [Benchmark](./src/unique/BENCHMARK.md) • Minify: 238 B • Minify & GZIP: 153 B<sup>

<!-- END GENERATED FROM FILES -->
<!-- prettier-ignore-end -->

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.david-reess.de"><img src="https://avatars3.githubusercontent.com/u/4615516?v=4?s=75" width="75px;" alt=""/><br /><sub><b>David Reeß</b></sub></a><br /><a href="https://github.com/devoxa/flocky/commits?author=queicherius" title="Code">💻</a> <a href="https://github.com/devoxa/flocky/commits?author=queicherius" title="Documentation">📖</a> <a href="https://github.com/devoxa/flocky/commits?author=queicherius" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/atjeff"><img src="https://avatars1.githubusercontent.com/u/10563763?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Jeff Hage</b></sub></a><br /><a href="https://github.com/devoxa/flocky/commits?author=atjeff" title="Code">💻</a></td>
    <td align="center"><a href="https://gw2treasures.com/"><img src="https://avatars2.githubusercontent.com/u/2511547?v=4?s=75" width="75px;" alt=""/><br /><sub><b>darthmaim</b></sub></a><br /><a href="https://github.com/devoxa/flocky/commits?author=darthmaim" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT
