// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let output = []
    
    //Step 1: Iterate through the array and get the current number to compare to
    for(let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let numCount = 0
        //Step 2: Now that we have ta number to compare to, iterate through the array a second time
        //to compare how many elements are smaller than it
        for(let y = 0; y < nums.length; y++) {
            //Step 3: if its element is smaller, increment the numCount
            if(currentNum > nums[y]) {
                numCount++
            }
        }
        //Step 4: now that we know how many elements are smaller than currentNum, store the result in
        //our output array
        output.push(numCount)
    }
    //Step 5: return the result
    return output
};