// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let firstString = strs[0] // since array is never empty
    let charIndex = 0 
    let character = ""
    let prefix = ""
    let isMatch = true
    
    if(strs.length == 1) {
        prefix = strs[0]
    }

    for(y = 0; y < firstString.length; y++) {
        //we loop through the array and compare the current index
        for(i = 1; i < strs.length; i++) {
            character = firstString.charAt(charIndex)
            isMatch = checkMatch(character, charIndex, strs[i])      
            //we stop the loop if the match is not found
            if(!isMatch) {
                break;
            }
        } 

        if(isMatch) {
            prefix += character
            charIndex++
        }
    }    

    return prefix    
}

function checkMatch(char, index, string) {
    let isMatch = true
    if(char === string.charAt(index)) {
        isMatch = true
    }
    else {
        isMatch = false
    }

    return isMatch
}