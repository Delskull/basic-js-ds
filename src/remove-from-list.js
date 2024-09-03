const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
function removeKFromList(l, k) {
  let startPosition = new ListNode(0);
  startPosition.next = l;
  let position = startPosition;

  while (position.next !== null) {
    if (position.next.value === k) {
      position.next = position.next.next;
    } else {
      position = position.next;
    }
  }
  return startPosition.next;
}

module.exports = {
  removeKFromList
};
