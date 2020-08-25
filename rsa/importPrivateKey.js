import importKey from './importKey'

export default async function(privateKey, extractable=false) {
  return await importKey(privateKey, 'pkcs8', ['decrypt'], extractable)
}
