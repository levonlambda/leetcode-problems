// Given a sentence text (A sentence is a string of space-separated words) in the following format:

// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.

// Return the new text following the format shown above.

// Example 1:

// Input: text = "Leetcode is cool"
// Output: "Is cool leetcode"
// Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
// Output is ordered by length and the new first word starts with capital letter.

// Example 2:

// Input: text = "Keep calm and code on"
// Output: "On and keep calm code"
// Explanation: Output is ordered as follows:
// "On" 2 letters.
// "and" 3 letters.
// "keep" 4 letters in case of tie order by position in original text.
// "calm" 4 letters.
// "code" 4 letters.

// Example 3:

// Input: text = "To be or not to be"
// Output: "To be or to be not"
 

// Constraints:

// text begins with a capital letter and then contains lowercase letters and single space between words.
// 1 <= text.length <= 10^5

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    //Step 1: convert the string into lowercase words and assign to wordArray
    let wordArray = text.toLowerCase().split(' ')
    //Step 2: do a double for loop to traverse through the length of the array
    for(let i = 0; i < wordArray.length; i++) {
        for(let j = 0; j <wordArray.length; j++) {
            //Step 3: get the next index and check if it doesnt exceed the length of the wordArray
            let nextIndex = j+1
            if(nextIndex < wordArray.length) {
                //Step 4: compare if the length of currentWord is greater than the next word, swap if true
                let currentWord = wordArray[j]
                let nextWord = wordArray[nextIndex]               
                if(currentWord.length > nextWord.length) {                   
                    let temp = currentWord
                    wordArray[j] = nextWord
                    wordArray[nextIndex] = temp
                }                        
            }
        }    
    } 
    //Step 5: now that the array is sorted, change the first character of the first element to uppercase
    if(wordArray.length > 0 && wordArray[0]) {
        const fChar = wordArray[0].charAt(0).toUpperCase()
        wordArray[0] = fChar+wordArray[0].slice(1)
    }
    //Step 6: convert the words back into string and return the result
    return wordArray.join(' ')
 
};