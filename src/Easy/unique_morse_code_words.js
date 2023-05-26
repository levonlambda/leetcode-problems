// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

 
// Example 1:

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// Example 2:

// Input: words = ["a"]
// Output: 1
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 12
// words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
   let map = new Map()

    //Step 1: create a map using the letter as key and the code as value
   for(let i = 0; i < alphabet.length; i++) {
       map.set(alphabet.charAt(i), alphabetCode[i])
   }
   //Step 2: create a set to store the translated words 
   let translatedWords = new Set()
   //Step 3: iterate through the words array to get the individual word
   for(let i = 0; i < words.length; i++) {
       let word = words[i]
       let translation = ""
       //Step 4: iterate through the length of the word to get the letters of each word
        for(let j = 0; j < word.length; j++) {
            //Step 5: use the map to get the code of the current letter and add it to the 
            //translation string
            translation += map.get(word.charAt(j))
        }
        //Step 6: add the translation to our translatedWords set
        translatedWords.add(translation)
   }
    //Step 7: return the size of our translatedWords set(Set does not have any duplicate)
   return translatedWords.size
};

