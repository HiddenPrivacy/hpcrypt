export default function(str, name) {
  return (
    `-----BEGIN ${name}-----\n` +
    str.replace(/(?![^\n]{1,64}$)([^\n]{1,64})/g, '$1\n') +
    `\n-----END ${name}-----`
  )
}
