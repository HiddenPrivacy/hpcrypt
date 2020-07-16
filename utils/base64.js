function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf))
}

function str2ab(str) {
  var buf = new ArrayBuffer(str.length)
  var bufView = new Uint8Array(buf)
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export function encode(buf) {
  var AsString = ab2str(buf)
  var AsBase64 = window.btoa(AsString)
  return AsBase64
}

export function decode(base64) {
  var AsString = window.atob(base64)
  var AsBuffer = str2ab(AsString)
  return AsBuffer
}
