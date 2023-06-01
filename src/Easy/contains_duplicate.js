// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //Step 1: create an temporary array
    let numsCnt = []
    //Step 2: initalize variable appearsTwice to false
    let appearsTwice = false
    //Step 3: iterate through the length of nums array
    for(let i = 0; i < nums.length; i++) {
        //check if numsCnt[nums[i]] is truthy 
        //if it is, then it has at least one duplicate 
        if(numsCnt[nums[i]]) {
            appearsTwice = true
            break
        }          
        //numsCnt[nums[i]] is null so we initialize it to 1
        //and we use this index to check later  
        else {
            numsCnt[nums[i]] = 1
        }
        console.log("inside loop at cnt ",i)
    }
    //Step 4: return the result
    return appearsTwice

};