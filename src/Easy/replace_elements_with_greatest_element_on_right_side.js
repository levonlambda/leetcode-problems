// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.


// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.
 

// Constraints:

// 1 <= arr.length <= 104
// 1 <= arr[i] <= 105

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let output = []
    //Step 1: iterate over the length of arr
    for(let i = 0; i < arr.length; i++) {
        let nextIndex = i+1
        //Step 2A: we check if the next index is equal to the length of the array, if so set the currennt index to -1
        if( nextIndex === arr.length) {
            output[i] = -1
        }
        //Step 2B: we initalize the value of output[i] to the next index of the array
        else {
            output[i] = arr[nextIndex]
            //Step 3: we then iterate over the length of the array and look for a value higher than the intial output[i]
            for(let j = i + 1; j < arr.length; j++) {
                if(output[i] < arr[j]) {
                    output[i] = arr[j]
                }
            }
        }       
    }
    //Step 4: return the result
    return output
};