// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    //1. transform string to lowercase    
     let formattedString = removeNonAlphaNumeric(s.toLowerCase())

     return validate(formattedString)
};

function removeNonAlphaNumeric(string) {    
    //2. remove all non-alphanumeric numbers
    let validChar = ['a', 'b', 'c', 'd','e','f','g','h','i','j',
                     'k','l','m','n','o','p','q','r','s','t','u',
                     'v','w','x','y','z',
                     '1','2','3','4','5','6','7','8','9','0']

    let formattedString = ""

    for(let i = 0; i < string.length; i++) {
        let currentChar = string.charAt(i)

        //we check if the currentChar exists in the validChar array
        for(let j = 0; j < validChar.length; j++) {
            //if it exists, we add it to the formattedString
            if(currentChar === validChar[j]) {
                formattedString += currentChar
            }
        }
    }

    return formattedString
}

function validate(string) {
     let reverseString = ""
     let isPalindrome = true;

    //3. manually reverse the string
    for(let i = string.length-1; i >= 0 ; i--) {
        reverseString += string[i]
    }
    
    //4. compare the reverseString to current string
    for(let i = 0; i < string.length; i++) {

        //if at some point the characters are not equal, its not a palindrome and we 
        //dont need to go through with the loop
        if(string.charAt(i) !== reverseString.charAt(i)) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome 
}