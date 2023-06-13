// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

 
// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const COLOR_RED = 0
    const COLOR_WHITE = 1
    const COLOR_BLUE = 2
    let result = []

    let whiteIndex = 0
    //iterate over the length of nums
    for(let i = 0; i < nums.length; i++) {
        const currentColor = nums[i]
        //if the current color is red, put it at the start of the array and increment our white index
        if(currentColor === COLOR_RED) {
            result.unshift(currentColor)
            whiteIndex++
        }
        //if the current color is blue, put it at the end of the array
        else if(currentColor === COLOR_BLUE) {
            result.push(currentColor)
          
        }
        //if the color is white, insert it at whiteIndex
        else {
            result = [...result.slice(0, whiteIndex), currentColor, ...result.slice(whiteIndex)] 
        }
    }

    //change the length of nums to 0 and assign the result to it
    nums.length = 0
    for(let i = 0; i < result.length; i++) {
        nums.push(result[i])
    }
};