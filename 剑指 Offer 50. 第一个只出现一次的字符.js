/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) return " "
  let map = new Map()
  for (let str of s) {
    if (map.get(str) !== undefined) {
      map.set(str, false)
      continue
    }
    map.set(str, true)
  }
  const keys = map.keys()
  for (let k of keys) {
    if (map.get(k) === true) {
      return k
    }
  }
};

var s = "abaaccdeff"
let res = firstUniqChar(s)
console.log(res)
