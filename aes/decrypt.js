import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Use publicKey to decrypt buffer with AES algorithm
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 * @async
 * @param {Object} KVH -  object created with method importHash()
 * @param {CryptoKey} KVH.key - AES key
 * @param {BufferSource} KVH.iv - the initialization vector
 * @param {BufferSource} cipherBuffer
 * @returns {BufferSource}
 * @throws {Error}
 */
export default async function(KVH, cipherBuffer) {
  let tempAdditionalData = new Uint8Array(1)
  let buffer = await subtle.decrypt(
    {
      name: config.aes.name,
      iv: KVH.iv,
      tagLength: config.aes.tagLength,
      additionalData: tempAdditionalData
    },
    KVH.key,
    cipherBuffer
  )
  return buffer
}
