// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 
// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, map = new Map()) {
    //Map is used for memoization to store results so we dont have to constantly recompute them
    if(map.has(nums.join(''))) return map.get(nums.join(''))
    //setup base case where the length of our array is 0 or is 1
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]
    //we reach this part of the code if the length of our array is greater than one
    let current = nums[0]
    let next = nums[1]
    //we compare the max values between the current + rob(nums.slice(2)) vs next + rob(nums.slice(3))
    let result = Math.max(current+ rob(nums.slice(2),map),(next+ rob(nums.slice(3),map)))  
    //we place the result in our map so we dont need to fetch it again later
    map.set(nums.join(''),result)
    //return the result
    return result
};