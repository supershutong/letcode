/**
 * @description
 *  数组的特点：
      线性结构，顺序存储
      插入慢，查找快
      时间复杂度：查找O(1)、更新O(1)、插入O(n)、删除O(n)
 *  链表的特点：
      线性结构，随机存储（省内存）
      插入快，查找慢
      时间复杂度：查找O(n)、更新O(1)、插入O(1)、删除O(1)
 */

/**
 * @description
 * 链表提供以下方法:
 *  1、 push(element)  // 链表尾部插入节点
    2、 pop()          // 链表尾部删除节点
    3、 shift()        // 删除头部节点、
    4、 unshift(element)        // 插入头部节点
    5、 find(index)             // 查找指定位置节点
    6、 insert(element, index)  // 指定位置插入节点
    7、 update(element, index)  // 修改指定位置节点
    8、 delete(index)  // 链表删除指定位置节点
    9、 cycle(index)        // 使链表尾指向某节点成环
*/

function initList() {
  class Node {
    constructor(value) {
      this.element = value
      this.next = null
    }
  }

  class List {
    /**
     * 链表的基本属性：head、last、size
     * */
    constructor() {
      this.head = null
      this.last = null
      this.size = 0
    }
    /** 方法 */
    // 尾部插入
    push(element) {
      let node = new Node(element)
      if (this.size === 0) {
        this.head = this.last = node
      } else {
        this.last = this.last.next = node
      }
      ++this.size
    }
    // 尾部删除
    pop() {
      if (this.size <= 1) {
        this.head = this.last = null
        this.size = 0
      } else {
        let prev = this.head, i = 1
        while (++i < this.size) {
          prev = prev.next
        }
        prev.next = null
        this.last = prev
        this.size--
      }
    }
    // 头部删除
    shift() {
      if (this.size <= 1) {
        this.head = this.last = null
        this.size = 0
      } else {
        this.head = this.head.next
        this.size--
      }
    }
    // 头部插入
    unshift(element) {
      const prevHead = this.head
      this.head = new Node(element)
      this.head.next = prevHead
      if (this.size === 0) {
        this.last = this.head
      }
      this.size++
    }
    // 查找指定位置节点
    find(index) {
      if (index < 0 || index > this.size) {
        console.error('超出链表节点范围')
        return false
      } else {
        let i = 0, cur = this.head
        while (i++ < index) {
          cur = cur.next
        }
        return cur
      }
    }
    // 指定位置插入节点
    insert(element, index) {
      if (index < 0 || index > this.size) {
        console.error('超出链表节点范围')
        return false
      } else if (index === 0) {
        this.unshift(element)
      } else if (index === this.size) {
        this.push(element)
      } else {
        let prev = this.find(index - 1),
          cur = this.find(index)
        prev.next = new Node(element)
        prev.next.next = cur
        this.size++
      }
    }
    // 修改指定位置节点
    update(element, index) {
      this.find(index).element = element
    }
    // 链表删除指定位置节点
    delete(index) {
      if (index < 0 || index > this.size) {
        console.error('超出链表节点范围')
      } else if (index === 0) {
        this.shift()
      } else if (index === this.size) {
        this.pop()
      } else {
        this.find(index - 1).next = this.find(index + 1)
        this.size--
      }
    }
    // 使链表尾指向index节点成环
    cycle(index) {
      if (index < 0 || index >= this.size) {
        console.error('该位置无法成环！')
        return false
      } else {
        this.last.next = this.find(index)
      }
    }
  }
  return new List()
}

// let list = initList()
// list.push(222)
// list.push(333)
// list.push(444)
// list.pop()
// list.shift()
// list.unshift(111)
// list.find(2)
// list.insert(111, 0)
// list.update('a', 1)
// list.delete(1)
// list.cycle(1)
// console.log(new Date().getTime(), list)

export { initList }