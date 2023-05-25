// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 

// Example 1:

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.
 

// Constraints:

// 0 <= big, medium, small <= 1000
// carType is 1, 2, or 3
// At most 1000 calls will be made to addCar

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

let bigSpace = 0
let mediumSpace = 0
let smallSpace = 0

var ParkingSystem = function(big, medium, small) {
    bigSpace = big
    mediumSpace = medium
    smallSpace = small
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    let spaceAvailable = 0
    //Step 1: Determine the carType
    //Step 2: check the available space of the car type
    //Step 3: update the space available of the car type 
    //Step 4: return true if there is space and false if there is none
    
    if(carType === 1 ) {
        spaceAvailable = bigSpace
        if(spaceAvailable-1 >= 0) {
            bigSpace--
            return true
        }
        else {
            return false
        }        
    }
    else if (carType === 2) {
        spaceAvailable = mediumSpace
        if(spaceAvailable -1 >= 0) {
            mediumSpace--
            return true
        }
        else {
            return false
        }        
    }

    else if(carType == 3) {
        spaceAvailable = smallSpace
        if(spaceAvailable -1 >= 0) {
            smallSpace--
            return true
        }
        else {
            return false
        }        
    }
    else {       
        console.log("invalid cartype")
        return false
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */