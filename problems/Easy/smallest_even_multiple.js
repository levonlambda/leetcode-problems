// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 
// Example 1:

// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.

// Example 2:

// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
 

// Constraints:

// 1 <= n <= 150

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let resultFound = false
    let counter = 1

    while(!resultFound) {
        //Check for 2 conditions: 
        //1: if counter is a multiple of 2
        //2: if counter is a multiple of n
        if(counter % 2 === 0 && counter % n === 0) {
            resultFound = true
        }
        else {
            counter++
        }
    }

    return counter
};