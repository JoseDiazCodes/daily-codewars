// link to problem: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// solution
function squareDigits(num) {
	num = num.toString().split("");

	let numberArray = num.map(Number);
	let result = numberArray.map((e) => e * e).join("");
	return Number(result);
}
