import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Use publicKey to decrypt buffer with AES algorithm
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 * @async
 * @param {CryptoKey} key
 * @param {BufferSource} iv - the initialization vector
 * @param {BufferSource} cipherBuffer
 * @returns {BufferSource}
 * @throws {Error}
 */
export default async function(key, iv, cipherBuffer) {
  let tempAdditionalData = new Uint8Array(1)
  let buffer = await subtle.decrypt(
    {
      name: config.aes.name,
      iv: iv,
      tagLength: config.aes.tagLength,
      additionalData: tempAdditionalData
    },
    key,
    cipherBuffer
  )
  return buffer
}
