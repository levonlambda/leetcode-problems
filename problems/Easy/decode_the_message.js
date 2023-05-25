// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

 

// Example 1:
// https://assets.leetcode.com/uploads/2022/05/08/ex1new4.jpg

// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

// Example 2:
// https://assets.leetcode.com/uploads/2022/05/08/ex2new.jpg

// Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// Output: "the five boxing wizards jump quickly"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".
 

// Constraints:

// 26 <= key.length <= 2000
// key consists of lowercase English letters and ' '.
// key contains every letter in the English alphabet ('a' to 'z') at least once.
// 1 <= message.length <= 2000
// message consists of lowercase English letters and ' '.

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    //step 1: format the key and remove duplicate characters   
    //step 2: map the character from the alphabet
    //step 3: translate the message using the map

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    let keyWithoutDuplicateAndSpace = removeDuplicate(key)
    let map = new Map()
    let result = ""
  
    for(let i = 0; i < keyWithoutDuplicateAndSpace.length; i++) {
        let currentChar = keyWithoutDuplicateAndSpace.charAt(i)
        if(currentChar !== ' ') {            
            map.set(currentChar, alphabet[i])
        } 
    }
    map.set(" ", " ")

    for(let i = 0; i < message.length; i++) {
        result += map.get(message.charAt(i))
    }

    return result  
};

function removeDuplicate(string) {
    let set =  new Set(string.split(''))   
    let result = ""
    //remove space
    set.forEach(function(char) {
        if(char !== ' ') {
            result += char
        }
    })
  
    return result
}