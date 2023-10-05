//Link to problem: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

//Solution
function getCount(str) {
	let count = 0;
	let vowels = "aeiou";
	str = str.toLowerCase();

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			count++;
		}
	}
	return count;
}

// return count so I want a num
// aeiou
//only consist of letters and spaces
