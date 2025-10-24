const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;   
};

const sum = function(arr) {
  let summation = 0;
  for (let item in arr) {
    summation += arr[item];
  }
  return summation
};

const multiply = function(arr) {
  let multiple = 1
  for (let item in arr) {
    multiple *= arr[item];
  }
  return multiple;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  result = 1
  if (x === 0) {
    return result;
  } else {
    for (i = x; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
