// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    //Step 1: break the string into words by splitting them using an empty space as the separator
    let words = s.split(' ')
    let reversed = []
    //Step 2: iterate through the words array and split the words into its individual characters 
    for(let i = 0; i < words.length; i++) {
        let wordArray = words[i].split('')    
        //Step 3: reverse the array using the reverse function
        let wordArrayReversed = wordArray.reverse()    
        //Step 4: convert the array back into a string using join function
        let wordReversed = wordArrayReversed.join()
        //Step 5: push the string into our reversed array
        reversed.push(wordReversed)
    }
    //Step 6: transform the array of strings into a single string separated with an empty space
    return reversed.join(' ')

};