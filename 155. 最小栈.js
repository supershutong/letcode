/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function () {
  this.stack = []
  this.min_stack = [] // 维护一个辅助栈记录最小值
};

MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.min_stack.length === 0 || this.getMin() >= x) { // 注意等号
    this.min_stack.push(x)
  }
};

MinStack.prototype.pop = function () {
  let del = this.stack.pop()
  if (this.getMin() === del) {
    this.min_stack.pop()
  }
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1]
};


var obj = new MinStack()
obj.push(5)
obj.push(4)
obj.push(7)
obj.push(4)
obj.push(3)
obj.pop()
obj.pop()
// obj.pop()
// obj.pop()
// obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()

console.log(param_3, param_4)
