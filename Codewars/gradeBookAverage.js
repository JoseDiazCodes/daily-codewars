//link to problem: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
//solution
function getGrade(s1, s2, s3) {
	let average = (s1 + s2 + s3) / 3;
	let score = average;

	if (average >= 90 && average <= 100) {
		return "A";
	} else if (average >= 80 && average < 90) {
		return "B";
	} else if (average >= 70 && average < 80) {
		return "C";
	} else if (average >= 60 && average < 70) {
		return "D";
	} else {
		return "F";
	}
}
