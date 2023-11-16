function myReplace(str, before, after) {
	// Check if the first letter of 'before' is uppercase
	if (before[0] === before[0].toUpperCase()) {
		// If uppercase, capitalize the first letter of 'after'
		after = after.charAt(0).toUpperCase() + after.slice(1);
	} else {
		// If lowercase, make the first letter of 'after' lowercase
		after = after.charAt(0).toLowerCase() + after.slice(1);
	}

	// Use replace method to perform the search and replace
	return str.replace(before, after);
}

// Example usage for the provided tasks:

console.log(
	myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);

console.log(myReplace("Let us go to the store", "store", "mall"));
// Output: "Let us go to the mall"

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
// Output: "He is Sitting on the couch"

console.log(myReplace("I think we should look up there", "up", "Down"));
// Output: "I think we should look down there"

console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
// Output: "This has a spelling error"

console.log(myReplace("His name is Tom", "Tom", "john"));
// Output: "His name is John"

console.log(
	myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
// Output: "Let us get back to more Algorithms"
