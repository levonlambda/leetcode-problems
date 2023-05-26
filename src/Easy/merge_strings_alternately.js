// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let extra =""
    let result = ""
    //Step 1: check if word2 is longer than word1
    if(word1.length < word2.length) {
        //Step 2: slice off from word2 the letters in excess of word1's length
        //and store it in the variable extra
        extra = word2.slice(word1.length)
        //Step 3: update word2 to represent the string with the same length as word1
        word2 = word2.slice(0, word1.length)
    }

    //Step 4: iterate through word1's length
    for(let i = 0; i < word1.length; i++) {
        //Step 5: if index i is lesser than word2's length, alternate word1 and word2's character
        if(i < word2.length) {
            result += word1.charAt(i) + word2.charAt(i) 
        }
       else {
           //Otherwise we just contactenate word1's character to our result
           result += word1.charAt(i)
       }
    }
    //Step 6: add the extra string from word2 if it exist
    result+=extra
    //Step 7: return the result
    return result
}