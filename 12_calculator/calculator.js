const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let s= arr.reduce((acc, ele)=>acc+ele, 0);
  return s;
};

const multiply = function(arr) {
  let mult = arr.reduce((mul_acc, n)=>mul_acc*n, 1);
  return mult;
};

const power = function(n,p) {
	return n**p;
};

const factorial = function(n) {
	if(n==0 || n==1){
    return 1;
  }
  return n*factorial(n-1);
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
