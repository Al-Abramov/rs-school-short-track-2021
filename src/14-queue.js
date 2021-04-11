const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(x = []) {
    this.listNode = this.newList(x);
  }

  get size() {
    return this.listNode.value.length;
  }

  enqueue(element) {
    return this.listNode.value.push(element);
  }

  dequeue() {
    return this.listNode.value.shift();
  }

  newList (x) {
    return new ListNode(x);
  }
}

module.exports = Queue;
