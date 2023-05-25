// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
 
// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.

// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.

// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.
 

// Constraints:

// 1 <= operations.length <= 100
// operations[i] will be either "++X", "X++", "--X", or "X--".

/**
 * @param {string[]} operations
 * @return {number}
 */

var finalValueAfterOperations = function(operations) {
    let X = 0

    for(let i = 0; i < operations.length; i++) {
        let currentElement = operations[i]    

        //Step 1 parse the first character to of currentArray and identify if it is an operation
        //Note: There currentArray will always consist of 3 characters
        if(isOperation(currentElement)) {      
            //we remove the third character of the string since we know the first 2 is the operation
            currentElement = currentElement.slice(0,2)               
        }
        //If the first character is not an operation then it represents the variable x
        else {
            //to get the operation, we remove the first character
            currentElement = currentElement.slice(1)
        }

        
        X += performOperation(currentElement)
    }

    return X
};

//This function will check the first character of the current element represents an operation
function isOperation(currentElement) {
    let firstChar = currentElement.charAt(0)

   return (firstChar === "-" || firstChar === "+")
}

//This function determins if we add or subtract the current element by 1 
function performOperation(currentElement) {
   
    if(currentElement.charAt(0) === "+" && currentElement.charAt(1) === "+") {        
         return 1
    } 
    else if(currentElement.charAt(0) === "-" && currentElement.charAt(1) === "-") {
        return -1
    }

}

