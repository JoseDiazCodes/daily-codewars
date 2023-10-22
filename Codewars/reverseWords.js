function reverseWords(str) {
	return str
		.split(" ")
		.map((elm) => elm.split("").reverse().join(""))
		.join(" ");
}

/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

// my thinking was to simply split the elements into an array by the spaces, and then run a map function that splits each element by letter, reverses it and then joins it together and adds it to the new array.

// then I joined the array back by the space because thats what I initially split the string by.
