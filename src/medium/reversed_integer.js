// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */

 //max negateive -2 to the 31 = 2,147,483,648
 //max positive 2 to the 31 minus 1 = 2,147,483,647
 var reverse = function(x) {
    //Step 1: convert the number to string
    let sInput = x.toString()
    let reverse = ""
    let result = 0
    //Step 2: if the first character is negative
    //add the negative character to our reverse variable 
    if(sInput.length > 0 && sInput.charAt(0) === '-') {
        //we slice of the negative character from our input string
        sInput = sInput.slice(1)
        reverse+= "-"
    }
    //Step 3: reverse the string and convert it back to a number
    result = parseInt(reverse+sInput.split('').reverse().join(''))
    //Step 4: if it exceeds the max negative and positive number
    if(result > 2147483647 || result < -2147483648) {
        //set result to 0
        result = 0
    }
    //Step 5: return the result
    return result    
};