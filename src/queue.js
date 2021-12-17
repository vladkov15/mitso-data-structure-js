const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue {

  constructor(){
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    return this.head;
    // remove line with error and write your code here
  }

  enqueue(value ) {
    //throw new NotImplementedError('Not implemented');
    const newNode= new ListNode(value);
    if(!this.head || !this.tail){
      this.head =newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
    // remove line with error and write your code here
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    if(!this.head){
      return null;
    }
    const deleteHead= this.head;
    if(this.head.next){
      this.head=this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deleteHead.value;
  }
    // remove line with error and write your code here


}