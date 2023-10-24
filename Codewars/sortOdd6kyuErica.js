// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
	let filteredArr = array.filter((elm) => elm % 2 !== 0);
	let sortedArr = filteredArr.sort((x, y) => x - y);
	let copyArr = array;

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			copyArr.splice(i, 1, sortedArr.shift());
		}
	}
	return copyArr;
}

// Psuedo Code

// given: arr of numbers
// mustdo: sort the odd numbers in acending order, WHILE LEAVING THE EVEN NUMBERS at their originial positon.

// sort the array in ascending order.
//  match the even indexes from the original to the ones in the mutated one.

// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [5, 3].sort // [3, 5]

// [3, 4, 5, 6, 8] // sorted arry

// % 2 === 0 (even)

// filter((elm) => elm % 2 !== 0)
