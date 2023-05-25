// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    //Step 1: create a string representing all the letters of the alphabet
    //Step 2: remove all the duplicate characters of the sentence string
    //Step 3: check if the sentence contains all the letters of the alphabet

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let sentenceSet = new Set(sentence.split(''))
    let isPangram = true
    //we check if our alphabet string and the sentence without duplicate has the same length
    if(alphabet.length == sentenceSet.size) {   
        //we iterate through all the characters of the alphabet string
        for(let i = 0; i < alphabet.length; i++) {
            //we check if our sentence does not have the current character of the alphabet
            //then it is not a pangram
            if(!sentenceSet.has(alphabet.charAt(i))) {
                isPangram = false
            }
        }
    }
    //if our alphabet and sentence without duplicate does not have the same length
    //then it is not a pangram
    else {
        isPangram = false
    }

    return isPangram    
};
