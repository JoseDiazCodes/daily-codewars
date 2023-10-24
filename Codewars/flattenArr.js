"use strict";

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

function flattenAndSort(array) {
	let result = [];

	if (array.length === 0) {
		return result;
	}

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			if (array[i].length !== 0) {
				result.push(array[i][j]);
			}
		}
	}

	return result.sort((x, y) => x - y);
}

// Psuedo

// given:  arr of integers
// return: a copy of arr that is flattened with integers sorted (ascending order) smallest to largest.
// edge case: empty array

// example: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]

// for (i)
// .sort((x,y) => x-y)
// let result (result.push)

// setting the data type of array
