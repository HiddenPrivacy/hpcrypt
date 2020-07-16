import encrypt from './encrypt'
import textEncode from './utils/textEncode'

/**
 * Encrypt string with AES and RSA algorithms and return base64 encoded cipher
 * @async
 * @param {string} privateKey - RSA private key in PEM format
 * @param {string} text - string to encrypt
 * @returns {string} - base64 encoded cipher
 * @throws {Error}
 */
export default async function(privateKey, text) {
  let buffer = textEncode(text)
  return encrypt(privateKey, buffer)
}
