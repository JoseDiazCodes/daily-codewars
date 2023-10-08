// link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// solution
function repeatStr(n, s) {
	let result = "";
	for (let i = 0; i < n; i++) {
		result += s;
	}
	return result;
}

console.log(repeatStr(3, "hello"));
// repeatStr(3, "hello");
