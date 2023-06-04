// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let output = []
    let subStringLength = p.length;
    //Step 1: intialize our map with the substring of s from index 0 until the length of p
    let map1 = convertToMap(s.slice(0, subStringLength))
    let map2 = convertToMap(p)

    //Step 2: iterate over the length of s
    for(let i = 0; i < s.length; i++) {
        //Step 3: check if index i + p.length is <= to our s.length
        if(i+subStringLength <= s.length) {          
            //Step 4: if map1 and map2 is an anagrap push the index i to our output
            if(isAnagram(map1,map2)) {
                output.push(i)
            }
            //Step 5: here we update map1 
            //by removing the character at index i and adding character at index i + p.length
            let charToRemove = s.charAt(i) 
            let charToAdd = s.charAt(i + subStringLength)
            updateMap(map1, charToAdd, charToRemove)
        }       
    }

    return output
};

//This function updates the map by incrementing the value of charToAdd and
//decrementing the value of charToRemove. if value will be zero after decerementing, delete it from map
function updateMap(map, charToAdd, charToRemove) {
    //Step 1A: add the char exists in the map and increment its value by 1
    if(map.has(charToAdd)) {
        map.set(charToAdd, map.get(charToAdd) + 1)
    }
    //Step 1B: if the char does not exist, add it to the map with an intial value of 1
    else {
        map.set(charToAdd, 1)
    }
    //Step 2: check if the char to be remove exists in our map
    if(map.has(charToRemove)) {
        const charCount = map.get(charToRemove)
        //if the value of the char is 1 (this means it will be zero after decrementing) delete it from map
        if(charCount === 1) {
            map.delete(charToRemove)
        }
        //otherwise decrement its value by 1
        else {
             map.set(charToRemove, map.get(charToRemove) - 1)
        }
    }
}

//This function takes in a string and converts it into a map with the character as its key and the number
//of times we encounter that charracter as its value \
//(e.g "aab" key = a will have a value = 2, key = b will have a value = 1)
function convertToMap(string) {
    let map = new Map()
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i)
        if(!map.has(char)) {
            map.set(char, 1)
        }
        else {
            map.set(char, map.get(char) + 1)
        }
    }
    return map
}

//This function compares two maps and checks if it is an anagram 
function isAnagram(map1, map2) {
    let isValid = true
    let containsAllKeys = true

    //Step 1: we check if map1 contains all the keys of map2. 
    let map2Keys = [...map2.keys()]
    for(let i = 0; i < map2Keys.length; i++) {
        const currentKey = map2Keys[i]
        if(!map1.has(currentKey)) {
            containsAllKeys = false 
        }       
    }
    //Step 2: if all keys are present we compare the values of the keys in map2 and make sure that
    //map2 has a lower value than map1 
    //e.g map1 = abc, map2 = aaa is not an anagram because the char 'a' occurs only once in map1 and thrice in map2
    if(containsAllKeys) {
        let iterator = map2.keys()
        for(let key of iterator) {
            let map1Value = map1.get(key)
            let map2Value = map2.get(key)

            if(map1Value < map2Value) {
                isValid = false
            }
        }
    }
    else {
        isValid = false
    }

    return isValid
}







