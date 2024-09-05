const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.curr = null;
    this.end = null;
  }

  getUnderlyingList() {
  return this.curr
  }

  enqueue(value) {
  const newNum = new Node(value);
  if(this.end){
    this.end.next = newNum
  }
  this.end = newNum
    if(!this.curr){
      this.curr = newNum
    }
  }

  dequeue() {
 if (!this.curr){
   return null
 }
const deleteNum = this.curr.value
    this.curr = this.curr.next
    if (!this.curr){
      return null
    }
    return deleteNum
  }
}

module.exports = {
  Queue
};
