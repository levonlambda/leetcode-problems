// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //Step 1: convert the string into an array
    let inputArray = s.split('')
    //Step 2: initialize our result to true if the array is even, false if its odd
    let result = inputArray.length % 2 === 0
    let openBracketStack = []

    //Step 3: iterate through the length off the array
    while(inputArray.length > 0 && result) {
        //remove the first element of the array and assign it to current
        let current = inputArray.shift()
        //Step 4: if current is an opening parentheses  
        //put it on our openBracket stack
        if(current === "{" || current === "(" || current === "[" ){
            openBracketStack.unshift(current)
        }
        //Step 5: if it is an closing parentheses
        //check if it matches the first element in our openBracketStack
        else if(current === "}" && openBracketStack.shift() !== "{") {
            result = false
        }
        else if(current === ")" && openBracketStack.shift() !== "(") {
            result = false
        }
        else if(current === "]" && openBracketStack.shift() !== "[") {
             result = false
        }
    }
    //Step 6: return the result
    return result
};