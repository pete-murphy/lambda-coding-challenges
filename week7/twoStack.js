class Stack {
  constructor() {
    this.storage = []
  }

  add(item) {
    this.storage.push(item)
  }

  remove() {
    return this.storage.pop()
  }

  get length() {
    return this.storage.length
  }
}

class Queue {
  constructor() {
    this.storage = []
  }

  enqueue(item) {
    this.storage.push(item)
  }

  dequeue() {
    return this.storage.shift()
  }
}

// Do not modify the following code:
const stack = new Stack()
console.log(stack.length) // <--- 0
stack.add("first")
stack.add("second")
stack.add("third")
console.log(stack.length) // <--- 3
console.log(stack.storage) // <--- [ 'first', 'second', 'third' ]
console.log("FILO Stack:", stack.remove(), stack.remove(), stack.remove()) // <--- FILO: third second first

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
const val1 = queue.dequeue()
queue.enqueue(3)
const val2 = queue.dequeue()
const val3 = queue.dequeue()
console.log("FIFO Queue:", val1, val2, val3) // <--- FIFO: 1 2 3
