/**
 * @param {number} capacity
 */
var LRUCache = class {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let cache = this.cache;
    if (cache.has(key)) {
      let value = cache.get(key)
      cache.delete(key);
      cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  };
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    let cache = this.cache;
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size >= this.capacity) {
      cache.delete(cache.keys().next().value);
    }
    cache.set(key, value);
  };
};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2 /* 缓存容量 */);

// cache.get(2);
// cache.put(2, 6);
// cache.get(1);       // 返回  -1
// cache.put(1, 5);    // 该操作会使得关键字 2 作废
// cache.put(1, 2);    // 该操作会使得关键字 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(2);       // 返回  3

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得关键字 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得关键字 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4

console.log([...cache.cache])