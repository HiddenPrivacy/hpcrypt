import aes from './aes'
import rsa from './rsa'
import { decode } from './utils/base64'

/**
 * Decrypt base64 encoded cipher with AES and RSA algorithms and return it as BufferSource
 * @async
 * @param {string} privateKey - RSA private key in PEM format
 * @param {string} cipher - base64 encoded cipher
 * @returns {BufferSource} - decrypted buffer
 * @throws {Error}
 */
export default async function(privateKey, cipher) {
  const ciphers = cipher.split('@')
  const cipherBufferAES = decode(ciphers[0])
  const cipherBufferRSA = decode(ciphers[1])
  const keyRSA = await rsa.importPrivateKey(privateKey)
  const hash = await rsa.decrypt(keyRSA, cipherBufferRSA)

  const KVH = await aes.importHash(hash)
  return await aes.decrypt(KVH, cipherBufferAES)
}
