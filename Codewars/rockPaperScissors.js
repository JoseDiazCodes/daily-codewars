// link to problem : https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
// solution
const rps = (p1, p2) => {
	let rules = {
		rock: "paper",
		paper: "scissors",
		scissors: "rock",
	};

	if (p1 === p2) {
		return "Draw!";
	} else if (p1 === rules[p2]) {
		return "Player 1 won!";
	} else {
		return "Player 2 won!";
	}
};
