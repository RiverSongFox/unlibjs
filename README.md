# unlib.js

> Although the library may be useful for solving real life problems, it has been created primarily for educational purposes.

The content of **unlib.js** originates from various JavaScript interview tasks, and therefore provides information on different algorithms and coding techniques. You are encouraged to contribute to the knowledge, including:

1. Suggest new functionality via Issues
2. Write new or work on existing implementations
3. Add new tests; we use Jest
4. Analyze and improve performance of library functions

## Methods

### [online](src/online/)

For given lists of presence hours of several users, returns the intervals when all of them were online.

```js
unlibjs.online(
  [[8, 12], [17, 22]],
  [[5, 11], [14, 18], [20, 23]]
) // -> [[8, 11], [17, 18], [20, 22]]
```

### [rle](src/rle/)

Implements a [Run-Length Encoding](https://en.wikipedia.org/wiki/Run-length_encoding) algorithm on A-Z strings.

```js
unlibjs.rle('ABBCCC') // -> AB2C3
```
