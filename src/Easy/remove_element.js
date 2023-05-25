// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    //sample data nums = [1,2,3,1,4,5,1]
    //val = 1
    //output array [-1,2,3,-1,4,5,1]
    //ouput = 3

    let output = 0;
    //first replace all instance of val to -1 
    for(let i = 0; i < nums.length; i++) {
        //compare if nums[i] === val
        if(nums[i]=== val) {
            //change it to -1
            nums[i] = -1
        }
        else {
            output++
        }
    }

    //we need to sort the array such that all -1 instances are at the end of the array
    for(let cnt = 0; cnt < nums.length; cnt++) {
        for(let i = 0; i < nums.length; i++) {       
         //look for -1 value
            if(nums[i] === -1) {
                //we make sure that i+1 does not exceed nums.length
                if(i+1 < nums.length) {
                    let holder = nums[i+1]
                    nums[i] = holder
                    nums[i+1] = -1
                }        
            }       
        }
    }    

    //output array [-1,2,3,-1,4,5,1]      
    return output
};