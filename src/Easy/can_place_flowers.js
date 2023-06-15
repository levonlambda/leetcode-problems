// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    //we keep track of the front and back index
    let backIndex = 0
    let frontIndex = 0
    for(let i = 0; i < flowerbed.length; i++) {
        //here we check if index i is currently at 0 (we assign the back index to 0 also, otherwise we set it to i-1)
        backIndex = i === 0 ? 0 : i - 1
        //here we check if index i is currently at the end index (flowerbed.length -1) if it is, we assign front index to flowerbed.length-1
        //otherwise we just set it to i + 1
        frontIndex = i === flowerbed.length-1 ? flowerbed.length-1 : i + 1
        //check if the current index is 0 and if we still have flowers that needs to be planted
       if(flowerbed[i] === 0 && n > 0) {
           //we check if the back and front index values are equal to 0 
           if(flowerbed[backIndex] === 0 && flowerbed[frontIndex] === 0) {
                //we plant the flower and decrement the flowers that needs to be planted
                flowerbed[i] = 1
                n--
           }
       }
    }
    //if n is 0, we return true. meaning that all flowers can be planted, otherwise we return false
    return n === 0
};