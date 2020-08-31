export default function(str) {
  const array = str.split('\n')
  array.pop()
  array.shift()
  return array.join('')
}
