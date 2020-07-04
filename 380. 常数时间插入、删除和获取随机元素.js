// 方法一  数组 + Map
var RandomizedSet = function () {
  this.data = []
  this.keys = new Map()
};

RandomizedSet.prototype.insert = function (val) {
  if (this.keys.get(val) !== undefined) {
    return false
  }
  this.keys.set(val, this.data.length)
  this.data.push(val)
  return true
};

RandomizedSet.prototype.remove = function (val) {
  let index = this.keys.get(val)
  if (index === undefined) return false
  let temp = this.data[index]
  this.data[index] = this.data[this.data.length - 1]
  this.data[this.data.length - 1] = temp
  this.keys.set(this.data[index], index)
  this.data.pop()
  this.keys.delete(val)
  return true
};

RandomizedSet.prototype.getRandom = function () {
  let i = Math.random() * this.data.length | 0
  return this.data[i]
};
// 方法二  Set方法getRandom时解构为数组取值

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
var param_2 = obj.remove(2)
var param_3 = obj.insert(2)
var param_4 = obj.getRandom()
var param_5 = obj.remove(1)
var param_6 = obj.insert(2)
var param_7 = obj.getRandom()
// var param_1 = obj.insert(0)
// var param_2 = obj.insert(1)
// var param_3 = obj.remove(0)
// var param_4 = obj.insert(2)
// var param_5 = obj.remove(1)
// var param_6 = obj.getRandom()
console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7)

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */