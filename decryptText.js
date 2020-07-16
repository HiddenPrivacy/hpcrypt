import decrypt from './decrypt'
import textDecode from './utils/textDecode'

/**
 * Decrypt base64 encoded cipher with AES and RSA algorithms and return it as string
 * @async
 * @param {string} privateKey - RSA private key in PEM format
 * @param {string} cipher - base64 encoded cipher
 * @returns {string} - decrypted text
 * @throws {Error}
 */
export default async function(privateKey, cipher) {
  let buffer = await decrypt(privateKey, cipher)
  return textDecode(buffer)
}
