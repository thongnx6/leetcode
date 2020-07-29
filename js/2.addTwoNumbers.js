/**
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reserve order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two number do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example
 * ```
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 432 + 465 = 807
 * ```
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  return {
    val: (val===undefined ? 0 : val),
    next: (next===undefined ? null : next)
  };
}
 

/**
 * addTwoNumbers
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
var addTwoNumbers = function(l1, l2) {
  let sum = 0, addOn = 0, curL1 = l1, curL2 = l2;
  let lTwoNumbers, curNode;

  while (curL1 || curL2) {
    const tempSum = (curL1 ? curL1.val : 0) + (curL2 ? curL2.val : 0);
    const tempNode = ListNode();    
    const curPow = Math.pow(10, addOn);

    sum +=  curPow*tempSum;
    tempNode.val = parseInt(sum / curPow) % 10;

    if (!curNode) {
      lTwoNumbers = curNode = tempNode;
    }
    else {
      curNode.next = tempNode;
      curNode = curNode.next; 
    }

    addOn++;
    curL1 = curL1 ? curL1.next : null;
    curL2 = curL2 ? curL2.next : null;
  }

  return lTwoNumbers;
}

// Make data test
const l1 = ListNode(1, ListNode(2)), 
      l2 = ListNode(4);

console.info(l1, l2);
console.info(addTwoNumbers(l1, l2));

const l3 = ListNode(1, ListNode(9, ListNode(6))), 
      l4 = ListNode(4, ListNode(8));

console.info(l3, l4);
console.info(addTwoNumbers(l3, l4));


 