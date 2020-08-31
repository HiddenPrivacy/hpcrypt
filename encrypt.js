import aes from './aes'
import rsa from './rsa'
import generateRandomBytes from './generateRandomBytes'
import { encode } from './utils/base64'

/**
 * Encrypt buffer with AES and RSA algorithms and return base64 encoded cipher
 * @async
 * @param {string} publicKey - RSA public key in PEM format
 * @param {BufferSource} buffer - buffer to encrypt
 * @returns {string} - base64 encoded cipher
 * @throws {Error}
 */
export default async function(publicKey, buffer) {
  const aesKVH = await aes.generateKVH()
  const hashAES = encode(await aes.encrypt(aesKVH, buffer))

  const keyRSA = await rsa.importPublicKey(publicKey)
  const hashRSA = encode(await rsa.encrypt(keyRSA, aesKVH.hash))

  return [hashAES, hashRSA].join('@')
}
