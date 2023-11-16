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

// Example 1
var dnaSequence1 = "ATCG";
console.log(pairElement(dnaSequence1));
// Output: [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

// Example 2
var dnaSequence2 = "CGTA";
console.log(pairElement(dnaSequence2));
// Output: [ [ 'C', 'G' ], [ 'G', 'C' ], [ 'T', 'A' ], [ 'A', 'T' ] ]

// Example 3
var dnaSequence3 = "ATCGA";
console.log(pairElement(dnaSequence3));
// Output: [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'C', 'G' ], [ 'G', 'C' ], [ 'A', 'T' ] ]
