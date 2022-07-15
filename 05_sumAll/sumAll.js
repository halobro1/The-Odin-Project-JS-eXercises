const sumAll = function(max, min) {
    if (min<0 || max<0) return "ERROR"
    

    let sum=0;
    for (let i=min;i=max;i++){
        sum+=i;
    };
    return sum;
};

// pseudocode:
// 1. write condition that does not work with negative numbers 
// 2. write condition that does not work with non-number parameters
// 3. write 

// Do not edit below this line
module.exports = sumAll;
