// link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/javascript?filter=me&sort=best_practice&invalids=false
// solution
function findNextSquare(sq) {
	let sqrt = Math.sqrt(sq);
	if (Number.isInteger(sqrt) === false) {
		return -1;
	}
	let squared = sqrt + 1;
	return squared ** 2;
}
