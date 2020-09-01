import exportKey from './exportKey'
import { config } from '../'

/**
 * Export KeyIV (object contains AES Key and Initialization Vector) into single buffer (Uint8Array).
 * @async
 * @params {Object} keyIV - object contains AES Key and Initialization Vector
 * @returns {Uint8Array}
 * @throws {Error}
 */
export default async function(keyIV) {

  const bufferKey = await exportKey(keyIV.key)
  const buffer = new Uint8Array(keyIV.iv.length + bufferKey.length)
  buffer.set(keyIV.iv)
  buffer.set(bufferKey, config.aes.ivSize)

  return buffer
}
