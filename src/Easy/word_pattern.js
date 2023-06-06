// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    //Step 1: convert the string s into an array of words
    const words = s.split(' ')
    //Step 2: if the length of our wordsa array and our pattern is not equal then return false
    if(pattern.length !== words.length) {
        return false
    }
    //Step 3: create 2 maps, to prevent duplicate entries
    //map will be for mapping character as key and word as value (char:word)
    //map2 will be for mapping word as key, and character as value (word:char)
    let map = new Map()
    let map2 = new Map()
    //Step 4: iterate over the pattern and add them to our map and map2
    for(let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        //check if map and map2 does not have the same key/value
        if(!map.has(char) && !map2.has(words[i])) {
             map.set(char,words[i])
             map2.set(words[i], char)
        }
    }
    //Step 5: generate a string from our map using the pattern
    let generated = ""
    for(let i = 0; i < pattern.length; i++) {
        generated+= map.get(pattern[i])
        if(i+1 !== pattern.length) {
            generated+=" "
        }
    }
    //Step 6: compare the generated string with the string from the input
    return generated === s

};