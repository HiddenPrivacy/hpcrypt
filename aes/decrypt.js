import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Use publicKey to decrypt buffer with AES algorithm
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 * @async
 * @param {Object} keyIV -  object created with method importHash()
 * @param {CryptoKey} keyIV.key - AES key
 * @param {BufferSource} keyIV.iv - the initialization vector
 * @param {BufferSource} cipherBuffer
 * @returns {BufferSource}
 * @throws {Error}
 */
export default async function(keyIV, cipherBuffer) {
  const tempAdditionalData = new Uint8Array(1)
  const buffer = await subtle.decrypt(
    {
      name: config.aes.name,
      iv: keyIV.iv,
      tagLength: config.aes.tagLength,
      additionalData: tempAdditionalData
    },
    keyIV.key,
    cipherBuffer
  )
  return buffer
}
