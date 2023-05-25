// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
 

// Constraints:

// 1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const G_INCREMENT = 0
    const O_INCREMENT = 0
    const AL_INCREMENT = 2

    const G_STRING = "G"
    const O_String = "o"
    const AL_String = "al"

    let interprettedString = ""

    for(let i = 0; i < command.length; i++) {
        const currentChar = command.charAt(i)
        if(currentChar === "G") {
            interprettedString += G_STRING
            //we move the index
            i+= G_INCREMENT
        }
        else if(currentChar === "(") {
            //we are assuming that the command string has valid input
            //and that the next character after '(' must be ')' or 'all' 
            let nextChar = command.charAt(i+1)
            if(nextChar === ")") {
                interprettedString += O_String
                  //we move the index
                  i+= O_INCREMENT

            }
            else if(nextChar === "a") {
                interprettedString += AL_String
                i+= AL_INCREMENT
            }
        }      
    }

    return interprettedString

};