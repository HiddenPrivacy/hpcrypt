export default function(str) {
  if (window.TextEncoder) {
    return new TextEncoder().encode(str)
  }
  var utf8 = unescape(encodeURIComponent(str))
  var result = new Uint8Array(utf8.length)
  for (var i = 0; i < utf8.length; i++) {
    result[i] = utf8.charCodeAt(i)
  }
  return result
}
