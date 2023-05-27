// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
 
// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent. 

// Constraints:

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    //Step 1: break the allowed words into a chars and put into validChars array
    let validChars = allowed.split('')
    let validCount = 0
    //Step 2: iterate through the words array
    for(let i = 0; i < words.length; i++) {
        //Step 3: break the words into chars and put into a set to remove duplicates
        let currentSet = new Set(words[i].split(''))
        let isValid = true
        //Step 4: iterate over each character in the set
        currentSet.forEach(function(char){
            //Step 5: check if a character is not present in our validChars array
            if(!validChars.includes(char)){
                //set is valid to false i
                isValid = false
            }
        }) 
        //Step 6: if isValid is still true, increment our counter
        if(isValid) {
            validCount++
        }
    }
    //Step 7: return result
    return validCount

};