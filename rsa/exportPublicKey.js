import { encode } from '../utils/base64'
import wrap from '../utils/wrap'
import subtle from '../utils/subtle'

/**
 * Export Public Key in PEM format
 * @param {CryptoKey} publicKey 
 */
export default async function(publicKey) {
  // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
  return wrap(
    encode(await subtle.exportKey('spki', publicKey)),
    'PUBLIC KEY'
  )
}