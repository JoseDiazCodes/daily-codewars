//link to problem: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
//solution
var capitals = function (word) {
	let result = [];

	for (let letter of word) {
		if (letter === letter.toUpperCase()) {
			result.push(word.indexOf(letter));
		}
	}
	return result;
};
