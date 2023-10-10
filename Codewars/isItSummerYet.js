//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isItSummerYet(month) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	if (!months.includes(month)) {
		alert("Invalid month");
		return;
	}

	switch (month) {
		case "June":
		case "July":
		case "August":
			alert("YAY");
			break;
		default:
			alert("Booo");
			break;
	}
}
