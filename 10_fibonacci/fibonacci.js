const fibonacci = function(result, length) {
      var no1 = result[0],
          no2 = result[1],
          //the number that comes next in the sequence
          next, 
          //counts the numbers involved in the sequence
          cnt = 2;

    //while loop
    while (cnt < length) {
        next = no1 + no2;
        no1 = no2;
        no2 = next;
        result.push(next);
        cnt++;
    }
    return result;
};

 

// Do not edit below this line
module.exports = fibonacci;
