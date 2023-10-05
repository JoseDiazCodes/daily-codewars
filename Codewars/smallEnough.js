// link to problem : https://www.codewars.com/kata/57cc981a58da9e302a000214/javascript

// Solution
function smallEnough(a, limit) {
	for (let number of a) {
		if (number > limit) {
			return false;
		}
	}
	return true;
}
