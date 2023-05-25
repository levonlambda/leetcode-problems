// A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

// <col> denotes the column number c of the cell. It is represented by alphabetical letters.
// For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
// <row> is the row number r of the cell. The rth row is represented by the integer r.
// You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

 

// Example 1:
// https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png

// Input: s = "K1:L2"
// Output: ["K1","K2","L1","L2"]
// Explanation:
// The above diagram shows the cells which should be present in the list.
// The red arrows denote the order in which the cells should be presented.

// Example 2:
// https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png

// Input: s = "A1:F1"
// Output: ["A1","B1","C1","D1","E1","F1"]
// Explanation:
// The above diagram shows the cells which should be present in the list.
// The red arrow denotes the order in which the cells should be presented.
 

// Constraints:

// s.length == 5
// 'A' <= s[0] <= s[3] <= 'Z'
// '1' <= s[1] <= s[4] <= '9'
// s consists of uppercase English letters, digits and ':'.

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {

    //Step 1: create an ALPHABET array that contains all the capital letter of the alphabet
    const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
     'R','S','T','U','V','W','X','Y','Z']
    //Step 2: split the input s using : as the separator to create an array with 2 elements
    const cellArray = s.split(':') 
    //Step 3: get the first and second column based on the character at position 0
    let firstColumn = ALPHABET.indexOf(cellArray[0].charAt(0)) 
    let secondColumn = ALPHABET.indexOf(cellArray[1].charAt(0))
    //Step 4: get the first and second row based on the number after the position 0 
    let firstRow = cellArray[0].slice(1) 
    let secondRow = cellArray[1].slice(1) 
 
    let output = []
    //Step 5: iterate through the first column up to the second column
    for(let colIndex = firstColumn; colIndex <= secondColumn; colIndex++) {
        //Step 6: iterate through the first row up to the second row
        for(let rowIndex = firstRow; rowIndex <= secondRow; rowIndex++) {        
            //Step 7: push the result into our output array
            output.push(ALPHABET[colIndex]+rowIndex)   
        }
    }
    //Step 8: return the output array
    return output   
 };