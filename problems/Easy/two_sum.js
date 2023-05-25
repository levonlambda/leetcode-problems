// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1] 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = []
    //Step 1: iterate through the length of the array starting at index 0
     for(let i = 0; i < nums.length; i++) {
        //Step 2: iterate through the length of the array starting at index i+1
         for(let j = i+1; j < nums.length; j++) {
            //Step 3: compare if the sum of index[i] and index [j] is equal to our target value
             if(nums[i] + nums[j] === target) {
                //Step 4: add index i and j to our output array
                 output.push(i)
                 output.push(j)
             }
         }
     }
     //Step 5: return the result
     return output
};