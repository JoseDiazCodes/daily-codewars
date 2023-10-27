// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

var solution = function (firstArray, secondArray) {
	let length = Math.min(firstArray.length, secondArray.length);
	let result = [];
	for (let i = 0; i < length; i++) {
		let one = firstArray[i];
		let two = secondArray[i];
		result.push(Math.pow(Math.abs(one - two), 2));
	}
	return result.reduce((x, y) => x + y) / length;
};

// 5kyu problem
