//suggested solution - 0/6 passed 6/6 failed
const palindromes = function(string) {
    processedString = string.toLowerCase().replace(/[^a-z]g, "");
    return {
        processedString
        .split("")
        .reverse()
        .join("") == processedString
    };
};

// Created Solution - 4/6 passed 2/6 failed:
// const palindromes = function(string) {

//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");

//     //convert string into array
//     let arrayValues = processedString.split('');
    
//     //reverse the array values
//     let reverseArrayValues = arrayValues.reverse();

//     //convert array back into string
//     let reverseString = reverseArrayValues.join('');

//     if (reverseString === string) {
//         //if the string in reversed form is not the same as the string
//         return false;
//     } else{
//         //if the string in reversed form is the same as the string:
//         return true;
//     }
// }


// Do not edit below this line
module.exports = palindromes;
