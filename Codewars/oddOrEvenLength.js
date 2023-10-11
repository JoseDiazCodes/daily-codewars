// link: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// solution
function oddOrEven(array) {
	if (array.length === 0) {
		return "even";
	}

	let reduction = array.reduce((a, b) => a + b);
	return reduction % 2 === 0 ? "even" : "odd";
}
