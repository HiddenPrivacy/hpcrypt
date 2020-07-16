export default function(str) {
  let array = str.split('\n')
  array.pop()
  array.shift()
  return array.join('')
}
