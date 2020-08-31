import encrypt from './encrypt'
import textEncode from './utils/textEncode'

/**
 * Encrypt string with AES and RSA algorithms and return base64 encoded cipher
 * @async
 * @param {string} publicKey - RSA private key in PEM format
 * @param {string} text - string to encrypt
 * @returns {string} - base64 encoded cipher
 * @throws {Error}
 */
export default async function(publicKey, text) {
  const buffer = textEncode(text)
  return encrypt(publicKey, buffer)
}
