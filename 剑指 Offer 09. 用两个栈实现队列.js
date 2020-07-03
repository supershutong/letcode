/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var CQueue = function () {
  this.inStack = []
  this.outStack = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  let { inStack, outStack } = this
  if (outStack.length) return outStack.pop()
  while (inStack.length) {
    outStack.push(inStack.pop())
  }
  return outStack.pop() || -1
};


var obj = new CQueue()
obj.appendTail(111)
obj.appendTail(222)
obj.appendTail(333)
console.log(obj)
var param_2 = obj.deleteHead()
console.log(param_2)