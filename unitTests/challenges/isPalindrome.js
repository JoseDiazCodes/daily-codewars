function isPalindrome(str) {
	return str.split("").reverse().join("") === str ? true : false
}

module.exports = isPalindrome
