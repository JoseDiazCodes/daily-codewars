// link: https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
//solution
String.prototype.toAlternatingCase = function () {
	let array = this.split("");
	let result = [];

	for (let letter of array) {
		if (letter === letter.toLowerCase()) {
			result.push(letter.toUpperCase());
		} else if (letter === letter.toUpperCase()) {
			result.push(letter.toLowerCase());
		} else {
			result.push(letter);
		}
	}
	return result.join("");
};

// idgaf about no indexes
// numbers are unchanged
// strings cannot be mutated so turn into array
// using split and join
