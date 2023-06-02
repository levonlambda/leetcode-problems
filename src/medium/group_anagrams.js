// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //Step 1: create a map to intially group anagrams together
    let map = new Map()
    let result = []
    //Step 2: iterate through each word in the array
    strs.forEach( word => {
        //Step 3: split the words into a character array and sort them by their charCode and combine them back into a string
        let sorted = word.split('')
            .sort((a,b)=> a.charCodeAt(0)- b.charCodeAt(0))
            .join('')
        //Step 4: check the map if it contains a key with the same name as our sorted word
        if(map.has(sorted)) {
            //Step 5A: get the array from the map and add in the new word 
            map.get(sorted).push(word)
        }
        else {
            //Step 5B: since the key does not exist, add a key/pair into the map using the sorted word as key and the word as an array
            map.set(sorted,[word])
        }
    })
    //Step 6: iterate over the map and store the arrays into our result
    map.forEach(array => result.push(array))
    //Step 7: return the result
    return result
};