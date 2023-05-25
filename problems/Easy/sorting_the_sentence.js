// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
 
// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 
// Constraints:

// 2 <= s.length <= 200
// s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
// The number of words in s is between 1 and 9.
// The words in s are separated by a single space.
// s contains no leading or trailing spaces.

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {   
    //Step 1: convert the input s into an array of words using an empty space as a delimiter
    let words = s.split(' ')
    let sentence = []

    for(let i = 0; i < words.length; i++) {        
        let currentWord = words[i]
        //Step 2: remove the last character of each word since it represents the number between 1 to 9
        let index = parseInt(currentWord.charAt(currentWord.length-1))
        //Step 3: use the number obtained in step 2 and use that as an index to place the word in the sentence array
        sentence[index] = currentWord.slice(0,currentWord.length-1)       
    }

    //Step 4: the sentence array is already sorted but may contain null values that we need to remove
    return sentence.filter(function(word){
        if(word) {
            return true
        }
        else  {
            return false
        }
    //Step 5: convert the sentence array back into a string separated by space
    }).join(" ")
   
};