# Codewars Test Suite

This project is a comprehensive test suite for all your Codewars challenges. It uses Jest, a delightful JavaScript Testing Framework with a focus on simplicity, to create and manage tests.

## Jest

Jest is used to write unit tests for all the Codewars challenges in this project. It provides a simple and intuitive API for describing what each piece of code should do, and then verifying that it behaves as expected.

## Jest Matchers

Jest provides a set of "matchers" to help you validate different things. Here are some commonly used matchers:

1. `toBe`: This is used to compare primitive values or to check referential identity of object instances. It's equivalent to `Object.is` method in JavaScript.

```javascript
test("two plus two is four", () => {
	expect(2 + 2).toBe(4)
})
```

#### toEqual: This is used to check that two objects have the same value. This matcher recursively checks the equality of all fields, rather than checking for object identity.

```javascript
test("object assignment", () => {
	const data = { one: 1 }
	data["two"] = 2
	expect(data).toEqual({ one: 1, two: 2 })
})
```

#### not: This is used to test the opposite of a matcher

```javascript
test("adding positive numbers is not zero", () => {
	for (let a = 1; a < 10; a++) {
		for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0)
		}
	}
})
```

For a complete list of Jest matchers, refer to the [Jest documentation](https://jestjs.io/docs/en/using-matchers).

## Babel

This project also uses Babel, a JavaScript compiler that allows us to use next generation JavaScript, today. Babel is configured via the .babelrc file to enable the use of ES6 import syntax, which is not natively supported in Node.js.

## Getting Started

1. Install the project dependencies:

```bash
npm install
```
