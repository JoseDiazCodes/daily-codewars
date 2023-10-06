// problem link: https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

//Solution
function sumDigits(number) {
	let string = Math.abs(number).toString();
	let arrayOfString = string.split("");

	let numberArr = arrayOfString.map((e) => Number(e));
	return numberArr.reduce((a, b) => a + b, 0);
}
