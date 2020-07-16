import rsa from './rsa'
import aes from './aes'
import decryptText from './decryptText'
import encryptText from './encryptText'
import encrypt from './encrypt'
import decrypt from './decrypt'
import generateRandomBytes from './generateRandomBytes'

export const config = {
  max: 382,
  rsa: {
    name: 'RSA-OAEP',
    hash: 'SHA-512',
    modulusLength: 4096,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]) //65537
  },
  aes: {
    name: 'AES-GCM',
    length: 256,
    tagLength: 128,
    ivSize: 12 // 12 bytes / 96 bites
  }
}

export {
  decrypt,
  decryptText,
  encrypt,
  encryptText,
  rsa,
  aes,
  generateRandomBytes
}
export default {
  decrypt,
  decryptText,
  encrypt,
  encryptText,
  rsa,
  aes,
  generateRandomBytes
}
