/**
 * @param {character[][]} board
 * @return {boolean}
 */
 //Step 1: a sudoku is valid if all rows, columns, and grids are valid
 //the problem definition of valid is that there must be no repition of the digits 1-9 
 var isValidSudoku = function(board) {
    return isRowOk(board) && isColumnOk(board) && isGridOk(board)
};

//Step 2: check if the row is ok by iterating through each row and checking if no duplicates exist
//a map is used while we iterate through the rows using the sudoku digit as key and the number of 
//times the digit is encounterd as the value
function isRowOk(boardArray) {
    let result = true

    for(let row = 0; row < 9; row++) {
        let map = new Map()
        for(let column = 0; column < 9; column++) {
           let currentNumber = boardArray[row][column] 
           if(map.has(currentNumber)) {
               map.set(currentNumber, map.get(currentNumber) + 1)
           }
           else {
               map.set(currentNumber, 1)
           }
        }       

        if(!isMapValid(map)) {
            result = false
            break
        }
    }

    return result
}
//Step 3: check if the column is ok by iterating through each row and checking if no duplicates exist
//a map is used while we iterate through the rows using the sudoku digit as key and the number of 
//times the digit is encounterd as the value
function isColumnOk(boardArray) {
    let result = true 
    for(let column = 0; column < 9; column++) {
        let map = new Map()
        for(let row = 0; row < 9; row++) {
            let currentNumber = boardArray[row][column] 
            if(map.has(currentNumber)) {
                map.set(currentNumber, map.get(currentNumber) + 1)
            }
            else {
                map.set(currentNumber, 1)
            }
        }
        
        if(!isMapValid(map)) {
            result = false
            break
        }          
    }
    return result
}
//Step 4: check if the grids are ok by iterating through each row and checking if no duplicates exist
//a map is used while we iterate through the rows using the sudoku digit as key and the number of 
//times the digit is encounterd as the value
function isGridOk(boardArray) {
    let result = true
    //here we plot out the index for each grids and we check if all 9 grids are valid
    const grid1 = [[0,0],[0,1],[0,2],
                   [1,0],[1,1],[1,2],
                   [2,0],[2,1],[2,2]]
    const grid2 = [[0,3],[0,4],[0,5], 
                   [1,3],[1,4],[1,5],
                   [2,3],[2,4],[2,5]]
    const grid3 = [[0,6],[0,7],[0,8],
                   [1,6],[1,7],[1,8],
                   [2,6],[2,7],[2,8]]
    const grid4 = [[3,0],[3,1],[3,2],
                   [4,0],[4,1],[4,2],
                   [5,0],[5,1],[5,2]]
    const grid5 = [[3,3],[3,4],[3,5],
                   [4,3],[4,4],[4,5],
                   [5,3],[5,4],[5,5]]
    const grid6 = [[3,6],[3,7],[3,8],
                   [4,6],[4,7],[4,8],
                   [5,6],[5,7],[5,8]]
    const grid7 = [[6,0],[6,1],[6,2],
                   [7,0],[7,1],[7,2],
                   [8,0],[8,1],[8,2]]
    const grid8 = [[6,3],[6,4],[6,5],
                   [7,3],[7,4],[7,5],
                   [8,3],[8,4],[8,5]]
    const grid9 = [[6,6],[6,7],[6,8],
                   [7,6],[7,7],[7,8],
                   [8,6],[8,7],[8,8]]
    
    result = checkGrid(grid1, boardArray) 
        && checkGrid(grid2, boardArray)
        && checkGrid(grid3, boardArray)
        && checkGrid(grid4, boardArray)
        && checkGrid(grid5, boardArray)
        && checkGrid(grid6, boardArray)
        && checkGrid(grid7, boardArray)
        && checkGrid(grid8, boardArray)
        && checkGrid(grid9, boardArray)

    return result
}
//This is the function that checks each grid if no duplicate occurs from the digit 1-9
function checkGrid(gridArray, boardArray) {
    let result = true
    let map = new Map()
    for(let i = 0; i < gridArray.length; i++) {
        let x = gridArray[i][0]
        let y = gridArray[i][1]       
        let currentNumber = boardArray[x][y]
 
        if(map.has(currentNumber)) {
            map.set(currentNumber, map.get(currentNumber) + 1)
        }
        else {
            map.set(currentNumber, 1)
        }         
    } 

    result = isMapValid(map)
    return result
}

//This function checks if our map is valid. 
//the map contains the key/value pair of sudoku digits and its corresponding counter
function isMapValid(map) {
    let result = true
    //we filter out "." since it represents a blank or empty tile
    if(map.has(".")) {
        map.delete(".")
    }
    //we place the values of the map into a set to remove duplicates of 1
    let set = new Set(Array.from(map.values()))
    //the size represents the size of our set which should only be 1 or 0
    let size = set.size 
    //the value represents the element inside the set which contains the counter 
    //the value should only be 1 or 0 (if the value is 2 or greater, that means a duplicate is present)
    let values = Array.from(set.values())
    
    if(size > 1  || values > 1 ) {
        result = false
    }       

    return result
}


