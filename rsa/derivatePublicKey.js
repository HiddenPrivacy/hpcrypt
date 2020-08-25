import importPrivateKey from './importPrivateKey'
import subtle from '../utils/subtle'
import exportPublicKey from './exportPublicKey';
import { config } from '../'

export default async function(privateKey) {
  const key = await importPrivateKey(privateKey, true);
  const jwk = JSON.parse(JSON.stringify(await subtle.exportKey("jwk", key)));
  
  jwk.key_ops = ["encrypt"];
  delete jwk.d;
  delete jwk.dp;
  delete jwk.dq;
  delete jwk.p;
  delete jwk.q;
  delete jwk.qi;


  const key2 = await subtle.importKey(
    "jwk", //format
    jwk, //keyData
    {
      name: config.rsa.name,
      hash: config.rsa.hash
    },
    true, // extractable
    ["encrypt"]
  )

  console.log(key2)

  return await exportPublicKey(key2)
}