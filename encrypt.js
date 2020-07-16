import aes from './aes'
import rsa from './rsa'
import { config } from './'
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
  let keyAES = await aes.generateKey()
  let iv = generateRandomBytes(config.aes.ivSize)
  let hashAES = encode(await aes.encrypt(keyAES, iv, buffer))

  let bufferKey = await aes.exportKey(keyAES)
  let hash = new Uint8Array(iv.length + bufferKey.length)
  hash.set(iv)
  hash.set(bufferKey, config.aes.ivSize)

  let keyRSA = await rsa.importPublicKey(publicKey)
  let hashRSA = encode(await rsa.encrypt(keyRSA, hash))

  return [hashAES, hashRSA].join('@')
}
