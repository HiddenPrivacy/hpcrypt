import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Import AES key
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
 * @async
 * @params {Int8Array} keyData
 * @returns {CryptoKey}
 * @throws {Error}
 */
export default async function(keyData) {
  return await subtle.importKey(
    'raw',
    keyData,
    {
      name: config.aes.name,
      length: config.aes.length
    },
    true,
    ['encrypt', 'decrypt']
  )
}
