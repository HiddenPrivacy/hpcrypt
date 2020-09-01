import generateKey from './generateKey'
import generateRandomBytes from '../generateRandomBytes'
import { config } from '../'

/**
 * Generate keyIV (object contains AES Key and Initialization Vector). Returns object {key, iv} Hash can be used for import.
 * @async
 * @returns {Object}
 * @throws {Error}
 */
export default async function() {
  const key = await generateKey()
  const iv = generateRandomBytes(config.aes.ivSize)

  return {key, iv}
}
