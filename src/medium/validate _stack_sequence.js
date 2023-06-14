// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// Example 2:

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.
 
// Constraints:

// 1 <= pushed.length <= 1000
// 0 <= pushed[i] <= 1000
// All the elements of pushed are unique.
// popped.length == pushed.length
// popped is a permutation of pushed.

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    //create a stack to hold our data
    let stack = []
    //iterate over the length of pushed array
    for(let i = 0; i < pushed.length; i++) {
        //we push the current element to our stack
        stack.push(pushed[i])
        //if the top of our stack is equal to the first element of our popped array
        while(stack[stack.length-1] === popped[0] && stack.length > 0) {
            //since they are equal, we remove them both via pop and shift (pop removes the last element, shift removes the first element)
            stack.pop()
            popped.shift()
        }        
    }    
    //if our stack is empty, it is a valid stack, otherwise it is invalid
    return stack.length === 0 ? true : false
};