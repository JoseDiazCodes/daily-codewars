// https://www.codewars.com/kata/559590633066759614000063/train/javascript

// solution
function minMax(arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);

	return [min, max];
}
