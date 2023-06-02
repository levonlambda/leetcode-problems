// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//  Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //Step 1: convert the string s and t into an array of letters and sort them according to their charCode
    let sourceA = s.split('')
        sourceA.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))

    let sourceB = t.split('')
        sourceB.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
    //Step 2: combine the array back into a string and compare if they are equal
        return sourceA.join('') === sourceB.join('')       
};