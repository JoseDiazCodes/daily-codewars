//problem :https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// solution
function expandedForm(num) {
	let strNum = String(num);
	let length = strNum.length;
	let result = [];

	for (let i = 0; i < length; i++) {
		if (strNum[i] !== "0") {
			result.push(strNum[i] + "0".repeat(length - i - 1));
		}
	}

	return result.join(" + ");
}
