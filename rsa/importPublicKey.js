import importKey from './importKey'

export default async function(publicKey) {
  return await importKey(publicKey, 'spki', ['encrypt'])
}
