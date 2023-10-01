/* Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1] */

// Solution

function reverseSeq(num) {
	let result = [];

	for (let i = num; i > 0; i--) {
		result.push(i);
	}
	return result;
}
