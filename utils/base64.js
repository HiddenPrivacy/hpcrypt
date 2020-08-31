function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

function str2ab(str) {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export function encode(buf) {
  const AsString = ab2str(buf)
  const AsBase64 = window.btoa(AsString)
  return AsBase64
}

export function decode(base64) {
  const AsString = window.atob(base64)
  const AsBuffer = str2ab(AsString)
  return AsBuffer
}
