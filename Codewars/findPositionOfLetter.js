// link to problem: https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
// solution
function position(letter) {
	let alpha = "abcdefghijklmnopqrstuvwxyz";
	letter = letter.toLowerCase();
	return `Position of alphabet: ${alpha.indexOf(letter) + 1}`;
}
