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
  let aesKVH = await aes.generateKVH()
  let hashAES = encode(await aes.encrypt(aesKVH, buffer))

  let keyRSA = await rsa.importPublicKey(publicKey)
  let hashRSA = encode(await rsa.encrypt(keyRSA, aesKVH.hash))

  return [hashAES, hashRSA].join('@')
}
