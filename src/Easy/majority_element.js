// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 
// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //map to keep count of our elements
    let majorityMap =  new Map()
    //iterate over the length of nums array
    for(let i = 0; i < nums.length; i++) {
        const current = nums[i]
        //if the current value exists in our map, increment the value by 1
        if(majorityMap.has(current)) {
            majorityMap.set(current, majorityMap.get(current) + 1)
        }
        //if it does not exist, create it and set the current value to 1
        else {
            majorityMap.set(current, 1)
        }        
    }
    //convert our map into an 2D array and sort it by the highest count
    const highest = Array.from(majorityMap).sort((a,b) => b[1] - a[1])
    //since the rules state that a majority element always exist, simply get the first element
    const majorityElement = highest[0][0]
    //return the result
    return majorityElement
};