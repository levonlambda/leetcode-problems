// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time. 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //Step 1: sort the values inside the array nums using nums.sort()
    //Step 2: filter out the duplicates from nums by using Set
    //Step 3: convert the set without duplicates back into an array and assign to nums
    nums = Array.from(new Set(nums.sort((a,b)=> a-b)))
    //Step 4: we initialize the value of our longest sequence to 1 if nums.length > 0
    let longestSeq = nums.length > 0 ? 1: 0
    //Step 5: we use startIndex and endIndex to monitor the sequence
    let startIndex = 0
    let endIndex = 0
    //Step 6: iterate over the length of the array
    for(let i = 0; i < nums.length; i++) {  
        //Step 7: check if the endIndex and index i is a sequence
        if(isConsecutive(nums[endIndex], nums[i])) {
            //Step 8: compare if the current sequence length is greater than our max sequence
            const currentSeq =  (i - startIndex) + 1
            if(currentSeq > longestSeq) {
                longestSeq = currentSeq
            }          
        }
        else {
            startIndex = i
        }
        endIndex = i
    }
    //Step 9: return the result
    return longestSeq  
};

//This function checks if beg and end is consecutive
function isConsecutive(beg, end) {
   return beg + 1 === end 
}