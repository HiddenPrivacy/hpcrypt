import importKey from './importKey'
import { config } from '../'

/**
 * Import Use buffer to create AES key and Initialization vector. Returns object {key, iv}
 * @async
 * @params {Int8Array} buffer
 * @returns {Object}
 * @throws {Error}
 */
export default async function(buffer) {
  const iv = buffer.slice(0, config.aes.ivSize)
  const key = await importKey(buffer.slice(config.aes.ivSize))

  return {key, iv}
}
