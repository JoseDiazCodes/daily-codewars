// Problem
// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

// Solution
function getLetterScore(letter) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	return alphabet.indexOf(letter.toLowerCase()) + 1;
}

function high(x) {
	let words = x.split(" ");
	let highestScore = 0;
	let highestScoringWord = "";

	for (const word of words) {
		let score = 0;
		for (const char of word) {
			score += getLetterScore(char);
		}

		if (score > highestScore) {
			highestScore = score;
			highestScoringWord = word;
		}
	}

	return highestScoringWord;
}
