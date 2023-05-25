// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66
 

// Constraints:

// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    //based on the length of the array, determine the possible odd numbers to be used
    let oddNumbers = []
    for(let  i = 1; i <= arr.length; i++) {
        if(isOdd(i)) {
            oddNumbers.push(i)
        }
    }
   //This section will generate the subarrays based on the oddNumbers array and the arr aray
   let output = 0
   for(let i = 0; i < oddNumbers.length; i++) {
       let oddNumber = oddNumbers[i]
       for(let j = 0; j < arr.length; j++) { 
           if(j+oddNumber <= arr.length)   
               //we add the sum of the subarray 
               output+= getSum(arr.slice(j,(j+oddNumber)))  
       }  
   }

   return output
};

//this function will determine if the number is odd
function isOdd(num) {
   let isOdd = false

   if(num % 2 !== 0) {
       isOdd = true
   }

   return isOdd
}

//this function gets the sum of all the value inside the array
function getSum(array) {
   let sum = 0
   for(let i = 0; i < array.length; i++) {
       sum += array[i]
   }

   return sum
}