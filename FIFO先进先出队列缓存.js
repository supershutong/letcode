// 先进先出缓存函数
function memory(f, maxSize = 10) {
  let cache = []

  return (...args) => {
    let hash = args.join(',')

    let item = cache.find((x) => x.hash === hash)
    if (item) {
      return item.value
    }

    const result = f(...args)
    cache.push({
      hash,
      value: result
    })

    if (cache.length > maxSize) {
      cache.shift()
    }
    return result
  }
}

function fibo(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  // 此处使用缓存函数
  return mfib(n - 1) + mfib(n - 2)
}

let mfib = memory(fibo)
console.log(mfib(45))
