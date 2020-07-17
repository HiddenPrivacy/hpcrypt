import decrypt from './decrypt'
import importPrivateKey from './importPrivateKey'
import { decode } from '../utils/base64'
import textDecode from '../utils/textDecode'

/**
 * Decrypt base64 encoded cipher with RSA algorithm and return it as string
 * @async
 * @param {string} privateKey - RSA private key in PEM format
 * @param {string} cipher - base64 encoded cipher
 * @returns {string} - decrypted text
 * @throws {Error}
 */
export default async function(privateKey, cipher) {
  let keyRSA = await importPrivateKey(privateKey)
  let buffer = await decrypt(keyRSA, decode(cipher))
  return textDecode(buffer)
}
