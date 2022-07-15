const reverseString = function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
