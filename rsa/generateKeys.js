import subtle from '../utils/subtle'
import exportPrivateKey from './exportPrivateKey'
import exportPublicKey from './exportPublicKey'
import { config } from '../'

/**
 * Generate RSA key pair and returns object with privateKey and publicKey encoded in PEM format
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
 * @async
 * @returns {object}
 * @throws {Error}
 */

export default async function() {
  const cryptoKeyPair = await subtle.generateKey(config.rsa, true, [
    'encrypt',
    'decrypt'
  ])


  const privateKey = await exportPrivateKey(cryptoKeyPair.privateKey)
  const publicKey = await exportPublicKey(cryptoKeyPair.publicKey)

  return {
    privateKey,
    publicKey
  }
}
