const add = function (a, b) {
  const addition = a + b;
  return addition;
};

const subtract = function (a, b) {
  const subtraction = a - b;
  return subtraction;
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total;
};


const multiply = function (array) {
  let totalMultiply = 1;
  for (let i = 0; i < array.length; i++) {
    totalMultiply *= array[i];
  }
  return totalMultiply
};

const power = function (a, b) {
  return Math.pow(a, b);
};

// Recursive approach
const factorial = function(n){
  if(n == 0 || n == 1){
    return 1;
  }else{
    return n * factorial(n-1);
  }
};

// Iterative approach
// const factorial = function (n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else {
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   }
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
