import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Use key and counter to encrypt buffer with AES algorithm
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 * @async
 * @param {CryptoKey} key
 * @param {BufferSource} iv - the initialization vector
 * @param {BufferSource} buffer
 * @returns {Uint8Array}
 * @throws {Error}
 */
export default async function(key, iv, buffer) {
  let tempAdditionalData = new Uint8Array(1)
  let cipherBuffer = await subtle.encrypt(
    {
      name: config.aes.name,
      iv: iv,
      tagLength: config.aes.tagLength,
      additionalData: tempAdditionalData
    },
    key,
    buffer
  )

  return new Uint8Array(cipherBuffer)
}
