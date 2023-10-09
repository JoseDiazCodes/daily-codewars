// link: https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
//solution
function getDivisorsCnt(n) {
	let count = 0;

	for (let i = 1; i * i <= n; i++) {
		if (n % i === 0) {
			count++;
			if (i !== n / i) {
				count++;
			}
		}
	}
	return count;
}
