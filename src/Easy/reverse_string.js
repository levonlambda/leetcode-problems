// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory. 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //the index at the end of our array
    let end = s.length -1
    //iterate half the length of our string
    for(let i = 0; i < s.length / 2; i++) {
        //create a temp variable to store index i
        //then swap i to end
        //then swap end to the temp
        let temp = s[i]
        s[i] = s[end]
        s[end] = temp
        end--
    }
 
 };