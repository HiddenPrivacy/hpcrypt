/**
 * Generate Uint8Array array of given size filled with cryptographically strong random numbers
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
 * @param {number} size - array size
 * @returns {Uint8Array}
 */

export default function(size) {
  let typedArray = new Uint8Array(size)
  window.crypto.getRandomValues(typedArray)

  return typedArray
}
