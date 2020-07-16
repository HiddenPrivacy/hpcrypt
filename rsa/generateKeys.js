import { encode } from '../utils/base64'
import wrap from '../utils/wrap'
import subtle from '../utils/subtle'
import { config } from '../'

/**
 * Generate RSA key pair and returns object with privateKey and publicKey encoded in PEM format
 * learn more: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey
 * @async
 * @returns {object}
 * @throws {Error}
 */

export default async function() {
  let cryptoKeyPair = await subtle.generateKey(config.rsa, true, [
    'encrypt',
    'decrypt'
  ])

  // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
  let privateKey = wrap(
    encode(await subtle.exportKey('pkcs8', cryptoKeyPair.privateKey)),
    'PRIVATE KEY'
  )
  let publicKey = wrap(
    encode(await subtle.exportKey('spki', cryptoKeyPair.publicKey)),
    'PUBLIC KEY'
  )

  return {
    privateKey,
    publicKey
  }
}
