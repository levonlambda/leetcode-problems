// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//map is used for memoization 
var coinChange = function(coins, amount, map = new Map()) {
    //if the map contains the amount, we simply retrieve it to prevent recalculating the same result
    if(map.has(amount)) return map.get(amount)
    //setup our base case (if its 0 or if its less than 0)
    if(amount === 0) return 0
    if(amount < 0) return null
  
    let validCombination = []
    //iterate through the length of our coins
    for(let i = 0; i < coins.length; i++) {        
        let coin = coins[i]
        let remainder = amount - coin     
        //the goal here is to recursively call coinChange using the remainder as our amount while using the same coin array and map
        let result = coinChange(coins, remainder, map)  
        //if the result is not null or -1, this means that a match has been found so we add that to our validCombination array +1
        if(result !== null && result !== -1) {
          validCombination.push(result+1)
        }      
    }
    //we check if the validCombination array is empty, if it is we return -1 (meaning no match has been found) otherwise we return 
    //the minimum elmeent in validCombinaton array
    let output = validCombination.length !== 0 ? Math.min(...validCombination) : -1
    //we set the map here so that we wont need to recompute the same result for this amount
    map.set(amount, output)
    //return the result
    return output
  };
  
  