//www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

// Returns number of complete beeramid levels
https: var beeramid = function (bonus, price) {
	let level = 0;
	let cans = 0;

	while (true) {
		level++;
		cans += Math.pow(level, 2);
		const total = cans * price;

		if (total > bonus) {
			break;
		}
	}

	return level - 1;
};
