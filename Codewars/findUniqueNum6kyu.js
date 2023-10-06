// problem link 6kyu: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// Solution
function findUniq(arr) {
	// check if the first two numbers are different
	if (arr[0] !== arr[1]) {
		// checks if the third number is the same as the first, then checks the second number for uniqueness
		if (arr[0] === arr[2]) {
			return arr[1];
			// if the third number isnt the same as the first then the frst number is the unqiue number
		} else {
			return arr[0];
		}
	}

	//looping to find the unique number if the first two numbers are the same
	let common = arr[0];

	// this loop is looking for a number that does not resemeble the first two numbers..
	for (let number of arr) {
		if (number !== common) {
			return number;
		}
	}
}

console.log(findUniq([1, 1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 1, 0.55, 1, 1])); // 0.55
