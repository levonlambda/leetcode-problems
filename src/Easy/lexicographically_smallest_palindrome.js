// You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.
// Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.
// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
// Return the resulting palindrome string. 

// Example 1:

// Input: s = "egcfe"
// Output: "efcfe"
// Explanation: The minimum number of operations to make "egcfe" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "efcfe", by changing 'g'.

// Example 2:

// Input: s = "abcd"
// Output: "abba"
// Explanation: The minimum number of operations to make "abcd" a palindrome is 2, and the lexicographically smallest palindrome string we can get by modifying two characters is "abba".

// Example 3:

// Input: s = "seven"
// Output: "neven"
// Explanation: The minimum number of operations to make "seven" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "neven".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let palindrome = s
    //If the string is not a plaindrome
    if(!isPalindrome(s)) {
        //we convert it to one
        palindrome = convertToPalindrome(s)
    }

    return palindrome
};
//this function converts a string to a lexicographically smaller palindrome
function convertToPalindrome(s) {
    let isValid = false
    let result = ""    
    //convert the string into an array of characters
    let stringArray = s.split('')
    //iterate through the length of the array with index i at the first element
    //and index j at the last element
    for(let i = 0, j = stringArray.length -1; i < stringArray.length; i++, j--) {
        if(!isValid){
            //if the character at index i and j are not equal
            if(stringArray[i] !== stringArray[j]) {
                //we retrieve the character that appears earlier in the alphabet
                let char = getFirstOccuringCharacter(stringArray[i], stringArray[j])
                stringArray[i] = char
                stringArray[j] = char
                //combine the array back into a string
                result = stringArray.join('')
                //check if the string is a valid palindrome
                isValid = isPalindrome(result)
            }   
        }
    }

    return result    
}
//checks if s is a valid palindrome
function isPalindrome(s) {
    let isPalindrome = true;
    let string1 = ""
    let string2 = ""
    //check if length of input is even
    if(s.length % 2 === 0) {
         string1 = s.slice(0, (s.length/2))
         string2 = s.slice(s.length/2).split('').reverse().join('')   
    }
    // if length of input is odd remove center character
    else {
         string1 = s.slice(0, (s.length/2))
         string2 = s.slice((s.length/2)+1).split('').reverse().join('')  
        
    }
    // if string1 and string2 is not equal, then it is not a palindrome
    if(string1 !== string2) {
        isPalindrome = false
     }

    return isPalindrome    
}



//returns the character that appears earlier in the alphabet
function getFirstOccuringCharacter(char1, char2) {
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('')
    let char1Index = alphabetArray.indexOf(char1)
    let char2Index = alphabetArray.indexOf(char2)
    if(char1Index < char2Index) {
        return char1
    }
    else {
        return char2
    }
}

