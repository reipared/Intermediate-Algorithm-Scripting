function spinalCase(str) {
	// Replace spaces and underscores with dashes
	str = str.replace(/\s|_/g, "-");

	// Use regex to insert dashes between camelCase letters
	str = str.replace(/([a-z])([A-Z])/g, "$1-$2");

	// Convert the string to lowercase
	return str.toLowerCase();
}

spinalCase("This Is Spinal Tap");
