// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let formattedAddress = ""
    //Step 1: iterate through the ip address and look for '.' character
    for(let i = 0; i < address.length; i++) {
        let currentChar = address.charAt(i)
        //Step 2A: if the current character is not '.' append the character to our formattedAddress string
        if(currentChar !== ".") {
            formattedAddress += currentChar
        } 
        //Step 2B: if the current character is '.' append the string '[.]' to our formattedAddress string
        else {
            formattedAddress += "[.]"
        }
    }
    //Step 3: return the result
    return formattedAddress
};