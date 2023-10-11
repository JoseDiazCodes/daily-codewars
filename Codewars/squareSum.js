// link: to problems: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// solution
function squareSum(numbers) {
	let squared = numbers.map((e) => e * e);

	return squared.reduce((a, b) => a + b, 0);
}
