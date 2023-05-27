// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

 

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"
// Output: 3
 

// Constraints:

// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let currentDepth = 0;
    let maxDepth = 0
    //Step 1: iterate through the length of the input string
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        //Step 2A: check if the current character is an open parentheses
        if(char === '(' ) {
            //increment current depth
            currentDepth++
        }
        //Step 2B: check if the current character is a closing parentheses
        else if(char === ')') {
            //decrement the current depth
            currentDepth--
        }
        //Step 3: if maxDepth is lesser than the currentDepth we increment maxDepth
        if(maxDepth < currentDepth) {
            maxDepth++
        }
    }
    //Step 4: return maxDepth
    return maxDepth
}