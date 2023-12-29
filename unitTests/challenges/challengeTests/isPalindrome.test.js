import isPalindrome from "../isPalindrome"

test("is racecar a palindrome", () => {
	expect(isPalindrome("racecar")).toBeTruthy()
})

test("cat is not a palindrome", () => {
	expect(isPalindrome("cat")).toBeFalsy()
})
