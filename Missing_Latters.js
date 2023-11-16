function fearNotLetter(str) {
	for (let i = 0; i < str.length - 1; i++) {
		// Check if the difference between the ASCII codes of consecutive letters is more than 1
		if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
			// Return the missing letter
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}
	}
	// If no missing letter is found, return undefined
	return undefined;
}
