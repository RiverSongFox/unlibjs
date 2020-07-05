const ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const E_INPUT_TYPE = 'Input value is not a string'
const E_INVALID_CHAR = 'String contains an invalid character'

export default function rle (str) {
  // Return undefined if there is no input
  if (str === undefined) { return undefined }

  // Check if the input contains a string
  if (typeof str !== 'string') throw new Error(E_INPUT_TYPE)

  // Handle empty strings
  if (str.length === 0) return ''

  let code = ''

  let previous = str[0]
  let count = 1

  for (let i = 1; i < str.length; i++) {
    const char = str[i]

    if (!ALLOWED_CHARS.includes(char)) {
      throw new Error(E_INVALID_CHAR)
    }

    if (previous === char) {
      count += 1
      continue
    }

    // Write a single character as is, i.e. just W instead of W1
    code += previous + (count > 1 ? count : '')

    previous = char
    count = 1
  }

  // Handle the last single character
  if (previous) {
    code += previous + (count > 1 ? count : '')
  }

  return code
}
