// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some 
//(can be none) of the characters without disturbing the relative positions of the remaining characters. 
//(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 
// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, 
//and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //Step 1: split the string s into characters and place into array
    let isSubsequence = false    
    let sArray = s.split('')   
    let currChar = sArray[0]
    //Step 2: iterate over the length of string t
    for(let i = 0; i < t.length; i++) {
        //Step 3: if the current characte of s matches the character of t
        // remove the character from the array by using shift
        if(currChar === t.charAt(i)) {
            if(sArray.length > 0) {
                sArray.shift() 
                currChar = sArray[0]       
            }
            else {
                break
            }
        }        
    }  
    //Step 4: it is a substring if the length of our sArray is 0 meaning all characters within it has been found
    isSubsequence = sArray.length === 0 ? true : false     
    return isSubsequence
};