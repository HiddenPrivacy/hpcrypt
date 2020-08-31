import generateKey from './generateKey'
import exportKey from './exportKey'
import generateRandomBytes from '../generateRandomBytes'
import { config } from '../'

/**
 * Generate AES key and Initialization vector. Returns object {key, iv, hash} Hash can be used for import.
 * @async
 * @returns {Object}
 * @throws {Error}
 */
export default async function() {
  const key = await generateKey()
  const iv = generateRandomBytes(config.aes.ivSize)

  const bufferKey = await exportKey(key)
  const hash = new Uint8Array(iv.length + bufferKey.length)
  hash.set(iv)
  hash.set(bufferKey, config.aes.ivSize)

  return {key, iv, hash}
}
