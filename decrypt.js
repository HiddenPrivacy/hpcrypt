import aes from './aes'
import rsa from './rsa'
import { config } from './'
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
  let ivAndKey = await rsa.decrypt(keyRSA, cipherBufferRSA)

  let iv = ivAndKey.slice(0, config.aes.ivSize)
  let key = await aes.importKey(ivAndKey.slice(config.aes.ivSize))
  return await aes.decrypt(key, iv, cipherBufferAES)
}
