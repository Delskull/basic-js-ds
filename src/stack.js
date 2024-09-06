const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.first = null;
  }
}
class Stack {
  constructor() {
    this.start = null;
  }
  push(element) {
 const newItem = new Node(element)
  newItem.first = this.start;
    this.start = newItem
  }

  pop() {
    if(!this.start){
        return null
    }
    const deleteNum = this.start.value
      this.start = this.start.first
      return deleteNum
  }

  peek() {
  if(!this.start){
      return null
  }
  return this.start.value
  }
}

module.exports = {
  Stack
};
