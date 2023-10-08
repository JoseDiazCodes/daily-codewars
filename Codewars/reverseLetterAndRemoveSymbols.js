// link to problem:https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

// Solution
function reverseLetter(str) {
	let array = str.split("");
	let result = [];

	for (let letter of array) {
		let code = letter.charCodeAt();
		if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
			result.push(letter);
		}
	}
	return result.reverse().join("");
}
