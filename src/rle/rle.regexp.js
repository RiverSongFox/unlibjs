const E_INVALID_CHAR = 'String contains an invalid character'

export default function rle (str) {
  if (!/^[A-Z]*$/.test(str)) {
    throw new Error(E_INVALID_CHAR)
  }

  return str.replace(/(.)\1+/g, group => (group[0] + group.length))
}
