// problem link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript?filter=me&sort=best_practice&invalids=false

// Solution

function longest(s1, s2) {
	let joinedStrs = s1 + s2;

	let arr = [...joinedStrs].sort();

	return arr.filter((e, i, arr) => arr.indexOf(e) === i).join("");
}
