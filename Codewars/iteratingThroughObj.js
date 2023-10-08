let obj = {
	name: "jose",
	lastName: "diaz",
};

let values = [];

for (let key in obj) {
	values.push(`${key} : ${obj[key]}`);
}

console.log(values); // Outputs: ["jose", "diaz"]
