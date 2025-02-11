const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numArray) {
	let array = [];
  array = numArray;
  let sum = 0;
  for(let i = 0; i < array.length; i++ ) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(numArray) {
  let array = [];
  array = numArray;
  let sum = 1;
  for(let i = 0; i < array.length; i++ ) {
    sum = sum * array[i];
  }
  return sum;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let fac = 1;
	for(let i = 1; i <= a; i++){
    fac = fac * i;
  }
  return fac;
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
