import iesubtle from './iesubtle'

let subtle

if (window.crypto) subtle = window.crypto.subtle
else {
  console.log('fallback to msCrypto')
  subtle = iesubtle
}

export default subtle
