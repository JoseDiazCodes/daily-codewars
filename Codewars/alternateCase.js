// // do I need to access an index?
// //find if erickson in my array

// let arr = ["John", "Doe", "Erickson", "Smith", "Jane", "Brown"];
// console.log(arr.indexOf("Brown"));

// function forConditional() {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === "Erickson") {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function forOf() {
// 	for (let element of arr) {
// 		if (element === "Erickson") {
// 			return true;
// 		}
//             return false;
// 	}

// }

// // let obj = {
// //     name: "jose",
// //     lastName: "diaz"
// // }

// console.log(forConditional(), "for let i loop");
// console.log(forOf(), "for of loop");

// // i, e, n

let nameOf = "hello world";
let letters = nameOf.split("");

console.log(letters); // Output: ["j", "o", "s", "e"]

let arr2 = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
let arr = ["hello", "world"];

// let arr2joined = arr2.join(" ")
let hi = arr2.join("");

console.log(hi);
