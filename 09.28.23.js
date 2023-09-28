/* Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.*/

//Solution

function expressionMatter(a, b, c) {
	let addSum = a + b + c;
	let product = a * b * c;
	let p1 = (a + b) * c;
	let p2 = a * (b + c);

	return Math.max(addSum, product, p1, p2);
}

// Unit Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", function () {
	it("Testing for fixed tests", () => {
		assert.strictEqual(expressionMatter(2, 1, 2), 6);
		assert.strictEqual(expressionMatter(2, 1, 1), 4);
		assert.strictEqual(expressionMatter(1, 1, 1), 3);
		assert.strictEqual(expressionMatter(1, 2, 3), 9);
		assert.strictEqual(expressionMatter(1, 3, 1), 5);
		assert.strictEqual(expressionMatter(2, 2, 2), 8);
		assert.strictEqual(expressionMatter(2, 2, 4), 16);
		assert.strictEqual(expressionMatter(3, 3, 3), 27);
		assert.strictEqual(expressionMatter(5, 1, 3), 20);
		assert.strictEqual(expressionMatter(3, 5, 7), 105);
		assert.strictEqual(expressionMatter(5, 6, 1), 35);
		assert.strictEqual(expressionMatter(1, 6, 1), 8);
		assert.strictEqual(expressionMatter(2, 6, 1), 14);
		assert.strictEqual(expressionMatter(6, 7, 1), 48);
		assert.strictEqual(expressionMatter(2, 10, 3), 60);
		assert.strictEqual(expressionMatter(1, 8, 3), 27);
		assert.strictEqual(expressionMatter(9, 7, 2), 126);
		assert.strictEqual(expressionMatter(1, 1, 10), 20);
		assert.strictEqual(expressionMatter(9, 1, 1), 18);
		assert.strictEqual(expressionMatter(10, 5, 6), 300);
		assert.strictEqual(expressionMatter(1, 10, 1), 12);
	});
});

describe("Random tests", function () {
	let solution = (a, b, c) =>
		Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

	it("Testing for 100 random tests", () => {
		for (let i = 0; i < 100; i++) {
			let a = 1 + Math.floor(Math.random() * 10);
			let b = 1 + Math.floor(Math.random() * 10);
			let c = 1 + Math.floor(Math.random() * 10);
			assert.strictEqual(
				expressionMatter(a, b, c),
				solution(a, b, c),
				`Testing for a = ${a}, b = ${b}, c = ${c}`
			);
		}
	});
});
