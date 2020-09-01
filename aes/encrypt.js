import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Use key and counter to encrypt buffer with AES algorithm
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 * @async
 * @param {Object} keyIV - object created with method generateKeyIV()
 * @param {CryptoKey} keyIV.key - AES key
 * @param {BufferSource} keyIV.iv - the initialization vector
 * @param {BufferSource} buffer
 * @returns {Uint8Array}
 * @throws {Error}
 */
export default async function(keyIV, buffer) {
  const tempAdditionalData = new Uint8Array(config.aes.addSize)
  const cipherBuffer = await subtle.encrypt(
    {
      name: config.aes.name,
      iv: keyIV.iv,
      tagLength: config.aes.tagLength,
      additionalData: tempAdditionalData
    },
    keyIV.key,
    buffer
  )

  return new Uint8Array(cipherBuffer)
}
