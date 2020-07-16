import subtle from '../utils/subtle'
import { decode } from '../utils/base64'
import unwrap from '../utils/unwrap'
import { config } from '../'

export default async function(keyBuffer, format, usage) {
  if (!keyBuffer) throw 'Key is Empty'

  // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey
  return await subtle.importKey(
    format, //format
    decode(unwrap(keyBuffer)), //keyData
    {
      name: config.rsa.name,
      hash: config.rsa.hash
    },
    false, //extractable
    usage
  )
}
