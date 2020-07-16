export default function(buffer) {
  if (window.TextDecoder) {
    return new TextDecoder().decode(buffer)
  }

  var str = String.fromCharCode.apply(null, new Uint8Array(buffer))

  return decodeURIComponent(escape(str))
}
