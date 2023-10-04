// Link to problem: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//Solution
function getMiddle(s) {
	let middleIndex = Math.floor(s.length / 2);

	if (s.length % 2 === 0) {
		return s[middleIndex - 1] + s[middleIndex];
	} else {
		return s[middleIndex];
	}
}

// basically if the string has an odd length I want to divide it by two and round up
// if even Id like to return the middle index and the one that comes before it.

console.log(getMiddle("test"));
console.log(getMiddle("tests"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
