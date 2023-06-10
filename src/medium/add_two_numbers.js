// You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 = ""
    let num2 = ""
    //Convert the numbers into a string
    while(l1 !== null) {
      num1 += l1.val
      l1 = l1.next
    }
     
    while(l2 !== null) {
      num2 += l2.val
      l2 = l2.next
    }
    //turn the string into an array and use the built in function to reverse the content
    //then turn it back into a string and store it as BigInt
    num1 = BigInt(num1.split('').reverse().join(''))
    num2 = BigInt(num2.split('').reverse().join(''))
    //add the result
    const sum = num1 + num2  
    //convert the result into a string
    return convertToList(sum)
  };
  
  //This function converts a number into a ListNode
  function convertToList(number) {
    //convert the number into an array
    let numArray = number.toString().split('')
    let list = null
    //iterate over the array and create a new list connecting the previous one to the current
    for(let i = 0; i < numArray.length ; i++) {
        let currentList = new ListNode(numArray[i],list)
        list = currentList
    }
    //return the list
    return list
  }
  
  
  