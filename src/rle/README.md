# Run-Length Encoding

Implements [RLE](https://en.wikipedia.org/wiki/Run-length_encoding) compression algorithm with the following restrictions:

1. Algorithm operates with strings consisting of A-Z characters
2. Character case is ignored
3. Lengths are written next to characters, i.e. `W12`

## Example

```
const s = 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW'
unlibjs.rle(s) // -> 12W1B12W3B24W1B14W
```
