// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.
 

// Constraints:

// 1 <= nums.length <= 2000
// 1 <= nums[i] <= 2000

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0
    let digitSum = 0

    //Step 1: iterate through the length of the nums array
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        //Step 2: check if the current number has more than 1 digit (we use the number 10 to determine if it has more than 1 digit)
        if(currentNum >= 10) {
            //Since the number has more than 1 digit we call the function getDigitSum()  to compute for the sum of each digits
            digitSum += getDigitSum(currentNum)
        }
        //otherwise we just add the current number as is to the digit sum
        else {
            digitSum += currentNum
        }
        //Step 3: we add the current number to the elementSum
        elementSum += currentNum
    }
    //Step 4: return the absolute value of the difference between elementSum and digitSum
    return Math.abs(elementSum - digitSum)
};

//This function computes for the digit sum of num
function getDigitSum(num) {
    //Step 1: convert num to string
    let sNum = num.toString()
    let sum = 0
    //Step 2: iterate through each character of sNum and convert it to an integer and add it to sum
    for(let i = 0; i < sNum.length; i++) {
        sum+= parseInt(sNum.charAt(i))
    }
    //Step 3: return sum
    return sum
}