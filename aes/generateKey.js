import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Generate AES key
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
 * @async
 * @returns {CryptoKey}
 * @throws {Error}
 */
export default async function() {
  let cryptoKey = await subtle.generateKey(
    {
      name: config.aes.name,
      length: config.aes.length
    },
    true,
    ['encrypt', 'decrypt']
  )
  return cryptoKey
}
