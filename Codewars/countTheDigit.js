// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Solution

function arithmetic(a, b, operator) {
	//your code here!

	switch (operator) {
		case "multiply":
			result = a * b;
			break;

		case "divide":
			if (b !== 0) {
				result = a / b;
			} else {
				return "cant divide anything by 0";
			}
			break;

		case "subtract":
			result = a - b;
			break;

		case "add":
			result = a + b;
			break;
		default:
			return "please enter two valid numbers with a valid operation +-/*";
	}

	return result;
}
