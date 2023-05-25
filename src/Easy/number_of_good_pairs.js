// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let output = 0;
    //Step 1: iterate through the entire length of the num array starting at index 0
    for(let i = 0; i < nums.length; i++) {
        //Step 2: iterate through the entire length of num array starting at index i+1 (since we need to compare the value of num[i] and num[i+1])
        for(let j = i+1; j < nums.length; j++) {
            //Step 3: check if the value of num[i] and num[j] is equal
           if(nums[i] === nums[j]) {
                //Step 4: update our good pair counter
                output++
           }
        }
    }
    //Step 5: return the result
    return output
};