class Stack {
  constructor(items = []) {
    this.storage = items
  }
  numOfItems() {
    return this.storage.length || "There are no items in your Stack."
  }
  add(item) {
    return this.storage.push(item)
  }
  remove() {
    return this.storage.pop()
  }
}

const myStack = new Stack();
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
myStack.add('first');
myStack.add('second');
myStack.add('third');
console.log(myStack.numOfItems()); // <--- 3
console.log(myStack.storage);      // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage);      // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage);      // <--- [ 'first' ]
myStack.remove();
console.log(myStack.storage);      // <--- []
console.log(myStack.numOfItems());