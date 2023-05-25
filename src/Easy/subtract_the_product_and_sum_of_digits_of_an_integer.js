// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    //Step 1: convert the number to string
    let numString = n.toString()
    //Step 2: get the first character at index 0 and set it as the initial value of sum and product of digit
    let sumOfDigits = parseInt(numString.charAt(0))
    let productOfDigits = parseInt(numString.charAt(0))
    //Step 3: iterate through numString
    for(let i = 1; i < numString.length; i++) {
        let currentNum = parseInt(numString.charAt(i))       
        //Step 4: convert the current character into a number and use it to calculate the sum and product of digit
        sumOfDigits = sumOfDigits + currentNum
        productOfDigits = productOfDigits * currentNum
    }
    //Step 5: return the result
    return productOfDigits - sumOfDigits
};