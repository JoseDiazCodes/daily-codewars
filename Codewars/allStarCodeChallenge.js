// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter) {
	return str.split("").filter((elm) => elm === letter).length;
}

// my thinking was to split the word into an array of the characters and then use a filter method to check each element to see wether the elm is the letter I am looking for if it is it will get filtered into the new array. Then I checked the length of the array and returned it.

/* Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1*/
