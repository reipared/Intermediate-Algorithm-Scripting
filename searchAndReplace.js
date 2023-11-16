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

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
