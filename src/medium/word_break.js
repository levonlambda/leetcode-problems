// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, map = new Map()) {
    //map is used for memoization
    if(map.has(s)) return map.get(s)
    //setup our base case
    if(s.length === 0) return true
    if(s.length < 0) return null
    //iterate over the length of wordDict array
    for(let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i]
        let length = word.length
        //we split the string based on the length of our word to compare if they match
        const stringToCheck = s.split('').splice(0,length).join('')        
        let result = null
        if(stringToCheck === word) {
            //since the string match, we get the remaining string and recursively call wordBreak
            const remainingString = s.split('').splice(length).join('')
            result = wordBreak(remainingString, wordDict, map)
            //we include the result in our map to prevent recalculating the same result
            map.set(remainingString, result)
            //if the result is not null and the reuslt is true, it means a match has been found
            if(result !== null && result === true) {
                return result
            }
        }
    }
    //if our code reaches this point, a match has not been found and we return false
    return false 
};

