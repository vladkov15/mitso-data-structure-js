const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
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
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList( l, k ) {
  let currl = l;
  let newroot = new ListNode(null);
  let newcurrent = newroot;
  while (currl.next) {
      if(currl.value != k){
          if(newroot.value === null){
              newcurrent.value = currl.value;
            } else {
              newcurrent.next = new ListNode(currl.value);
              newcurrent = newcurrent.next;
            }
        }
    currl = currl.next;
  }
  if(currl.value != k){
    if(newroot.value === null){
        newcurrent.value = currl.value;
      } else {
        newcurrent.next = new ListNode(currl.value);
        newcurrent = newcurrent.next;
      }
  }
  return newroot;
  // remove line with error and write your code here
}