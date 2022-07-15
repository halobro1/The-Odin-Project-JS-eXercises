const leapYears = function(year) {
    return  (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0) ;
}

//pseudocode:
//1. write condition that the year must be divisible by 4, return true
//2. write condition that if the year can be divided by 100, return false
//3. write condition that the year can be divided by 400, return true 

// Do not edit below this line
module.exports = leapYears;
