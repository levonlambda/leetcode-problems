// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

// Input: s = "Hello"
// Output: "hello"

// Example 2:

// Input: s = "here"
// Output: "here"

// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    //Step 1: create an array of string array of all lowercase and uppercase letters
    let lowercase = "abcdefghijklmnopqrstuvwxyz".split('')
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    let result = ""
    //Step 2: iterate through the length of the input string and get the character based on index i
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        //Step 3A: check if the current character does not exist in our lowercase array
        if(!lowercase.includes(char)) {
            //Step 3A-1: check if the current charracter exist in our uppercase array
            if(uppercase.includes(char)) {
                result+= lowercase[uppercase.indexOf(char)]
            }
            //Step 3A-2: since it does not exist in our uppercase array just add the char to our result
            else {
                result += char
            }
        }
        //Step 3B: the letter is a lower case so we just add the char to our result
        else {
            result+=char
        }
    }
    //Step 4: return the result
    return result
};

