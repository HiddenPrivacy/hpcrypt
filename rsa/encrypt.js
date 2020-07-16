import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Use publicKey to encrypt buffer with RSA-OAEP algorithm
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
 * @async
 * @param {CryptoKey} publicKey
 * @param {BufferSource} buffer
 * @returns {Uint8Array}
 * @throws {Error}
 */
export default async function(publicKey, buffer) {
  if (buffer.length > config.max)
    throw `Buffer size should be max ${config.max}`

  let cipherBuffer = await subtle.encrypt(
    {
      name: config.rsa.name,
      hash: { name: config.rsa.hash } // has was added because MS Edge
    },
    publicKey,
    buffer
  )

  return new Uint8Array(cipherBuffer)
}
