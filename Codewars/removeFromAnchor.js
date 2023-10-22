// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
	return url.split("#")[0];
}

// my thinking here was to split by anchor tag which creates an array with the elements before and after the anchor and return the 0 index of that array which will be everything before the anchor tag.
