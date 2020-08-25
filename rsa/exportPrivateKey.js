import { encode } from '../utils/base64'
import wrap from '../utils/wrap'
import subtle from '../utils/subtle'

/**
 * Export Privte Key in PEM format
 * @param {CryptoKey} privateKey 
 */
export default async function(privateKey) {
  // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/exportKey
  return  wrap(
    encode(await subtle.exportKey('pkcs8', privateKey)),
    'PRIVATE KEY'
  )
}