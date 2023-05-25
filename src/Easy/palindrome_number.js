// Given an integer x, return true if x is a 
// palindrome, and false otherwise. 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let isPalindrome = true

    //Step 1: convert x to string
    let string = x.toString()
    let string1 = ""
    let string2 = ""
    
    //Step 2: check if x is odd or even
    if(string.length % 2 !== 0) {
        //Step 3: split the string into two equally excluding the center
        let middleIndex = Math.floor(string.length/2)
        string1 = string.slice(0,middleIndex)
        string2 = string.slice(middleIndex+1)
    }
    else {
        //Step 3: split the string into two equally 
        let middleIndex = string.length / 2
        string1 = string.slice(0, middleIndex)
        string2 = string.slice(middleIndex)
    }
    //Step 4: reverse one of the string 
    //we do this by converting it into an array and using the reverse() function and turn it back into
    //a string via the join() function
    string1 = string1.split('').reverse().join('')
    //Step 5: compare if string1 is equal to string 2
    if(string1 !== string2) {
        isPalindrome = false
    }
    //Step 6: return the result
    return isPalindrome
};