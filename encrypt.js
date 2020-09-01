import aes from './aes'
import rsa from './rsa'
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
  const aesKeyIV = await aes.generateKeyIV()
  const hashAES = encode(await aes.encrypt(aesKeyIV, buffer))

  const keyRSA = await rsa.importPublicKey(publicKey)
  const hashRSA = encode(await rsa.encrypt(keyRSA, await aes.exportKeyIV(aesKeyIV)))

  return [hashAES, hashRSA].join('@')
}
