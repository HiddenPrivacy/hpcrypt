import importKey from './importKey'
import { config } from '../'

/**
 * Use hash to create AES key and Initialization vector. Returns object {key, iv}
 * @async
 * @params {Int8Array} hash
 * @returns {Object}
 * @throws {Error}
 */
export default async function(hash) {
  const iv = hash.slice(0, config.aes.ivSize)
  const key = await importKey(hash.slice(config.aes.ivSize))

  return {key, iv}
}
