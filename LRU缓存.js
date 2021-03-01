function memory(f, maxSize = 10) {
  let cache = []
  return (...args) => {
    let hash = args.join(',')

    let item = cache.find((x) => x.hash === hash)

    if (item) {
      return item.value
    }

    let result = f(...args)
    cache.push({
      hash,
      value: result,
      time: new Date().getTime()
    })

    if (cache.length > maxSize) {
      let min = Infinity
      cache.forEach((item) => {
        if (item.time < min) {
          min = item.time
        }
      })
      cache.filter((item) => item.time === min)
    }
    return result
  }
}

function fibo(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return mfib(n - 1) + mfib(n - 2)
}

let mfib = memory(fibo)
console.log(mfib(45))
