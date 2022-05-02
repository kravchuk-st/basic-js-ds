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
class Queue {

  constructor(){
		this.head = null;
		this.tail = null;
	}

  getUnderlyingList() { 
		const arr = [];
		let cur = this.head;

		while(cur){
			arr.push(cur);
			cur = cur.next;
		}
		
		return {...arr[0]};
  }

  enqueue(value) {
    const node = new ListNode(value);
		if(!this.head) {
      this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		return this;
  }

  dequeue() {
		let firstNode = this.head;
		this.head = this.head.next;
		return firstNode.value;
  }
}

module.exports = {
  Queue
};
