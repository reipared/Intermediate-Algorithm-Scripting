function pairElement(str) {
	// Define the pairings in an object
	var pairings = { A: "T", T: "A", C: "G", G: "C" };

	// Split the input string into an array of characters
	var dnaArray = str.split("");

	// Use map to create subarrays with the original base and its pairing
	var result = dnaArray.map(function (base) {
		return [base, pairings[base]];
	});

	return result;
}
