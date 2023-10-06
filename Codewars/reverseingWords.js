// Problem https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

// Solution

function reverse(string) {
	let arrayOfString = string.split(" ");

	return arrayOfString.reverse().join(" ");
}

// .reverse() is an array prototype
