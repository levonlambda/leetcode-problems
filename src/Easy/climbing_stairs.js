// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
//The map is used to implement a memoization to improve runtime performance
let map = new Map()
//The array contains the steps that the user can use (1 step or 2 step)
let array = [1,2]
var climbStairs = function(target) {
    //Step 1: Identify our two possible base cases
    //case 1: if target is 0, it means a match is found
    //case 2: if target is < 0 it means it is not a possible combination
    if(target === 0) return 1
    if(target < 0) return null

    //Step 2: the total represents the distinct ways to climb to the top
    let total = 0
    //iterate over our possible steps 
    for(let i = 0; i < array.length; i++) {
        //step here represents 1 or 2
        let step = array[i]
        let remainder = target - step
        let result =  null
        //we check if our map contains a key of remainder we simply fetch it and assign to result
        //so we dont have to keep repeating the process
        if(map.has(remainder)) {
            result = map.get(remainder)
        }
        //if the map does not contain a key, we fetch the result and then add it to the map for
        //future use
        else {
            result = climbStairs(remainder, array) 
            map.set(remainder, result)
        }
        //we update our total
        if(result != null) {
            total += result
        }
    }
    //Step 3: return the result
    return total
}

