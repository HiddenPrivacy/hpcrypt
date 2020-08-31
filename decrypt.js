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
  let ciphers = cipher.split('@')
  let cipherBufferAES = decode(ciphers[0])
  let cipherBufferRSA = decode(ciphers[1])
  let keyRSA = await rsa.importPrivateKey(privateKey)
  let hash = await rsa.decrypt(keyRSA, cipherBufferRSA)

  const KVH = await aes.importHash(hash)
  return await aes.decrypt(KVH, cipherBufferAES)
}
