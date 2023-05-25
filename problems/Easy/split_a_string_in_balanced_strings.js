// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

 // Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
 

// Constraints:

// 2 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.

/**
 * @param {string} s
 * @return {number}
 */
let balancedStringCount = 0

var balancedStringSplit = function(s) {      
    balancedStringCount = 0
    checkString(s)
    return balancedStringCount
};

function checkString(s) { 
    let i = 0
    let foundMatch = false
    //Step 1: we go through each character in the s string and group them until we find a balanced string
    while(!foundMatch) {       
        if(i <= s.length) {
            currentString = s.substring(0, i)
            //Step 2: once we find a balanced string, we set foundMatch to true to stop the while loop from executing
            if(isBalanced(currentString)) {
                //Step 3: we increment the balanced string counter
                balancedStringCount++
                foundMatch = true;
                let nextString = s.substring(i)               
                //Step 4: we do a recursive call on function checkString(s) on the remaining string
                if(nextString.length > 0) {                 
                    checkString(nextString)                       
                }                         
            }
            i++
        }
        else {
            foundMatch = true
        }                
    }
}

//This function checks if there are equal number of L and R in the given string
function isBalanced(string) {
    let lCount = 0;
    let rCount = 0;
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) === 'L') {
            lCount++;
        }
        else if(string.charAt(i) === 'R') {
            rCount++;
        }
    }

    return lCount === rCount && lCount > 0
}