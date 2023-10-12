// link to problem: https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
// solution
function minValue(values) {
	values = values
		.filter((value, index) => values.indexOf(value) === index)
		.sort((a, b) => a - b)
		.join("");
	return Number(values);
}
