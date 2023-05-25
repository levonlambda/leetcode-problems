// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

 // Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 105
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let result = []
    
    for(let i = 0; i < nums.length; i++ ) {
        let leftSum = 0
        let rightSum = 0
        
        if(i-1 >= 0) {
            //traverse the leftside of the array
            for(let j = i-1; j >= 0; j--) {
                //add them to get the leftSum
                leftSum += nums[j]
            }
        }
        //traverse the rightside of the array
        if(i+1 < nums.length) {
            for(let j = i+1; j < nums.length; j++) {
                //add them to get the rightSum
                rightSum += nums[j]
            }
        }
        result.push(Math.abs(leftSum - rightSum))
    }
    return result;
};