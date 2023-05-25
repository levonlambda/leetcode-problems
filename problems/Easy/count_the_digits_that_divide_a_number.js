// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.

// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
 
// Constraints:

// 1 <= num <= 109
// num does not contain 0 as one of its digits.

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let output = 0;
    //Step 1: convert the number into a string
    let digitString = num.toString()
    //Step 2: iterate through the length of the digitString
    for(let i = 0; i < digitString.length; i++) {
        //Step 3: check if the digit at index(i) of digitString divides
        let currentDigit = parseInt(digitString.charAt(i))
        if(num % currentDigit === 0) {
            //Step 4: increment output counter if it does
            output++
        }
    }

    return output
};