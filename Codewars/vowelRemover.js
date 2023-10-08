// Problem link: https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
// Solution
function shortcut(string) {
	let vowels = "aeiouAEIOU";
	let result = "";
	for (let letter of string) {
		if (!vowels.includes(letter)) {
			result += letter;
		}
	}
	return result;
}
