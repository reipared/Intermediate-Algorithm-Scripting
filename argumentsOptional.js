function addTogether() {
	// Check if both arguments are numbers
	function isValidNumber(num) {
		return typeof num === "number";
	}

	// If only one argument is provided, return a function
	if (arguments.length === 1 && isValidNumber(arguments[0])) {
		const firstArg = arguments[0];

		return function (secondArg) {
			if (isValidNumber(secondArg)) {
				return firstArg + secondArg;
			} else {
				return undefined;
			}
		};
	}

	// If two arguments are provided, check if they are both valid numbers
	if (
		arguments.length === 2 &&
		isValidNumber(arguments[0]) &&
		isValidNumber(arguments[1])
	) {
		return arguments[0] + arguments[1];
	}

	// Otherwise, return undefined
	return undefined;
}

// Example usage:
console.log(addTogether(2, 3)); // Output: 5
console.log(addTogether(2)(3)); // Output: 5
console.log(addTogether("2")); // Returns a function
console.log(addTogether("a", 3)); // Output: undefined (invalid arguments)
