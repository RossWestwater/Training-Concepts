
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < head.length / 2; i++) {
      arr1.push(head[i])
    }
    for (let i = head.length / 2 ; i < head.length ; i++) {
      arr2.unshift(head[i])
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
      return true
    }
};


isPalindrome([1,2,7,5,5,7,2,1])

  /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
   }
 }

 var isPalindrome = function(head) {
 
   
    
    initializeLinkedListFromArray = array => {
  if (array.length === 0) {
    return [];
  }
  let head = new Node(array[0]);
  let curr = head;
  for (let i = 1; i < array.length; i++) {
    let newNode = new Node(array[i]);
    curr.next = newNode
    curr = curr.next
  }
  return head;
}

const printLinkedList = head => {
  let curr = head;
  let printStr = '';
  while (curr) {
    printStr += curr.value + "->";
    curr = curr.next
  }
  console.log(printStr);
}

const head = initializeLinkedListFromArray([1,2,2,1])
printLinkedList(head);
};

var isPalindrome = function(x) {
  let y = x.toString()
  let arr = y.split('')
  let reversed = arr.reverse()
  let joined = reversed.join('')
  if (y !== joined) {
    return false
  }
  return true
};
