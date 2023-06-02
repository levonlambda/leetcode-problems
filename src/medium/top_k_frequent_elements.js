// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    let result = []
    //Step 1: iterate through the length of nums
    for(let i = 0; i < nums.length; i++) {
        const current = nums[i]
        //Step 2: we check if the map contains the current element in our input array
        if(map.has(current)) {
            //Step 3A: since the key exist, we increment the value by 1 and update our key/value map
            let value = map.get(current) + 1             
            map.set(current, value)
        }
        else {
            //Step 3B: since it doesnt exists, we create a new key with an initial value of 1
            map.set(current,1)
        }
    }
    //Step 4: we sort the map by going through its entries which gives us an 2D array of key/pair value e.g [[key,value], [key,value]]
    //we sort it by its value which represents the total times the number occured from the array input
    let sorted = [...map.entries()].sort((a,b) => a[1] - b[1])
    //Step 5: now that the array is sorted, we push the top k elements into our resulting array
    for(let i = 0; i < k; i++) {
        result.push(sorted.pop()[0])
    }
    //Step 6: return the result
    return result
};