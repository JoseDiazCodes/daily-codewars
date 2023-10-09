// link to problem:
// solution : https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
	// base case for the recurssion

	if (n < 0 || n > 12) {
		throw new RangeError("Invalid value for n");
	}
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

// another way to solve the problem

function factorial(n) {
	if (n < 0 || n > 12) throw new RangeError();
	return n <= 1 ? 1 : n * factorial(n - 1);
}
