import importKey from './importKey'

export default async function(privateKey) {
  return await importKey(privateKey, 'pkcs8', ['decrypt'])
}
