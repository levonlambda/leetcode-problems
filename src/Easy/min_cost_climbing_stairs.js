// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor. 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6. 

// Constraints:

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //Step 1: find the shortest path if we start at index 0 vs 1
    //The map is used for memoization to prevent redudant recursion computation
    let index0 = minCost(cost, new Map())
    let index1 = minCost(cost.slice(1), new Map()) 
 
    return index0 < index1 ? index0 : index1
 };
 
 function minCost(cost, map) {  
    //If the map has the key of cost.length, it means we have previously computed the result, so we just fetch it
    if(map.has(cost.length)) return map.get(cost.length)
    if(cost.length <= 0) return 0
    //the current cost is the cost at index 0 
    let currentCost = cost[0]
    //we determine how much cost will it take to make one step and two step
    let oneStep = minCost(cost.slice(1), map) + currentCost
    let twoStep = minCost(cost.slice(2), map) + currentCost
    //we compare which takes the least cost between one step vs two stp
    let leastCost = oneStep < twoStep ? oneStep : twoStep
    //we add the cost to our map so we can simply get the value next time without recomputing it
    map.set(cost.length, leastCost)
    //return the result
    return leastCost
 }
 