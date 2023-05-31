// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let openP = new Array(n).fill('(')
    let closeP = new Array(n).fill(')')
    //Step 1: create an array of equal number of '(' and ')' based on n
    //Step 2: get all possible combinations (including invalid ones)
    let allCombination = getPermutation([...openP, ...closeP])
    //Step 3: filter the invalid combination and return the correct one
    return filterCombination(Array.from(allCombination))
};

//This function checks and filters out the invalid combinations
function filterCombination(array) { 
    let filteredArray = array.filter(combinationArray => {
        let isValid = true
        let openCnt = 0
        for(let i = 0; i < combinationArray.length; i++) {
            let current = combinationArray[i]
            if(current === '(') {
                openCnt++
            }
            else {
                if(openCnt === 0) {
                    isValid = false
                }
                else {
                    openCnt--
                }
            }           
        }
        return isValid
    })
    return filteredArray  
}

//This function gets the all possible permutation without duplicates 
function getPermutation(array) {
    if(array.length === 0) {
        return [[]]
    }

    let firstElement = array.shift()
    let withoutFirstElement = getPermutation(array)
    let withFirstElement = new Set()

    withoutFirstElement.forEach(permutation => {
        for(let i = 0; i <= permutation.length; i++) {
            withFirstElement.add([...permutation.slice(0,i),
             firstElement,
              ...permutation.slice(i)].join(''))
        }
    })

    return withFirstElement
}
