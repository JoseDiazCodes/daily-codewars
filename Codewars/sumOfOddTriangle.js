// problem link: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// Solution
function rowSumOddNumbers(n) {
	return n ** 3;
}

/* The sum of the numbers in each row corresponds to the cube of the row number:
 */
