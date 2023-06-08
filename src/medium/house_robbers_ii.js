// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(nums[0], nums[1])
    if(nums.length === 3) return Math.max(Math.max(nums[0],nums[1]), nums[2])
    //since the house are arranged in a circle, we take the biggest value of our 3 choices
    //1. taking the first house but excluding the last house (since its adjacent to the first)
    //2. taking the second house
    //3. taking the third house
    return Math.max(
        nums[0] + robHouse(nums.slice(2,nums.length-1), new Map()),
        nums[1] + robHouse(nums.slice(3), new Map()),
        nums[2] + robHouse(nums.slice(4), new Map()))
    };
    
    function robHouse(nums, map) {
      //Map is used for memoization to store results so we dont have to constantly recompute them
      if(map.has(nums.length)) return map.get(nums.length)
      //setup base case where the length of our array is 0 or is 1
      if(nums.length === 0) return 0
      if(nums.length === 1) return nums[0]
      //we reach this part of the code if the length of our array is greater than one
      let firstHouse = nums[0]
      let secondHouse = nums[1]
      //we compare the max values between the firstHouse + rob(nums.slice(2)) vs secondHouse + rob(nums.slice(3))
      let result = Math.max(firstHouse + robHouse(nums.slice(2),map), secondHouse + robHouse(nums.slice(3),map))
      //we place the result in our map so we dont need to fetch it again later
      map.set(nums.length, result)
      //return the result
      return result
    }