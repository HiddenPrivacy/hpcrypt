import subtle from '../utils/subtle'

/**
 * Export AES key
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
 * @async
 * @params {CryptoKey} key
 * @returns {Int8Array}
 * @throws {Error}
 */
export default async function(key) {
  let arrayBuffer = await subtle.exportKey('raw', key)
  return new Uint8Array(arrayBuffer)
}
