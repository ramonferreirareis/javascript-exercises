const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((total, value) => total + value);
  }
};

const multiply = function(arr) {
  return arr.reduce((total, value) => total * value);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let sum = number;
    let fac = number - 1;
    for (let i = 0; i < number; i++) {
      sum = sum * fac;
      if(fac > 1) fac--;
    }
    return sum;
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
