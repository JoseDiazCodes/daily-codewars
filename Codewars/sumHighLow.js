/* Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// Solution

function sumArray(array) {
	// sorted the array, now im thinking about using a filter method to filter out the smallest and largest integer

	// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

	if (array == null || array.length <= 2) {
		return 0;
	}
	let sortedArr = array.sort((a, b) => a - b);

	// removing the first and last element from the sorted array..
	let slicedArr = sortedArr.slice(1, -1);

	return slicedArr.reduce((a, b) => a + b);
}
